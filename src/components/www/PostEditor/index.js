import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { Tree, Button, notification, Input, Modal, TreeSelect, Menu, Dropdown, Spin } from 'antd'

import styles from './index.module.scss'
import Upload from 'src/components/www/Upload'
import { createPost } from 'src/service/post'

const { TextArea } = Input

function Components(props) {
  const [isSpin, setisSpin] = useState(false)
  const [modalShow, setmodalShow] = useState(false)
  const [desc, setdesc] = useState('')
  const [imgUrl, setimgUrl] = useState('')
  const [topic, settopic] = useState(null)
  const [disabled, setdisabled] = useState(true)

  const handleSubmit = async () => {
    if (desc) {
      setisSpin(true)
      await createPost({
        desc,
        imgUrl,
        topic: topic ? AV.Object.createWithoutData('CMS_Topics', topic.objectId) : null,
        userinfo: AV.Object.createWithoutData('CMS_UserInfo', props.userinfo.objectId),
      })
      props.onChange && props.onChange()
      setisSpin(false)
      setdesc('')
      setimgUrl('')
      settopic(null)
      setdisabled(true)
    }
  }

  const menu = (
    <Menu>
      {props.topiclist.map((obj) => {
        return (
          <Menu.Item key={obj.objectId}>
            <div
              className={styles.topic_item}
              onClick={() => {
                settopic(obj)
              }}
            >
              <div className={styles.topic_item_img} style={{ backgroundImage: `url(${obj.url})` }}></div>
              {obj.title}
            </div>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  useEffect(() => {}, [])
  useEffect(() => {
    if (desc) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }, [desc])
  return (
    <Spin spinning={isSpin} tip="加载中...">
      <div className={styles.postEditor}>
        <div className={styles.input}>
          <TextArea
            autoSize
            className={styles.textarea}
            value={desc}
            placeholder="告诉你个小秘密，添加合适话题会被更多人看见哟～"
            maxLength={140}
            onChange={(e) => {
              setdesc(e.target.value)
            }}
          />
          <div className={styles.postEditor_media}>
            {imgUrl && (
              <div className={styles.postEditor_media_img}>
                <i
                  className="iconfont icon-close"
                  onClick={() => {
                    setimgUrl('')
                  }}
                ></i>
                <div
                  className={styles.postEditor_media_img_content}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                  onClick={() => {
                    setmodalShow(true)
                  }}
                ></div>
              </div>
            )}
            {topic && <div className={styles.postEditor_media_topic}>{topic.title}</div>}
          </div>
        </div>
        <div className={styles.postEditor_operation}>
          <div
            className={styles.postEditor_operation_btn}
            onClick={() => {
              setmodalShow(true)
            }}
          >
            <i className="iconfont icon-tupian1" style={{ marginRight: 5 }}></i>
            图片
          </div>

          <Dropdown overlay={menu} arrow placement="bottomCenter">
            <div className={styles.postEditor_operation_btn}>
              <i className="iconfont icon-huatifuhao"></i>
              话题
            </div>
          </Dropdown>
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
        <Modal
          width={900}
          visible={modalShow}
          onCancel={() => {
            setmodalShow(false)
          }}
          onOk={() => {}}
          okText="保存"
          cancelText="取消"
          bodyStyle={{ padding: 0 }}
          footer={null}
        >
          {modalShow && (
            <Upload
              onChoose={async ({ url }) => {
                setmodalShow(false)
                setimgUrl(url)
              }}
            />
          )}
        </Modal>
      </div>
    </Spin>
  )
}

export default Components
