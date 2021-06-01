import React from "react";
import { Row, Col } from "antd";
import CardReveal from "../CardReveal";

function SdkGrid() {
  return (
    <>
      <Row gutter={16} className="sdk-grid">
        <Col
          md={{ span: 8, offset: 4 }}
          lg={{ span: 8, offset: 4 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Smart Wallet built for a Multi-Chain World">
            The Sequence Wallet empowers your users with a friendly and secure
            experience for all of Ethereum. Plus, you'll never get stuck: you
            and your users can easily move between chains to capitalize on the
            lowest gas fees and highest security.
          </CardReveal>
        </Col>
        <Col
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Web & Backend SDKs">
            Powerful developer libraries and APIs that seamlessly integrate with
            Ethereum.
          </CardReveal>
        </Col>
        <Col
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Audited Smart Contract Library">
            A standard library of audited smart contracts. Check out our Github.
          </CardReveal>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col
          md={{ span: 4, offset: 4 }}
          lg={{ span: 4, offset: 4 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Enhanced Transactions" type="vertical">
            Meta transaction support means users can batch transactions and pay
            for gas in the token of their choice. And, Sequence Meta
            transactions work with all existing contracts (without any changes
            required to your contracts).
          </CardReveal>
        </Col>
        <Col
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Web & Backend SDKs">
            Powerful developer libraries and APIs that seamlessly integrate with
            Ethereum.
          </CardReveal>

          <CardReveal title="Audited Smart Contract Library">
            A standard library of audited smart contracts. Check out our Github.
          </CardReveal>
        </Col>
        <Col
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal title="Niftyswap (NFT) Market Protocol" type="vertical">
            Offer your users an ecommerce-like market experience for trading
            ERC-1155 tokens. Users will love instant liquidity with Niftyswap's
            AMM design! Build your own custom UI's — we've already built the
            backend for you.
          </CardReveal>
        </Col>

        <Col
          md={{ span: 4, offset: 0 }}
          lg={{ span: 4, offset: 0 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
        >
          <CardReveal
            title="Easy Minting, Transfer and Exchange of Nfts and Digital Items"
            type="vertical"
          >
            Our widely-adopted ERC-1155 smart contracts help you easily create
            digital collectibles. Plus, enhance your capabilities with our NFT
            APIs for querying metadata and balances.
          </CardReveal>
        </Col>
      </Row>
    </>
  );
}

export default SdkGrid;
