import React, { useState } from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

function Descriptions({ title, subtitle }) {
  return (
    <>
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
            {title}
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
            {subtitle}
          </Title>
        </Col>
      </Row>
    </>
  );
}

export default Descriptions;
