import React, { useState } from "react";
import { Input, Row, Col, Button, Form, message, Typography } from "antd";

import { subscribe } from "../../api/firebase.api";

import Descriptions from "../Descriptions";

const { TextArea } = Input;
const { Title } = Typography;

function SubscriptionCard() {
  const [loading, setLoading] = useState(false);

  const subscription = async (form) => {
    setLoading(true);
    try {
      await subscribe(form);
      setLoading(false);
      message.success("Subscribed successfully", 3);
    } catch (err) {
      message.warning("Email already subscribed", 3);
      setLoading(false);
    }
  };

  const formInput = () => <Input className="subscription-form-input" />;

  return (
    <>
      <Descriptions
        title=" We're here to help"
        subtitle="Sequence helps you build the next generation of Internet economies
        and experiences. Join our Discord to chat with our team. For
        additional support, reach out below."
      />
      <Row>
        <Col
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
          sm={{ span: 22, offset: 1 }}
          xs={{ span: 22, offset: 1 }}
          align="center"
        >
          <Form layout="vertical" onFinish={subscription} size="large">
            <Row>
              <Col md={24} lg={24} sm={24} xs={24}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      Your Email
                    </label>
                  }
                  name="email"
                >
                  {formInput()}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col md={12} lg={12} sm={24} xs={24}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      First name
                    </label>
                  }
                  name="firstName"
                >
                  {formInput()}
                </Form.Item>
              </Col>
              <Col md={12} lg={12} sm={24} xs={24}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      Last name
                    </label>
                  }
                  name="lastName"
                >
                  {formInput()}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col md={24} lg={24} sm={24} xs={24}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      Project Website
                    </label>
                  }
                  name="projectWebsite"
                >
                  {formInput()}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col md={24} lg={24} sm={24} xs={24}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      Tell us about your project
                    </label>
                  }
                  name="about"
                >
                  <TextArea className="subscription-form-text-area" rows={8} />
                </Form.Item>
              </Col>
            </Row>

            <Button
              className="primary-button"
              size="large"
              type="primary"
              shape="round"
              htmlType="submit"
              loading={loading}
            >
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default SubscriptionCard;
