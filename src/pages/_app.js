import Head from "next/head";
import AV from "leancloud-storage";

import "antd/dist/antd.css";
import "../styles/global.scss";

import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import "codemirror-github-light/lib/codemirror-github-light-theme.css";
import styles from './app.module.scss'

AV.init({
  appId: process.env.YOUR_LEANCLOUD_APPID,
  appKey: process.env.YOUR_LEANCLOUD_APPKEY,
  serverURL: process.env.YOUR_LEANCLOUD_SERVER_URL,
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        {/* <title>leanblog</title> */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <div className={styles.footer_powerby}>
        <p className={styles.title}>
          {`Powered By `}
          <a href='https://github.com/joe-lz/oh-my-blog' className="link" target="_blank">
            <i className="iconfont icon-github"></i>「oh my blog」
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default MyApp;
