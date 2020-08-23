import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";

export default function Home() {
  useEffect(() => {
    window.location.href = "/www/home";
  }, []);
  return <div className={styles.container}></div>;
}
