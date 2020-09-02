import Head from "next/head";
import Link from "next/link";
import AV from "leancloud-storage";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, message } from "antd";

import styles from "./index.module.scss";
import { userFollow, userUnFollow, userFolloweeList } from "src/service/user";

Components.defaultProps = {
  followeeList: [],
  userinfo: null,
  time: null,
  views: 0,
};

function Components(props) {
  const userinfoNew = JSON.parse(JSON.stringify(props.userinfo));
  // const [followeeList, setfolloweeList] = useState([])
  const [isFollowing, setisFollowing] = useState(false);

  // const handleFetchFollowee = async () => {
  //   const list = await userFolloweeList()
  //   if (list) {
  //     setfolloweeList(JSON.parse(JSON.stringify(list)))
  //     localStorage.setItem('My_CMS_FolloweeList', JSON.stringify(list))
  //     localStorage.setItem('My_CMS_FolloweeList_time', Date.now())
  //   }
  // }

  useEffect(() => {
    // const fetchData = async () => {
    //   if (
    //     localStorage.getItem('My_CMS_FolloweeList') &&
    //     Number(localStorage.getItem('My_CMS_FolloweeList_time')) + 5 * 60 * 1000 > Date.now()
    //   ) {
    //     const list = JSON.parse(localStorage.getItem('My_CMS_FolloweeList'))
    //     setfolloweeList(list)
    //   } else {
    //     handleFetchFollowee()
    //   }
    // }
    // fetchData()
  }, []);

  useEffect(() => {
    props.followeeList.map((obj) => {
      if (obj.objectId === userinfoNew.user.objectId) {
        setisFollowing(true);
      }
    });
  }, [props.followeeList]);

  return (
    <>
      {props.userinfo && (
        <div className={styles.userinfo}>
          <div className={styles.userinfo_content}>
            <div
              className={styles.avatar}
              style={{ backgroundImage: `url(${userinfoNew.avatar})` }}
            ></div>
            <div className={styles.userinfo_info}>
              <p className={styles.nickname}>{userinfoNew.nickname}</p>
              <p className={styles.about}>
                {userinfoNew.position}
                {userinfoNew.co_name ? `@${userinfoNew.co_name}` : ""}
                {userinfoNew.position || userinfoNew.co_name ? "・" : ""}
                {props.time ? `${props.time}` : ""}
                {props.views ? `・阅读 ${props.views}` : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Components;
