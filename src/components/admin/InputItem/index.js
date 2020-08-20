/*
 * @Description: page name
 * @Author: bangdong.chen
 * @Date: 2020-08-06 09:01:26
 * @LastEditors: bangdong.chen
 * @LastEditTime: 2020-08-09 13:13:19
 */

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Particles from 'react-particles-js'
import React, { useState } from 'react'
import AV from 'leancloud-storage'
import { Spin, Switch, notification, Modal } from 'antd'

import styles from './index.module.scss'
import Upload from 'src/components/admin/Upload'
import leanerrors from 'src/lib/leancloud_error_code.json'

function Components(props) {
  const [modalShow, setmodalShow] = useState(null)
  const type = props.type || 'text' // switch, text

  return (
    <div className={styles.item} style={props.style || {}}>
      <div className={styles.item_title}>{props.title}</div>
      <div className={styles.item_right}>
        {type === 'text' && (
          <input
            placeholder={props.placeholder || '请输入'}
            value={props.value || ''}
            onChange={(e) => {
              props.onChange(e.target.value)
            }}
          />
        )}
        {type === 'switch' && (
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={props.value}
            onChange={(e) => {
              props.onChange(e)
            }}
          />
        )}
        {type === 'image' && (
          <a
            onClick={() => {
              setmodalShow(true)
            }}
          >
            {props.value && <div className={styles.item_right_logo} style={{ backgroundImage: `url(${props.value})` }}></div>}
            上传
          </a>
        )}
      </div>
      <Modal
        width={900}
        visible={modalShow}
        onCancel={() => {
          setmodalShow(false)
        }}
        onOk={() => {
          // handleCreate()
        }}
        okText="保存"
        cancelText="取消"
        bodyStyle={{ padding: 0 }}
        footer={null}
      >
        {modalShow && (
          <Upload
            onChoose={async ({ url }) => {
              setmodalShow(false)
              props.onChange(url)
            }}
          />
        )}
      </Modal>
    </div>
  )
}

export default Components
