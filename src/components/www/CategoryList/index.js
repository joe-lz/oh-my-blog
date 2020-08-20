import Head from 'next/head'
// import Link from 'next/link'
import AV from 'leancloud-storage'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
// import * as Scroll from 'react-scroll'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import styles from './index.module.scss'

function Components(props) {
  const [finalminLevel, setfinalminLevel] = useState(10)
  const [scrollTop, setscrollTop] = useState(10)

  const handleScroll = (event) => {
    setscrollTop(document.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const { nav } = props
    let minLevel = 10
    nav.map((obj) => {
      if (obj.level < minLevel) {
        minLevel = obj.level
        return obj
      }
    })
    setfinalminLevel(minLevel)
  }, [JSON.stringify(props.nav)])

  const { nav } = props

  return (
    <div
      className="article_category_list"
      style={
        scrollTop > 400
          ? {
              position: 'fixed',
              top: 0,
            }
          : {}
      }
    >
      {nav && nav.length > 0 && (
        <div className={styles.container}>
          {nav.map((obj, index) => {
            return (
              <Link
                key={`${index + 1}`}
                spy={true}
                smooth={true}
                // hashSpy={true}
                // offset={50}
                // duration={500}
                // delay={1000}
                // isDynamic={true}
                // ignoreCancelEvents={false}
                to={obj.id}
              >
                <div
                  className={obj.level > finalminLevel ? styles.item_mini : styles.item}
                  style={obj.level > finalminLevel ? { paddingLeft: 15 + 15 * (obj.level - finalminLevel) } : { fontWeight: 'bold' }}
                >
                  <span className={styles.text}>{obj.text}</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Components
