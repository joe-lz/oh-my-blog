import AV from "leancloud-storage";
import defaultMenu, { handleformatData } from "src/lib/defaultMenu";

export const createMenus = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const menusObject = new AV.Object("CMS_Menus");
    menusObject.set("value", defaultMenu);
    // 将对象保存到云端
    menusObject.save().then(
      (todo) => {
        resolve(todo);
      },
      (error) => {
        reject(err);
      }
    );
  });
};

export const getMenusList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new AV.Query("CMS_Menus");
    query.descending('createdAt')
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

export const updateMenus = ({ menuItem, params }) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map((keyname) => {
      menuItem.set(keyname, params[keyname]);
    });
    menuItem.save().then(
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
