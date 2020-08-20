import Head from 'next/head'
import Link from 'next/link'
import Particles from 'react-particles-js'
import React, { useState, useEffect } from 'react'
import AV from 'leancloud-storage'
import { Spin, Alert, notification } from 'antd'

import styles from './index.module.scss'
import leanerrors from 'src/lib/leancloud_error_code.json'
import Sidebar from '../Sidebar'
import { getMyUserInfo } from 'src/service/user'

Components.defaultProps = {
  hideSidebar: false, // 是否隐藏侧边栏（文章编辑页面）
  priority: 1, // 用户等级
  userinfo: null, // userinfo poninter
}

function Components(props) {
  const { hideSidebar, priority, userinfo } = props
  const userinfoItem = userinfo ? userinfo.toJSON() : null
  
  return (
    <div className={!hideSidebar ? styles.container : styles.width100vw}>
      {[100, 99].includes(priority) && (
        <>
          {!hideSidebar && <Sidebar userinfo={userinfoItem}></Sidebar>}
          <div className={styles.content}>{props.children}</div>
        </>
      )}
      {priority === 1 && (
        <>
          <div className={styles.notAuthed}>
            <i className="iconfont icon-yonghushouquan"></i>
            <p>当前用户没有授权哦</p>
            <p>快快联系管理员，开通权限吧～</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Components
