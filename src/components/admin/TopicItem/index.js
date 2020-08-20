import Head from 'next/head'
import AV from 'leancloud-storage'
import dynamic from 'next/dynamic'
import { Table, Tag, Space, Modal, Form, Input, Button, Checkbox, notification } from 'antd'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
import Upload from 'src/components/admin/Upload'
import { createTopics, getTopicList, updateTopic } from 'src/service/topics'

function AdminHome(props) {
  const [uploadShow, setuploadShow] = useState(false)
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [list, setlist] = useState([])

  const update = async (item, params = {}) => {
    await updateTopic({
      topicItem: item,
      params,
    })
    setuploadShow(false)
    notification.success({
      message: '更新成功',
      // description: "请输入用户名、密码",
    })
    props.onChange()
  }

  return (
    <div className={styles.item}>
      <div
        className={styles.item_img}
        onClick={() => {
          setuploadShow(true)
        }}
        style={{ backgroundImage: `url(${props.item.attributes.url})` }}
      >
        {props.item.attributes.url ? '' : '上传'}
      </div>
      <div className={styles.item_right}>
        <p className={styles.title}>{props.item.attributes.title}</p>
        <p className={styles.desc}>{props.item.attributes.desc}</p>
        <Button
          className={styles.btn}
          size="small"
          type="primary"
          onClick={() => {
            update(props.item, {
              status: props.item.attributes.status === 1 ? 2 : 1,
            })
          }}
        >
          {props.item.attributes.status === 1 ? '上线' : '下线'}
        </Button>
      </div>
      <Modal
        width={900}
        visible={uploadShow}
        onCancel={() => {
          setuploadShow(false)
        }}
        onOk={() => {}}
        okText="保存"
        cancelText="取消"
        bodyStyle={{ padding: 0, maxHeight: 600, overflowY: 'scroll', position: 'relative' }}
        footer={null}
      >
        {uploadShow && (
          <Upload
            onChoose={async ({ url }) => {
              update(props.item, { url })
            }}
          />
        )}
      </Modal>
    </div>
  )
}

export default AdminHome
