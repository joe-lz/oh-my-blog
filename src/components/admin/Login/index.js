import Head from 'next/head'
import Link from 'next/link'
import Particles from 'react-particles-js'
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import AV from 'leancloud-storage'
import { Spin, Alert, notification } from 'antd'

import styles from './index.module.scss'
import particlesParams from './particlesParams'
import leanerrors from 'src/lib/leancloud_error_code.json'

function Components(props) {
  const [isFlipped, setisFlipped] = useState(false)
  const [isSpin, setisSpin] = useState(false)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [repassword, setrepassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      setisSpin(true)
      AV.User.logIn(username, password).then(
        (user) => {
          // 登录成功
          setisSpin(false)
          notification.success({
            message: '登录成功',
            // description: "请输入用户名、密码",
          })
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        },
        (error) => {
          // 登录失败（可能是密码错误）
          setisSpin(false)
          notification.error({
            message: '登录失败',
            description: leanerrors[error.code] ? leanerrors[error.code].msg : '',
          })
        }
      )
    } else {
      notification.error({
        message: '登录失败',
        description: '请输入用户名、密码',
      })
    }
  }

  const handleRegister = () => {
    if (!username || !password) {
      notification.error({
        message: '注册失败',
        description: '请输入用户名、密码',
      })
      return
    }
    if (repassword !== password) {
      notification.error({
        message: '注册失败',
        description: '请输入用户名、密码',
      })
      return
    }
    setisSpin(true)
    const user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.signUp().then(
      (user) => {
        // 注册成功
        setisSpin(false)
        notification.success({
          message: '注册成功',
          // description: "请输入用户名、密码",
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      },
      (error) => {
        // 注册失败（通常是因为用户名已被使用）
        setisSpin(false)
        notification.error({
          message: '注册失败',
          description: leanerrors[error.code] ? leanerrors[error.code].msg : '',
        })
      }
    )
  }
  
  return (
    <div className={styles.banner}>
      <div className={styles.banner_content}>
        {/* bg */}
        <img
          className={styles.logobg}
          src="https://qiniu.jingdian.club/FtFSZANFUxt2J5ER9ESY4llFWlNb"
          // src={props.profile.attributes.logo}
        ></img>
        {/* 粒子效果 */}
        {particlesParams && <Particles className={styles.tsparticles} params={particlesParams.nasa} />}
        <div className={styles.banner_body}>
          <Spin spinning={isSpin} tip="加载中...">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              {/* 登录 */}
              <div className={styles.banner_body_content}>
                <p className={styles.banner_body_title}>登录</p>
                <div className={styles.banner_body_input}>
                  <input
                    placeholder="用户名"
                    onChange={(e) => {
                      setusername(e.target.value)
                    }}
                  ></input>
                </div>
                <div className={styles.banner_body_input}>
                  <input
                    placeholder="密码"
                    type="password"
                    onChange={(e) => {
                      setpassword(e.target.value)
                    }}
                  ></input>
                </div>
                <div className={styles.banner_body_input}>
                  <button
                    onClick={() => {
                      handleLogin()
                    }}
                  >
                    确定
                  </button>
                </div>
                <div className={styles.banner_body_input}>
                  <button
                    className={styles.banner_body_btn_primary}
                    onClick={() => {
                      setisFlipped(true)
                    }}
                  >
                    还没有账户？<a>立即注册</a>
                  </button>
                </div>
              </div>
              {/* 注册 */}
              <div className={styles.banner_body_content}>
                <p className={styles.banner_body_title}>注册</p>
                <div className={styles.banner_body_input}>
                  <input
                    placeholder="用户名"
                    onChange={(e) => {
                      setusername(e.target.value)
                    }}
                  ></input>
                </div>
                <div className={styles.banner_body_input}>
                  <input
                    placeholder="密码"
                    type="password"
                    onChange={(e) => {
                      setpassword(e.target.value)
                    }}
                  ></input>
                </div>
                <div className={styles.banner_body_input}>
                  <input
                    placeholder="再次输入密码"
                    type="password"
                    onChange={(e) => {
                      setrepassword(e.target.value)
                    }}
                  ></input>
                </div>
                <div className={styles.banner_body_input}>
                  <button
                    onClick={() => {
                      handleRegister()
                    }}
                  >
                    确定
                  </button>
                </div>
                <div className={styles.banner_body_input}>
                  <button
                    className={styles.banner_body_btn_primary}
                    onClick={() => {
                      setisFlipped(false)
                    }}
                  >
                    已有账户？<a>立即登录</a>
                  </button>
                </div>
              </div>
            </ReactCardFlip>
          </Spin>
        </div>
      </div>
    </div>
  )
}

export default Components
