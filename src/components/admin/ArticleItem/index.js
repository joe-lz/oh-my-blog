import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { FileImageOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { Tree, Button, notification, Input, Modal, message } from 'antd'

import styles from './index.module.scss'
import Upload from 'src/components/admin/Upload'
import { getArticleById, updateArticle } from 'src/service/article'
import articleStatus from 'src/lib/articleStatus'

Components.defaultProps = {
  item: null,
  onChange: () => {},
}

function Components(props) {
  const [modalShow, setmodalShow] = useState(false)
  const [posterUrl, setposterUrl] = useState('')

  let curStatus = null
  const articleItem = props.item ? props.item.toJSON() : null
  articleStatus.map((obj) => {
    if (obj.value === articleItem.status) {
      curStatus = obj
    }
    return obj
  })

  useEffect(() => {}, [])

  return (
    <>
      {articleItem && (
        <div className={styles.articles_item}>
          <div className={styles.articles_item_poster} style={{ backgroundImage: `url(${articleItem.poster})` }}>
            {!articleItem.poster && <FileImageOutlined className={styles.articles_item_poster_placeholder} />}
            <div className={styles.articles_item_operation}>
              <div
                className={styles.articles_item_operation_btn}
                onClick={() => {
                  setmodalShow(true)
                }}
              >
                上传封面
              </div>
              <a className={styles.articles_item_operation_btn} target="_blank" href={`/admin/feature/articles/${props.item.id}`}>
                编辑
              </a>
            </div>
            <div className={styles.articles_item_operation2}>
              {curStatus &&
                curStatus.btns.map((obj) => {
                  return (
                    <div
                      className={obj.status === 5 ? styles.articles_item_operation_btn_danger : styles.articles_item_operation_btn}
                      key={obj.label}
                      onClick={async () => {
                        let comfirmText = ''
                        if (obj.status === 5) {
                          comfirmText = `确认删除文章【${articleItem.title}】吗？\n删除后可在【回收站】栏目恢复。`
                        }
                        if (obj.status === 4) {
                          comfirmText = `确认下线文章【${articleItem.title}】吗？`
                        }
                        if (obj.status === 3) {
                          comfirmText = `确认上线文章【${articleItem.title}】吗？`
                        }
                        if (confirm(comfirmText)) {
                          await updateArticle({
                            articleItem: props.item,
                            params: {
                              status: obj.status,
                            },
                          })
                          await props.onChange()
                        }
                      }}
                    >
                      {obj.label}
                    </div>
                  )
                })}
            </div>
          </div>
          <a className={styles.articles_item_content} target="_blank" href={`/admin/feature/articles/${props.item.id}`}>
            <p className={styles.articles_item_title}>{articleItem.title}</p>
            <div className={styles.articles_item_bottom}>
              <p className={styles.articles_item_author}>{articleItem.author ? articleItem.author.nickname : ''}</p>
              <p className={styles.articles_item_updateAt}>{dayjs(articleItem.updatedAt).format('YYYY/MM/DD')}更新</p>
            </div>
          </a>
          <Modal
            // title="上传封面"
            // closable={false}
            width={900}
            visible={modalShow}
            onCancel={() => {
              setmodalShow(false)
            }}
            onOk={() => {
              handleCreate()
            }}
            okText="保存"
            cancelText="取消"
            bodyStyle={{ padding: 0 }}
            footer={null}
          >
            {modalShow && (
              <Upload
                onChoose={async ({ url }) => {
                  await updateArticle({
                    articleItem: props.item,
                    params: {
                      poster: url,
                    },
                  })
                  await props.onChange()
                  setmodalShow(false)
                }}
              />
            )}
          </Modal>
        </div>
      )}
    </>
  )
}

export default Components
