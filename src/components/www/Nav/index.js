import Head from "next/head";
import Link from "next/link";
import AV from "leancloud-storage";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Menu, Dropdown, message } from "antd";

import styles from "./index.module.scss";
import Login from "../Login";

Components.defaultProps = {
  menus: [],
  profile: null,
  userinfo: null,
};

function Components(props) {
  const { userinfo, menus, profile } = props;
  const curUser = AV.User.current();
  const [curMenu, setcurMenu] = useState(null);

  const menu = (
    <>
      {userinfo && (
        <Menu>
          <Menu.Item>
            <Link href={`/www/user/${userinfo.objectId}`}>我的首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/www/center">创作中心</Link>
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

  const router = useRouter();
  useEffect(() => {
    if (router) {
      menus.map((obj) => {
        if (router.query.cate1 === obj.key) {
          setcurMenu(obj);
        }
        return obj;
      });
    }
  }, [router]);

  return (
    <div>
      <Head>
        {profile && (
          <title>
            {profile.title || "oh my blog"}
            {curMenu ? `-${curMenu.title}` : ""}
            {router.pathname.includes("www/home") ? "-首页" : ""}
            {router.pathname.includes("www/posts")
              ? `-${profile.blogName}`
              : ""}
          </title>
        )}
      </Head>
      {/* 一级目录 */}
      <div className={styles.nav1}>
        <div className={styles.nav}>
          <img src={profile.logo} alt="" className={styles.nav_logo} />
          <div className={styles.nav_link}>
            <Link href="/www/home">
              <div
                className={
                  router.pathname.includes("www/home")
                    ? styles.nav_link_item_active
                    : styles.nav_link_item
                }
              >
                首页
              </div>
            </Link>
            {menus.map((obj) => {
              const toLink = `/www/alist?cate1=${obj.key}`;
              // if (obj.children && obj.children.length > 0) {
              //   toLink = `/www/alist?cate1=${obj.key}&cate2=${obj.children[0].key}`
              // }
              return (
                <Link href={toLink} key={obj.key}>
                  <div
                    className={
                      router.query.cate1 === obj.key
                        ? styles.nav_link_item_active
                        : styles.nav_link_item
                    }
                    key={obj.key}
                  >
                    {obj.title}
                  </div>
                </Link>
              );
            })}
            {/* {profile.showBlog && (
              <Link href="/www/posts">
                <div
                  className={
                    router.pathname.includes('www/posts')
                      ? styles.nav_link_item_active
                      : styles.nav_link_item
                  }
                >
                  {profile.blogName}
                </div>
              </Link>
            )} */}
            <div
              className={styles.nav_link_item}
              onClick={() => {
                message.info("开发中，即将开放");
              }}
            >
              <i className="iconfont icon-message_three_points"></i>
              留言区
            </div>
          </div>
          {curUser ? (
            <Dropdown overlay={menu} arrow placement="bottomRight">
              <div
                className={styles.link_login}
                onClick={(e) => e.preventDefault()}
              >
                <div className={styles.btn}>
                  <span>{curUser.attributes.username}</span>
                  <i
                    className="iconfont icon-down"
                    style={{ fontSize: 12 }}
                  ></i>
                </div>
              </div>
            </Dropdown>
          ) : (
            <Login>
              <p className={styles.nav_login}>登录/注册</p>
            </Login>
          )}
        </div>
      </div>
      {/* 二级目录 */}
      {curMenu && curMenu.children && (
        <div className={styles.nav2}>
          <div className={styles.nav_link}>
            <Link href={`/www/alist?cate1=${curMenu.key}`}>
              <div
                className={
                  !router.query.cate2
                    ? styles.nav_link_item_active
                    : styles.nav_link_item
                }
              >
                全部
              </div>
            </Link>
            {curMenu.children.map((obj) => {
              return (
                <Link
                  href={`/www/alist?cate1=${curMenu.key}&cate2=${obj.key}`}
                  key={obj.key}
                >
                  <div
                    className={
                      router.query.cate2 === obj.key
                        ? styles.nav_link_item_active
                        : styles.nav_link_item
                    }
                    key={obj.key}
                  >
                    {obj.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Components;
