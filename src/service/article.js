import AV from 'leancloud-storage'

export const createArticle = (params) => {
  return new Promise((resolve, reject) => {
    const articles = new AV.Object('CMS_Articles')
    articles.set('status', 1)
    // articles.set('user', AV.User.current())
    Object.keys(params).map((keyname) => {
      articles.set(keyname, params[keyname])
    })
    // 将对象保存到云端
    articles.save().then(
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

export const updateArticle = ({ articleItem, params }) => {
  return new Promise((resolve, reject) => {
    // articleItem.set("articleVal", articleVal);
    // articleItem.set("title", articleTitle);
    if (params.views) {
      articleItem.increment('views', params.views)
    } else if (params.collects) {
      articleItem.increment('collects', params.collects)
    } else if (params.likes) {
      articleItem.increment('likes', params.likes)
    } else {
      Object.keys(params).map((keyname) => {
        articleItem.set(keyname, params[keyname])
      })
    }
    articleItem.save().then(
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

export const getArticleList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Articles')
    query.descending('createdAt')
    query.include('author')
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

export const getArticleById = ({ id }) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Articles')
    query.include('author')
    query
      .get(id)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
