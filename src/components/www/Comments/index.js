import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Tree, Button, notification, Input, Modal, TreeSelect, Menu, Dropdown, Spin } from 'antd'

import styles from './index.module.scss'
import Item from 'src/components/www/Comments/item'
import { createComment, getCommentList } from 'src/service/comment'
import { updatePost } from 'src/service/post'

// const { TextArea } = Input
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Components(props) {
  const [content, setcontent] = useState('')
  const [disabled, setdisabled] = useState(true)
  const [list, setlist] = useState([])

  const handleSubmit = async () => {
    if (content) {
      await createComment(
        Object.assign(
          {
            type: props.type,
            user: props.userinfo,
            content,
          },
          props.type === 'article'
            ? {
                aid: props.id,
              }
            : {
                pid: props.id,
              }
        )
      )
      getlist()
      setcontent('')
      if (props.type === 'post') {
        updatePost({
          postItem: props.id,
          params: {
            comments: 1,
          },
        })
      }
      if (props.type === 'article') {
      }
    }
  }

  const getlist = async () => {
    const res = await getCommentList(
      Object.assign(
        {
          type: props.type,
        },
        props.type === 'article'
          ? {
              aid: props.id,
            }
          : {
              pid: props.id,
            }
      )
    )
    setlist(res)
  }

  useEffect(() => {
    getlist()
  }, [])
  useEffect(() => {
    setdisabled(false)
  }, [content])

  return (
    <div className={styles.comment}>
      <div className={styles.comment_input}>
        <Input
          className={styles.textarea}
          value={content}
          placeholder="输入评论..."
          maxLength={140}
          onChange={(e) => {
            setcontent(e.target.value)
          }}
        />
        <Button
          type="primary"
          className={styles.submit}
          disabled={disabled}
          onClick={() => {
            handleSubmit()
          }}
        >
          发布
        </Button>
      </div>
      <div className={styles.comment_list}>
        {list.map((obj) => {
          return <Item key={obj.id} item={obj} userinfo={props.userinfo} />
        })}
      </div>
    </div>
  )
}

export default Components
