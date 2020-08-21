import Head from "next/head";
import Link from "next/link";
import AV from "leancloud-storage";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";

require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

Components.defaultProps = {
  data: null,
  style: {},
};

function Components(props) {
  const [modalShow, setmodalShow] = useState(false);

  useEffect(() => {}, []);
  const time =
    dayjs(props.data.updatedAt).unix() * 1000 >
    Date.now() - 1000 * 60 * 60 * 24 * 1
      ? dayjs(props.data.createdAt).fromNow()
      : dayjs(props.data.createdAt).format("YYYY/MM/DD");
  return (
    <>
      {props.data && (
        <a
          target="_blank"
          href={`/www/adetail/${props.data.objectId}?cate1=${props.data.category_1_key}&cate2=${props.data.category_2_key}`}
        >
          <div className={styles.articleItem} style={props.style}>
            <div className={styles.articleItem_content}>
              <div
                className={styles.poster}
                style={{ backgroundImage: `url(${props.data.poster})` }}
              ></div>
              <div className={styles.info}>
                <p className={styles.title}>{props.data.title}</p>
                <div className={styles.actions}>
                  <div
                    className={styles.actions_item}
                  >{`${props.data.category_2_title}`}</div>
                  <div className={styles.actions_item}>{`・${time}`}</div>
                  <div className={styles.actions_item}>
                    {props.data.views ? `・阅读 ${props.data.views}` : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default Components;
