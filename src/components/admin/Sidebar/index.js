import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Particles from 'react-particles-js'
import React, { useState } from 'react'
import AV from 'leancloud-storage'
import { Spin, Alert, notification } from 'antd'

import styles from './index.module.scss'
import leanerrors from 'src/lib/leancloud_error_code.json'
import Item2 from './Item2'

function Components(props) {
  const [isFlipped, setisFlipped] = useState(false)
  const router = useRouter()
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_item}>
        <Link href="/admin/home">
          <div className={!router.pathname.includes('/admin/home') ? styles.sidebar_item_level1 : styles.sidebar_item_level1_active}>
            <i className="iconfont icon-home"></i>首页
          </div>
        </Link>
      </div>
      <div className={styles.sidebar_item}>
        <div className={!router.pathname.includes('/admin/feature') ? styles.sidebar_item_level1 : styles.sidebar_item_level1_active}>
          <i className="iconfont icon-gongneng"></i>
          功能
        </div>
        <div className={styles.sidebar_item_placeholder}></div>
        <Item2 path="/admin/feature/articles" title="我的文章" />
        <Item2 path="/admin/feature/assets" title="素材管理" />
      </div>
      <div className={styles.sidebar_item}>
        <div className={!router.pathname.includes('/admin/user') ? styles.sidebar_item_level1 : styles.sidebar_item_level1_active}>
          <i className="iconfont icon-profile"></i>账户
        </div>
        <div className={styles.sidebar_item_placeholder}></div>
        <Item2 path="/admin/user/account" title="个人资料" />
        <Item2 path="/admin/user/message" title="消息管理" />
      </div>
      {props.userinfo && props.userinfo.priority === 100 && (
        <div className={styles.sidebar_item}>
          <div className={!router.pathname.includes('/admin/manage') ? styles.sidebar_item_level1 : styles.sidebar_item_level1_active}>
            <i className="iconfont icon-shezhi"></i>设置
          </div>
          <div className={styles.sidebar_item_placeholder}></div>
          <Item2 path="/admin/manage/menus" title="自定义菜单" />
          <Item2 path="/admin/manage/userlist" title="用户权限" />
          <Item2 path="/admin/manage/setting" title="基本设置" />
          <Item2 path="/admin/manage/ad" title="广告设置" />
        </div>
      )}
      {props.userinfo && props.userinfo.priority === 100 && (
        <div className={styles.sidebar_item}>
          <div className={!router.pathname.includes('/admin/blog') ? styles.sidebar_item_level1 : styles.sidebar_item_level1_active}>
            <i className="iconfont icon-iconfontdongtaidianji"></i>
            {process.env.blogname}
          </div>
          <div className={styles.sidebar_item_placeholder}></div>
          <Item2 path="/admin/blog/topics" title="话题设置" />
          <Item2 path="/admin/blog/manage" title="动态管理" />
        </div>
      )}
    </div>
  )
}

export default Components
