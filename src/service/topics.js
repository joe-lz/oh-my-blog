import AV from 'leancloud-storage'

export const createTopics = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const topicObject = new AV.Object('CMS_Topics')
    topicObject.set('status', 1)
    Object.keys(params).map((keyname) => {
      topicObject.set(keyname, params[keyname])
    })
    // 将对象保存到云端
    topicObject.save().then(
      (todo) => {
        resolve(todo)
      },
      (error) => {
        reject(err)
      }
    )
  })
}

export const getTopicList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Topics')
    query.descending('createdAt')
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

export const updateTopic = ({ topicItem, params }) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map((keyname) => {
      topicItem.set(keyname, params[keyname])
    })
    topicItem.save().then(
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