import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Particles from "react-particles-js";
import React, { useState } from "react";
import AV from "leancloud-storage";
import { Spin, Alert, notification } from "antd";

import styles from "./index.module.scss";
import leanerrors from "src/lib/leancloud_error_code.json";

function Components(props) {
  const [isFlipped, setisFlipped] = useState(false);
  const router = useRouter();
  return (
    <Link href={props.path}>
      <div
        className={
          !router.pathname.includes(props.path)
            ? styles.sidebar_item_level2
            : styles.sidebar_item_level2_active
        }
      >
        {props.title}
      </div>
    </Link>
  );
}

export default Components;
