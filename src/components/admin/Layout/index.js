import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import AV from 'leancloud-storage'
import dynamic from 'next/dynamic'
import shortid from 'shortid'

import styles from './index.module.scss'
const Nav = dynamic(() => import('src/components/admin/Nav'), {
  ssr: false,
})
const Login = dynamic(() => import('src/components/admin/Login'), {
  ssr: false,
})
const BodyContent = dynamic(() => import('src/components/admin/BodyContent'), {
  ssr: false,
})
import { createProfile, getProfileList, updateProfile } from 'src/service/profile'
import { getMyUserInfo } from 'src/service/user'

Components.defaultProps = {
  onChange: () => {},
  hideSidebar: false,
  bodyStyle: {},
}

function Components(props) {
  const [curUser, setcurUser] = useState(AV.User.current())
  const [userinfo, setuserinfo] = useState(null)
  const [profile, setprofile] = useState(null)
  // 获取博客设置资料
  const getProfile = () => {
    getProfileList().then((res) => {
      if (res) {
        setprofile(res)
      } else {
        createProfile().then((resCreate) => {
          setprofile(resCreate)
        })
      }
    })
  }

  // 获取当前用户资料
  const fetchUserInfo = async () => {
    const res_userinfo = await getMyUserInfo()
    if (res_userinfo) {
      setuserinfo(res_userinfo)
    } else {
      // 创建userinfo
      const userinfoObj = new AV.Object('CMS_UserInfo')
      userinfoObj.set('user', curUser)
      userinfoObj.set('nickname', curUser.toJSON().username)
      userinfoObj.set('priority', 1) // 权限等级 默认：1 未授权
      userinfoObj.set('shortid', shortid.generate()) // shortid
      // 将对象保存到云端
      userinfoObj.save().then(
        (todo) => {
          // 成功保存之后，执行其他逻辑
          fetchUserInfo()
        },
        (error) => {
          // 异常处理
        }
      )
    }
  }

  useEffect(() => {
    getProfile()
    if (curUser) {
      fetchUserInfo()
    }
  }, [])

  useEffect(() => {
    props.onChange &&
      props.onChange({
        curUser,
        profile,
        userinfo,
      })
  }, [curUser, profile, userinfo])

  return (
    <div className={styles.container}>
      <Head>
        <title>管理后台</title>
      </Head>
      <Nav type="login" curUser={curUser} userinfo={userinfo} profile={profile} />
      <div className={styles.body} style={props.bodyStyle}>
        {!curUser && <Login profile={profile} />}
        {curUser && (
          <BodyContent priority={userinfo ? userinfo.toJSON().priority : 0} userinfo={userinfo} hideSidebar={props.hideSidebar}>
            {props.children}
          </BodyContent>
        )}
      </div>
      {/* {profile && (
        <footer>
          <div className={styles.footer_content}>
            <img src={profile.toJSON().logo} alt="" className={styles.logo} />
            <p className={styles.copyright}>{profile.toJSON().copyright}</p>
          </div>
        </footer>
      )} */}
    </div>
  )
}

export default Components
