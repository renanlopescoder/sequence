import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Col, Typography, Row } from "antd";

import Layout from "../src/components/Layout";

const { Title } = Typography;

function Home() {
  return (
    <>
      <Head>
        <title>Sequence</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta
          name="description"
          content="Sequence a seamless user and developer experience for Ethereum, NFTs, Web3, DeFi and Dapps"
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Sequence SDK and API for Dapps"
        />

        <meta
          name="og:description"
          property="og:description"
          content="Sequence a seamless user and developer experience for Ethereum, NFTs, Web3, DeFi and Dapps"
        />
        <link rel="canonical" href="https://sequence.build/" />
        <meta
          property="og:site_name"
          content="Sequence SDK and API for Dapps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Row style={{ marginTop: "85px" }}>
          <Col
            md={{ span: 12, offset: 6 }}
            lg={{ span: 12, offset: 6 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Title
              level={2}
              style={{
                fontSize: "44px",
                color: "white",
                textAlign: "center",
              }}
            >
              A seamless user and developer experience for Ethereum, NFTs, Web3,
              DeFi and Dapps
            </Title>
          </Col>
        </Row>
        <Row style={{ marginBottom: "200px" }}>
          <Col
            md={{ span: 8, offset: 8 }}
            lg={{ span: 8, offset: 8 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Link href="https://chat.sequence.build/">
              <Button
                style={{
                  backgroundColor: "rgb(50,42,128)",
                  borderColor: "rgb(50,42,128)",
                }}
                size="large"
                type="primary"
                shape="round"
              >
                Join our Community
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 8, offset: 8 }}
            lg={{ span: 8, offset: 8 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Title
              level={2}
              style={{
                fontSize: "35px",
                color: "white",
                textAlign: "center",
              }}
            >
              Our SDK + APIs make blockchain simple and user friendly
            </Title>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 8, offset: 8 }}
            lg={{ span: 8, offset: 8 }}
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            align="center"
          >
            <Title
              level={3}
              style={{
                fontSize: "18px",
                color: "grey",
                textAlign: "center",
              }}
            >
              And they give you everything you’ll need to run your application
              beautifully on the blockchain.
            </Title>
          </Col>
        </Row>
        <br />
        <br />
      </Layout>
    </>
  );
}

export default Home;
