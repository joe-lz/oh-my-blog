import Head from 'next/head'
import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'

function Components(props) {
  return (
    <>
      {props.item.show && (
        <a className={styles.block} style={{ backgroundImage: `url(${props.item.imgUrl})` }} href={props.item.adUrl} target="_blank"></a>
      )}
    </>
  )
}

export default Components
