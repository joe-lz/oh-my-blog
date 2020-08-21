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
            <Link href="/admin/home">创作中心</Link>
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
    <>
      {profile && (
        <>
          <div>
            <Head>
              <title>
                {profile.title}
                {curMenu ? `-${curMenu.title}` : ""}
                {router.pathname.includes("www/home") ? "-首页" : ""}
                {router.pathname.includes("www/posts")
                  ? `-${profile.blogName}`
                  : ""}
              </title>
            </Head>
            <div className={styles.nav1}>
              <div className={styles.nav}>
                <div
                  className={styles.nav_logo}
                  style={{ backgroundImage: `url(${profile.logo})` }}
                ></div>
                <div className={styles.nav_link}>
                  <Link href="/www/home">
                    <div
                      className={
                        router.pathname.includes("www/home")
                          ? styles.nav_link_item_active
                          : styles.nav_link_item
                      }
                    >
                      <i className="iconfont icon-fankuitianxie"></i>
                      文章
                    </div>
                  </Link>
                  {/* {profile.showBlog && (
                    <Link href="/www/posts">
                      <div
                        className={
                          router.pathname.includes("www/posts")
                            ? styles.nav_link_item_active
                            : styles.nav_link_item
                        }
                      >
                        <i className="iconfont icon-message_three_points"></i>
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
                  {/* <Link href="/www/about">
                    <div
                      className={
                        router.pathname.includes("www/about")
                          ? styles.nav_link_item_active
                          : styles.nav_link_item
                      }
                    >
                      <i className="iconfont icon-profile"></i>
                      关于我
                    </div>
                  </Link> */}
                  {profile.github && (
                    <a href={profile.github} target="_blank">
                      <div className={styles.nav_link_item}>
                        <i className="iconfont icon-github"></i>
                        Github
                      </div>
                    </a>
                  )}
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
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Components;
