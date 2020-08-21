import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { InboxOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

Components.defaultProps = {}

function Components(props) {
  return (
    <div className={styles.nodata}>
      <InboxOutlined />
      <p className="desc">{props.type === 'notReady' ? '功能开发中，即将开放' : '暂无数据'}</p>
    </div>
  )
}

export default Components
