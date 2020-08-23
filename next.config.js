require("dotenv").config();

module.exports = {
  env: {
    YOUR_GA_TRACKING_ID: "UA-174135543-1", // 谷歌分析id
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    YOUR_LEANCLOUD_APPID: process.env.LEANCLOUD_APP_ID, // leancloud appid
    YOUR_LEANCLOUD_APPKEY: process.env.LEANCLOUD_APP_KEY, // leancloud appkey
    YOUR_LEANCLOUD_SERVER_URL: process.env.YOUR_LEANCLOUD_SERVER_URL, //leancloud serverUrl
  },
};
