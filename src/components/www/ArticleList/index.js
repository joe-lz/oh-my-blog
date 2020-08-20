import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
import ArticleItem from 'src/components/www/ArticleItem'
import NoData from 'src/components/www/NoData'
import { getArticleList } from 'src/service/article'

Components.defaultProps = {
  userinfo: null,
}

function Components(props) {
  const [articleLists, setarticleLists] = useState(null)

  const getlist = async (params = {}) => {
    const resList = await getArticleList({ status: 3, ...params })
    setarticleLists(resList)
  }
  useEffect(() => {
    if (props.userinfo) {
      const fetchData = async () => {
        await getlist(Object.assign({}, props.userinfo ? { author: props.userinfo } : {}))
      }
      fetchData()
    }
  }, [props.userinfo])

  return (
    <div className={styles.list}>
      {articleLists &&
        articleLists.length > 0 &&
        articleLists.map((obj) => {
          return <ArticleItem key={obj.id} data={obj.toJSON()} />
          // return <ArticleItem key={obj.id} data={obj.toJSON()} style={{ paddingLeft: 0 }} />
        })}
      {articleLists && articleLists.length === 0 && <NoData />}
    </div>
  )
}

export default Components
