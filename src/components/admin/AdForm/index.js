import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";
import InputItem from "src/components/admin/InputItem";

function Components(props) {
  const [label, setlabel] = useState(true);
  const [key, setkey] = useState(true);
  const [show, setshow] = useState(true);
  const [title, settitle] = useState("");
  const [adUrl, setadUrl] = useState("");
  const [imgUrl, setimgUrl] = useState("");

  const onChange = () => {
    props.onChange({ key, label, show, title, adUrl, imgUrl });
  };
  useEffect(() => {
    setlabel(props.label);
    setkey(props.id);
    setshow(props.show);
    settitle(props.title);
    setadUrl(props.adUrl);
    setimgUrl(props.imgUrl);
  }, []);

  useEffect(() => {
    onChange();
  }, [title, show, adUrl, imgUrl, key, label]);

  return (
    <div className={styles.form}>
      <p className={styles._admin_body_section_title2}>{props.label}</p>
      <div className="_admin_body_section_block" style={{ padding: 30 }}>
        <InputItem
          title="是否显示"
          type="switch"
          value={show}
          onChange={(e) => {
            setshow(e);
          }}
        />
        <InputItem
          title="标题"
          placeholder="请输入标题"
          value={title}
          onChange={(e) => {
            settitle(e);
          }}
        />
        <InputItem
          title="封面"
          type="image"
          placeholder="请输入封面"
          value={imgUrl}
          onChange={(e) => {
            setimgUrl(e);
          }}
        />
        <InputItem
          title="外部链接"
          placeholder="请输入外部链接"
          value={adUrl}
          onChange={(e) => {
            setadUrl(e);
          }}
        />
      </div>
    </div>
  );
}

export default Components;
