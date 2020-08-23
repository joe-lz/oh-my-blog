import AV from 'leancloud-storage'

export const createComment = (params) => {
  return new Promise((resolve, reject) => {
    const comments = new AV.Object('CMS_Comments')
    comments.set('status', 1)
    comments.set('likes', 0)
    comments.set('likesUser', [])
    comments.set('children', [])
    Object.keys(params).map((keyname) => {
      comments.set(keyname, params[keyname])
    })
    // 将对象保存到云端
    comments.save().then(
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


export const updateComment = ({ commentItem, params }) => {
  return new Promise((resolve, reject) => {
    if (params.likes) {
      commentItem.increment('likes', params.likes)
      if (params.likes > 0) {
        commentItem.addUnique('likesUser', params.likesUser_id)
      } else {
        commentItem.remove('likesUser', params.likesUser_id)
      }
    } else {
      Object.keys(params).map((keyname) => {
        commentItem.set(keyname, params[keyname])
      })
    }
    commentItem.save().then(
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

export const getCommentList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Comments')
    query.descending('createdAt')
    query.include('user')
    query.limit(50)
    Object.keys(params).map((keyname) => {
      query.equalTo(keyname, params[keyname])
    })
    query
      .find()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}


export const countComments = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Comments')
    query.equalTo('aid', params.article)

    query.count().then((number) => {
      resolve(number)
    })
  })
}