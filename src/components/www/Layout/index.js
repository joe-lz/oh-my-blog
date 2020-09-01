import Head from "next/head";
import Link from "next/link";
import AV from "leancloud-storage";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { getMenusList } from "src/service/menu";
import { getProfileList } from "src/service/profile";
import { getMyUserInfo, createUserInfo } from "src/service/user";

import styles from "./index.module.scss";
import Nav from "../Nav";

Components.defaultProps = {
  onChange: () => {},
};
function Components(props) {
  const [menus, setmenus] = useState(null);
  const [profile, setprofile] = useState(null);
  const [curUserInfo, setcurUserInfo] = useState(null);

  const handleInit = async () => {
    try {
      await getData("CMS_Menus", getMenusList, setmenus);
      await getData("CMS_Profile", getProfileList, setprofile);
      await getData("CMS_UserInfo", getMyUserInfo, setcurUserInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async (keyname, func, setFunc) => {
    // 获取菜单
    const local_data = sessionStorage.getItem(keyname);
    if (local_data) {
      setFunc(JSON.parse(local_data));
    } else {
      const res = await func();
      if (res) {
        setFunc(JSON.parse(JSON.stringify(res)));
        sessionStorage.setItem(keyname, JSON.stringify(res));
      } else {
        // 如果是CMS_UserInfo 则创建userinfo
        if (keyname === "CMS_UserInfo" && AV.User.current()) {
          await createUserInfo();
          await getData("CMS_UserInfo", getMyUserInfo, setcurUserInfo);
        }
      }
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    props.onChange &&
      props.onChange({
        menus,
        profile,
        userinfo: curUserInfo,
      });
  }, [menus, profile, curUserInfo]);

  return (
    <div className={styles.container}>
      {menus && profile && (
        <Nav menus={menus.value} profile={profile} userinfo={curUserInfo} />
      )}
      <div className={styles.body}>{props.children}</div>
      {profile && (
        <footer className={styles.footer}>
          <div className={styles.footer_content}>
            <div
              className={styles.logo}
              // style={{ backgroundImage: `url(${profile.logo})` }}
            >
              <img src={profile.logo} alt="" className="logo" />
            </div>
            {profile.github && (
              <div className={styles.item}>
                github：
                <a href={profile.github} className="link" target="_blank">
                  {profile.github}
                </a>
              </div>
            )}
            {profile.email && (
              <div className={styles.item}>
                邮箱：
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
              </div>
            )}
            {profile.copyright && (
              <div className={styles.copyright}>{profile.copyright}</div>
            )}
          </div>
        </footer>
      )}
    </div>
  );
}

export default Components;
