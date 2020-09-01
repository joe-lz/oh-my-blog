import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
import PostItem from 'src/components/www/PostItem'
import NoData from 'src/components/www/NoData'
import { getPostList } from 'src/service/post'

Components.defaultProps = {
  userinfo: null,
}

function Components(props) {
  const [postLists, setpostLists] = useState(null)
  // 获取post列表
  const getlist = async (params = {}) => {
    const resList = await getPostList({ status: 1, ...params })
    setpostLists(resList)
  }

  useEffect(() => {
    if (props.userinfo) {
      const fetchData = async () => {
        await getlist(Object.assign({}, props.userinfo ? { userinfo: props.userinfo } : {}))
      }
      fetchData()
    }
  }, [props.userinfo])

  useEffect(() => {}, [])

  return (
    <div className={styles.list}>
      {postLists &&
        postLists.length > 0 &&
        postLists.map((obj) => {
          return <PostItem key={obj.id} item={obj} userinfo={props.userinfo} followeeList={[]} />
        })}
      {postLists && postLists.length === 0 && <NoData />}
    </div>
  )
}

export default Components
