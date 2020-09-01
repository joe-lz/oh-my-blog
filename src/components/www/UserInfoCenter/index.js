import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { BackTop, Button } from 'antd'

import styles from './index.module.scss'
import { userFolloweeNumber, userFollowerNumber } from 'src/service/user'

Components.defaultProps = {
  curUserInfoJOSN: null,
}

function Components(props) {
  const [num_followee, setnum_followee] = useState(0)
  const [num_follower, setnum_follower] = useState(0)

  useEffect(() => {
    async function fetchData() {
      if (props.curUserInfo) {
        setnum_followee(await userFolloweeNumber({ userItem: props.curUserInfo.attributes.user }))
        setnum_follower(await userFollowerNumber({ userItem: props.curUserInfo.attributes.user }))
      }
    }
    fetchData()
  }, [props.curUserInfo])

  const curUserInfoJOSN = props.curUserInfo.toJSON()
  return (
    <>
      {curUserInfoJOSN && (
        <div className={styles.left}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${curUserInfoJOSN.avatar})` }}></div>
          <div className={styles.nickname}>{curUserInfoJOSN.nickname}</div>
          {curUserInfoJOSN.position && <p className={styles.position}>{curUserInfoJOSN.position}</p>}
          {curUserInfoJOSN.desc && <div className={styles.desc}>{curUserInfoJOSN.desc}</div>}
          {AV.User.current() ? (
            <>
              {AV.User.current().id !== curUserInfoJOSN.user.objectId ? (
                <Button shape="round" className={styles.btn_follow}>
                  关注
                </Button>
              ) : (
                <Link href="/admin/user/account">
                  <Button shape="round" className={styles.btn_follow}>
                    修改资料
                  </Button>
                </Link>
              )}
            </>
          ) : (
            <Link href="/admin/user/account">
              <Button shape="round" className={styles.btn_follow}>
                关注
              </Button>
            </Link>
          )}
          <p className={styles.follows_num}>
            <i className="iconfont icon-personnel"></i>
            <span className={styles.num}>{num_followee}</span>
            关注者
            <span className={styles.num}>・{num_follower}</span>
            关注中
          </p>
          {curUserInfoJOSN.co_name && (
            <div className={styles.item}>
              <i className="iconfont icon-company"></i>
              {curUserInfoJOSN.co_name}
            </div>
          )}
          {curUserInfoJOSN.city && (
            <div className={styles.item}>
              <i className="iconfont icon-location"></i>
              {curUserInfoJOSN.city}
            </div>
          )}
          {curUserInfoJOSN.email && (
            <div className={styles.item}>
              <i className="iconfont icon-email"></i>
              <a href={`mailto:${curUserInfoJOSN.email}`} className="link">
                {curUserInfoJOSN.email}
              </a>
            </div>
          )}
          {curUserInfoJOSN.github && (
            <div className={styles.item}>
              <i className="iconfont icon-github-line"></i>
              <a target="_blank" href={curUserInfoJOSN.github} className="link">
                {curUserInfoJOSN.github}
              </a>
            </div>
          )}
          {curUserInfoJOSN.social_link && (
            <div className={styles.item}>
              <i className="iconfont icon-link"></i>
              <a target="_blank" href={curUserInfoJOSN.social_link} className="link">
                {curUserInfoJOSN.social_link}
              </a>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Components
