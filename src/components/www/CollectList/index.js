import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
import ArticleItem from 'src/components/www/ArticleItem'
import NoData from 'src/components/www/NoData'
import { getCollectList } from 'src/service/collect'

Components.defaultProps = {
  userinfo: null,
}

function Components(props) {
  const [collectLists, setcollectLists] = useState(null)

  const getlist = async (params = {}) => {
    const resList = await getCollectList({ status: 3, ...params })
    setcollectLists(resList)
  }
  useEffect(() => {
    if (props.userinfo) {
      const fetchData = async () => {
        await getlist(Object.assign({}, props.userinfo ? { user: props.userinfo.attributes.user } : {}))
      }
      fetchData()
    }
  }, [props.userinfo])

console.error(collectLists);
  return (
    <div className={styles.list}>
      {collectLists &&
        collectLists.length > 0 &&
        collectLists.map((obj) => {
          return <ArticleItem key={obj.id} data={obj.toJSON().article} />
          // return <ArticleItem key={obj.id} data={obj.toJSON().article} style={{ paddingLeft: 0 }} />
        })}
      {collectLists && collectLists.length === 0 && <NoData />}
    </div>
  )
}

export default Components
