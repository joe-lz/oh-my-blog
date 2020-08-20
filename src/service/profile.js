import AV from 'leancloud-storage'

export const createProfile = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const profileObject = new AV.Object('CMS_Profile')
    profileObject.set('logo', 'https://static.ccrgt.com/images/42bc258e-d183-49d5-aea4-6eb5914647e3.png')
    profileObject.set('title', 'oh my blog')
    profileObject.set('github', 'https://github.com/joe-lz/oh-my-blog')
    profileObject.set('copyright', 'Copyright © 1998 - 2020 oh my blog. All Rights Reserved')
    profileObject.set('allowAComment', true)
    profileObject.set('allowBComment', true)
    profileObject.set('showBlog', true)
    profileObject.set('blogName', '沸点')
    // 将对象保存到云端
    profileObject.save().then(
      (todo) => {
        resolve(todo)
      },
      (error) => {
        reject(err)
      }
    )
  })
}

export const getProfileList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query('CMS_Profile')
    query.descending('createdAt')
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

export const updateProfile = ({ profileItem, params }) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map((keyname) => {
      profileItem.set(keyname, params[keyname])
    })
    profileItem.save().then(
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
