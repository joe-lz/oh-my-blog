import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Tree, Button, notification, Input, Modal, TreeSelect, Menu, Dropdown, Spin } from 'antd'

import styles from './index.module.scss'
import Comments from 'src/components/www/Comments'
import UserInfo from 'src/components/www/UserInfo'
import { updatePost } from 'src/service/post'

require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
const { TextArea } = Input

function Components(props) {
  const [hasLiked, sethasLiked] = useState(false)
  const [likes, setlikes] = useState(0)
  const [showComment, setshowComment] = useState(false)

  useEffect(() => {
    if (props.item && props.userinfo) {
      const itemNew = JSON.parse(JSON.stringify(props.item))
      const likesUser = itemNew.likesUser || []
      sethasLiked(likesUser.includes(props.userinfo.shortid))
      setlikes(itemNew.likes || 0)
    }
  }, [props.item, props.userinfo])

  const itemNew = JSON.parse(JSON.stringify(props.item))
  return (
    <div className={styles.block}>
      <div className={styles.postItem}>
        {/* <div className={styles.postItem_top}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${itemNew.userinfo.avatar})` }}></div>
          <div className={styles.postItem_top_info}>
            <p className={styles.nickname}>{itemNew.userinfo.nickname}</p>
            <p className={styles.about}>
              {itemNew.userinfo.position}
              {itemNew.userinfo.co_name ? `@${itemNew.userinfo.co_name}・` : '・'}
              {dayjs(itemNew.createdAt).fromNow()}
            </p>
          </div>
        </div> */}
        <UserInfo
          userinfo={props.item.attributes.userinfo}
          time={dayjs(props.item.createdAt).format('YYYY/MM/DD')}
          followeeList={props.followeeList}
        />

        <div className={styles.postItem_middle}>
          <p className={styles.desc}>{itemNew.desc}</p>
          {itemNew.imgUrl && <div className={styles.imgUrl} style={{ backgroundImage: `url(${itemNew.imgUrl})` }}></div>}
          {itemNew.topic && (
            <Link href={`/www/posts?topic=${itemNew.topic.objectId}`}>
              <div className={styles.topic}>{itemNew.topic.title}</div>
            </Link>
          )}
        </div>
        <div className={styles.postItem_operation}>
          <div
            className={hasLiked ? styles.postItem_operation_btn_active : styles.postItem_operation_btn}
            onClick={async () => {
              await updatePost({
                postItem: props.item,
                params: {
                  likes: hasLiked ? -1 : 1,
                  likesUser_id: props.userinfo.shortid,
                },
              })
              setlikes(likes + (hasLiked ? -1 : 1))
              sethasLiked(!hasLiked)
            }}
          >
            点赞 {likes ? likes : ''}
          </div>
          <div
            className={styles.postItem_operation_btn}
            onClick={() => {
              setshowComment(!showComment)
            }}
          >
            评论 {itemNew.comments ? itemNew.comments : ''}
          </div>
          {/* <div className={styles.postItem_operation_btn}>分享</div> */}
        </div>
        {showComment && <Comments type="post" id={props.item} userinfo={props.userinfo} />}
      </div>
    </div>
  )
}

export default Components
