import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Tree, Button, notification, Input, Modal, TreeSelect, Menu, Dropdown, Spin } from 'antd'

import styles from './index.module.scss'
import { createComment, updateComment, getCommentList } from 'src/service/comment'

require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Components(props) {
  const [hasLiked, sethasLiked] = useState(false)
  const [likes, setlikes] = useState(0)

  useEffect(() => {
    if (props.item && props.userinfo) {
      const itemNew = JSON.parse(JSON.stringify(props.item))
      const likesUser = itemNew.likesUser || []
      sethasLiked(likesUser.includes(props.userinfo.objectId))
      setlikes(itemNew.likes || 0)
    }
  }, [props.item, props.userinfo])

  const author = props.item.attributes.user
  return (
    <div className={styles.item}>
      <a href={`/www/user/${author.objectId}`} target="_blank">
        <div className={styles.item_top}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${author.avatar})` }}></div>
          <p className={styles.nickname}>{author.nickname}</p>
          <p className={styles.about}>
            {author.position}
            {author.co_name ? `@${author.co_name}` : ''}
          </p>
          <p className={styles.time}>{dayjs(props.item.createdAt).format('YYYY/MM/DD HH:mm')}</p>
        </div>
      </a>
      <p className={styles.content}>{props.item.attributes.content}</p>
      <div className={styles.item_operation}>
        <div
          className={hasLiked ? styles.item_operation_btn_active : styles.item_operation_btn}
          onClick={async () => {
            await updateComment({
              commentItem: props.item,
              params: {
                likes: hasLiked ? -1 : 1,
                likesUser_id: props.userinfo.objectId,
              },
            })
            setlikes(likes + (hasLiked ? -1 : 1))
            sethasLiked(!hasLiked)
          }}
        >
          <i className={`iconfont ${hasLiked ? 'icon-tubiaozhizuo-' : 'icon-z-like'}`}></i> {likes ? likes : ''}
        </div>
        {/* <div className={styles.item_operation_btn}>回复</div> */}
      </div>
    </div>
  )
}

export default Components
