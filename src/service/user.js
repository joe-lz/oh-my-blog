import AV from "leancloud-storage";
import shortid from "shortid";

export const getMyUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query("CMS_UserInfo");
    const curUser = AV.User.current();
    query.equalTo("user", curUser);
    query
      .first()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建userinfo
    const curUser = AV.User.current();
    const userinfoObj = new AV.Object("CMS_UserInfo");
    userinfoObj.set("user", curUser);
    userinfoObj.set("nickname", curUser.toJSON().username);
    userinfoObj.set("priority", 1); // 权限等级 默认：1 未授权
    userinfoObj.set("shortid", shortid.generate()); // shortid
    // 将对象保存到云端
    userinfoObj.save().then(
      (todo) => {
        resolve(todo);
      },
      (error) => {
        // 异常处理
        reeject(error);
      }
    );
  });
};

export const getUserInfoById = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query("CMS_UserInfo");
    query
      .get(params.id)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUserInfo = ({ userinfoItem, params }) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map((keyname) => {
      userinfoItem.set(keyname, params[keyname]);
    });
    userinfoItem.save().then(
      (res) => {
        resolve(res);
      },
      (error) => {
        // 异常处理
        reject(error);
      }
    );
  });
};

// 关注
export const userFollow = ({ userid }) => {
  return new Promise((resolve, reject) => {
    var query = AV.User.current().followeeQuery();
    // query.include('followee')
    query.count().then((number) => {
      if (number > 50) {
        reject("超过最大关注人数(50人)");
      } else {
        AV.User.current()
          .follow(userid)
          .then(
            (res) => {
              resolve(res);
            },
            (error) => {
              // 异常处理
              reject("关注失败");
            }
          );
      }
    });
  });
};

// 取消关注
export const userUnFollow = ({ userid }) => {
  return new Promise((resolve, reject) => {
    AV.User.current()
      .unfollow(userid)
      .then(
        (res) => {
          resolve(res);
        },
        (error) => {
          // 异常处理
          reject(error);
        }
      );
  });
};

// 获取我关注的用户列表
export const userFolloweeList = () => {
  return new Promise((resolve, reject) => {
    if (!AV.User.current()) {
      reject([]);
    } else {
      var query = AV.User.current().followeeQuery();
      query.include("followee");
      query.find().then((followees) => {
        //关注的用户列表 followees
        resolve(followees);
      });
    }
  });
};
// 获取用户关注数
export const userFolloweeNumber = ({ userItem }) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followeeQuery();
    query.count().then((number) => {
      resolve(number);
    });
  });
};

// 获取用户粉丝数
export const userFollowerNumber = ({ userItem }) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followerQuery();
    query.count().then((number) => {
      resolve(number);
    });
  });
};
