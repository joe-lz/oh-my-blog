import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, Dropdown, Divider } from 'antd'

import styles from './index.module.scss'
import priorityArr from 'src/lib/priority'

Components.defaultProps = {
  curUser: null, //pointer
  userinfo: null, // pointer
  profile: null, // pointer
}
function Components(props) {
  let { curUser, userinfo, profile } = props

  let priorityLabel = ''
  priorityArr.map((obj) => {
    if (userinfo && obj.value == userinfo.attributes.priority) {
      priorityLabel = obj.label
    }
  })

  const menu = (
    <>
      {userinfo && (
        <Menu>
          <Menu.Item>
            <a target="_blank" href={`/www/user/${userinfo.id}`}>
              我的主页
            </a>
          </Menu.Item>
          <Menu.Item
            danger
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
          >
            退出登录
          </Menu.Item>
        </Menu>
      )}
    </>
  )

  return (
    <header className={styles.header}>
      <nav>
        {profile && (
          <Link href="/">
            {/* <img
            className={styles.logoimg}
            src={profile && profile.attributes.logo ? profile.attributes.logo : 'https://qiniu.jingdian.club/FpFCrbbNmg-GmFfVLdsxmmbPZFHw'}
          ></img> */}
            <div className={styles.logo} style={{ backgroundImage: `url(${profile.attributes.logo})` }}></div>
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
                <div className={styles.link} onClick={(e) => e.preventDefault()}>
                  <div className={styles.btn}>
                    <span>{userinfo.attributes.nickname}</span>
                    <i className="iconfont icon-down" style={{ fontSize: 12 }}></i>
                  </div>
                </div>
              </Dropdown>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Components
