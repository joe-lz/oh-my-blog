import Head from "next/head";
import Link from "next/link";
import AV from "leancloud-storage";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Spin,
  Alert,
  notification,
  Modal,
  message,
} from "antd";
import ReactCardFlip from "react-card-flip";

import styles from "./index.module.scss";
import leanerrors from "src/lib/leancloud_error_code.json";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  // wrapperCol: { offset: 5, span: 19 },
  wrapperCol: { offset: 0, span: 24 },
};
function Components(props) {
  const [isFlipped, setisFlipped] = useState(false);
  const [modalShow, setmodalShow] = useState(false);
  const [isSpin, setisSpin] = useState(false);
  // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [repassword, setrepassword] = useState("");

  const onLoginFinish = (values) => {
    console.log("Success:", values);
    handleLogin(values);
  };

  const onLoginFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onRegisterFinish = (values) => {
    console.log("Success:", values);
    handleRegister(values);
  };

  const onRegisterFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = ({ username, password }) => {
    if (username && password) {
      setisSpin(true);
      AV.User.logIn(username, password).then(
        (user) => {
          // 登录成功
          setisSpin(false);
          message.success("登录成功");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          // 登录失败（可能是密码错误）
          setisSpin(false);
          notification.error({
            message: "登录失败",
            description: leanerrors[error.code]
              ? leanerrors[error.code].msg
              : "",
          });
        }
      );
    } else {
      notification.error({
        message: "登录失败",
        description: "请输入用户名、密码",
      });
    }
  };

  const handleRegister = ({ username, password }) => {
    setisSpin(true);
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    user.signUp().then(
      (user) => {
        // 注册成功
        setisSpin(false);
        message.success("注册成功");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      (error) => {
        // 注册失败（通常是因为用户名已被使用）
        setisSpin(false);
        notification.error({
          message: "注册失败",
          description: leanerrors[error.code] ? leanerrors[error.code].msg : "",
        });
      }
    );
  };

  return (
    <>
      <div
        className={styles.btn}
        onClick={() => {
          setmodalShow(true);
        }}
      >
        {props.children}
      </div>
      <Modal
        title={isFlipped ? "注册" : "登录"}
        width={450}
        visible={modalShow}
        onCancel={() => {
          setmodalShow(false);
        }}
        // onOk={() => {}}
        // okText="保存"
        // cancelText="取消"
        bodyStyle={{ padding: 0 }}
        footer={null}
      >
        <div className={styles.login}>
          <Spin spinning={isSpin} tip="加载中...">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <Form
                {...layout}
                name="登录"
                initialValues={{ remember: true }}
                onFinish={onLoginFinish}
                onFinishFailed={onLoginFinishFailed}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[{ required: true, message: "请输入用户名" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <Input type="password" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    登录
                  </Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    type="text"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={() => {
                      setisFlipped(true);
                    }}
                  >
                    还没有账户？<a>立即注册</a>
                  </Button>
                </Form.Item>
              </Form>
              <Form
                {...layout}
                name="注册"
                initialValues={{ remember: true }}
                onFinish={onRegisterFinish}
                onFinishFailed={onRegisterFinishFailed}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[{ required: true, message: "请输入用户名" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <Input type="password" />
                </Form.Item>
                <Form.Item
                  label="确认密码"
                  name="repassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "请确认密码" },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject("两次输入的密码不相同!");
                      },
                    }),
                  ]}
                >
                  <Input type="password" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    注册
                  </Button>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    type="text"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={() => {
                      setisFlipped(false);
                    }}
                  >
                    已有账户？<a>立即登录</a>
                  </Button>
                </Form.Item>
              </Form>
            </ReactCardFlip>
          </Spin>
        </div>
      </Modal>
    </>
  );
}

export default Components;
