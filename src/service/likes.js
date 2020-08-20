import AV from 'leancloud-storage'

export const createLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const likes = new AV.Object('CMS_Likes')
    likes.set('user', AV.User.current())
    likes.set('article', params.article)
    // 将对象保存到云端
    likes.save().then(
      (res) => {
        resolve(res)
      },
      (error) => {
        // 异常处理
        reject(error)
      }
    )
  })
}

export const deleteLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    params.item.destroy().then(() => {
      resolve()
    })
  })
}

export const countLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Likes')
    // query.equalTo('user', AV.User.current())
    query.equalTo('article', params.article)

    query.count().then((number) => {
      resolve(number)
    })
  })
}

export const getMyLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Likes')
    query.equalTo('user', AV.User.current())
    query.equalTo('article', params.article)
    query
      .first()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
