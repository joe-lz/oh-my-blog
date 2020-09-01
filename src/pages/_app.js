import Head from "next/head";
import AV from "leancloud-storage";
import getConfig from "next/config";

import "antd/dist/antd.css";
import "../styles/global.scss";

import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown.css";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";
import "codemirror-github-light/lib/codemirror-github-light-theme.css";
import styles from "./app.module.scss";

const { publicRuntimeConfig } = getConfig();
AV.init({
  appId: publicRuntimeConfig.YOUR_LEANCLOUD_APPID || "test",
  appKey: publicRuntimeConfig.YOUR_LEANCLOUD_APPKEY || "test",
  serverURL: publicRuntimeConfig.YOUR_LEANCLOUD_SERVER_URL || "test",
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
          <a
            href={`https://omb.todokit.xyz?from=${location.host}`}
            className="link"
            target="_blank"
          >
            {/* <i className="iconfont icon-github"></i> */}
            「oh my blog」
          </a>
          ・{`在线预览 `}
          <a
            href={`https://omb.todokit.xyz?from=${location.host}`}
            className="link_active"
            target="_blank"
          >
            Demo
          </a>
        </p>
      </div>
    </div>
  );
}

MyApp.getInitialProps = async ({ req }) => {
  return getConfig();
};
export default MyApp;
