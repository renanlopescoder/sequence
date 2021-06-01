import React from "react";
import { Layout, Menu, Avatar, notification, Button, Col, Row } from "antd";

import { useMoralis } from "react-moralis";
import { LogoutOutlined } from "@ant-design/icons";

// import Footer from "../Footer";
import SubscriptionForm from "../SubscriptionForm";

import { useRouter } from "next/router";
import Link from "next/link";

const { Content } = Layout;

function LayoutComponent({ children }) {
  const router = useRouter();
  const { authenticate, logout, isAuthenticated } = useMoralis();

  const authButton = () =>
    !isAuthenticated ? (
      <Button
        style={{
          borderColor: "rgb(101,177,215)",
        }}
        onClick={authenticate}
        shape="round"
        size="large"
        ghost
      >
        Launch Wallet
      </Button>
    ) : (
      <Button
        onClick={logout}
        shape="round"
        size="large"
        ghost
        icon={<LogoutOutlined />}
      >
        Logout
      </Button>
    );

  const getMenuItem = (text, path, disabled = false) => {
    return (
      <Menu.Item
        disabled={disabled}
        onClick={() => router.push(path)}
        key={path}
      >
        <label
          style={{
            color: disabled ? "gray" : "white",
            cursor: disabled ? "" : "pointer",
            fontSize: "15px",
          }}
        >
          {text}
        </label>
      </Menu.Item>
    );
  };

  return (
    <Layout>
      <Row style={{ backgroundColor: "black" }}>
        <Col
          md={{ span: 8, offset: 4 }}
          lg={{ span: 8, offset: 4 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <Link href="/">
            <img
              style={{
                marginTop: "53px",
                cursor: "pointer",
                borderRadius: "0",
                maxWidth: "160px",
              }}
              src={require("../../assets/sequence.png")}
              alt="Sequence logo"
              onClick={() => router.push("/")}
            />
          </Link>
        </Col>
        <Col
          md={{ span: 8, offset: 0 }}
          lg={{ span: 8, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <Menu
            style={{
              marginTop: "45px",
              backgroundColor: "black",
              borderColor: "black",
            }}
            mode="horizontal"
            theme="light"
          >
            {getMenuItem("Docs", "/docs", true)}
            {getMenuItem("Github", "https://github.com/0xsequence")}
            {getMenuItem("Discord", "https://chat.sequence.build/")}
            {getMenuItem("Contact", "#contact")}
            {authButton()}
          </Menu>
        </Col>
      </Row>

      <Content
        style={{
          backgroundColor: "black",
          padding: "80px 0 0 0",
        }}
      >
        {children}
        <SubscriptionForm title="Subscription" successMessage="Success" />
      </Content>

      {/* <Footer content={brand.footer_content} /> */}
    </Layout>
  );
}

export default LayoutComponent;
