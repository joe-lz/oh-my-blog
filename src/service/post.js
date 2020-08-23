import AV from 'leancloud-storage'

export const createPost = (params) => {
  return new Promise((resolve, reject) => {
    const post = new AV.Object('CMS_Posts')
    post.set('status', 1)
    post.set('likes', 0)
    post.set('likesUser', [])
    post.set('user', AV.User.current())
    Object.keys(params).map((keyname) => {
      post.set(keyname, params[keyname])
    })
    // 将对象保存到云端
    post.save().then(
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

export const updatePost = ({ postItem, params }) => {
  return new Promise((resolve, reject) => {
    if (params.likes) {
      postItem.increment('likes', params.likes)
      if (params.likes > 0) {
        postItem.addUnique('likesUser', params.likesUser_id)
      } else {
        postItem.remove('likesUser', params.likesUser_id)
      }
    } else if (params.comments) {
      postItem.increment('comments', params.comments)
    } else {
      Object.keys(params).map((keyname) => {
        postItem.set(keyname, params[keyname])
      })
    }
    postItem.save().then(
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

export const getPostList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Posts')
    Object.keys(params).map((keyname) => {
      query.equalTo(keyname, params[keyname])
    })
    query.include('userinfo')
    query.include('topic')
    query.descending('createdAt')
    query.limit(50)
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
