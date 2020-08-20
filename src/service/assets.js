import AV from "leancloud-storage";

export const createAssets = (params) => {
  return new Promise((resolve, reject) => {
    const file = new AV.File("avatar.jpg", params.e);
    // file.set('status', 1)
    // file.set('user', AV.User.current())
    file.save().then(
      async (file) => {
        console.log(`文件保存完成。objectId：${file.id}`);
        resolve(file);
      },
      (error) => {
        // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
        reject(error);
      }
    );
  });
};

export const getAssetsList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query("_File");
    query.descending('createdAt')
    query.limit(50);
    Object.keys(params).map((keyname) => {
      query.equalTo(keyname, params[keyname]);
    });
    query.equalTo('metaData.owner', AV.User.current().id)
    query
      .find()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
