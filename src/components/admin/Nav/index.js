import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Divider } from "antd";

import styles from "./index.module.scss";
import priorityArr from "src/lib/priority";

Components.defaultProps = {
  curUser: null, //pointer
  userinfo: null, // pointer
  profile: null, // pointer
};
function Components(props) {
  let { curUser, userinfo, profile } = props;

  let priorityLabel = "";
  priorityArr.map((obj) => {
    if (userinfo && obj.value == userinfo.attributes.priority) {
      priorityLabel = obj.label;
    }
  });

  const menu = (
    <>
      {userinfo && (
        <Menu>
          <Menu.Item>
            {/* <a target="_blank" href={`/www/user/${userinfo.id}`}>
              我的主页
            </a> */}
            <Menu.Item>
              <Link href="/www/home">首页</Link>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item
            danger
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              window.location.reload();
            }}
          >
            退出登录
          </Menu.Item>
        </Menu>
      )}
    </>
  );

  return (
    <header className={styles.header}>
      <nav>
        {profile && (
          <Link href="/">
            <img src={profile.toJSON().logo} alt="" className={styles.logo} />
          </Link>
        )}
        <div className={styles.right}>
          <div className={styles.priority}>
            <span>{priorityLabel}</span>
          </div>
          {userinfo && (
            <>
              <span className={styles.divider}>|</span>
              <Dropdown overlay={menu} arrow placement="bottomRight">
                <div
                  className={styles.link}
                  onClick={(e) => e.preventDefault()}
                >
                  <div className={styles.btn}>
                    <span>{userinfo.attributes.nickname}</span>
                    <i
                      className="iconfont icon-down"
                      style={{ fontSize: 12 }}
                    ></i>
                  </div>
                </div>
              </Dropdown>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Components;
