import React, { useState } from "react";
import { Input, Row, Col, Button, Form, message, Typography } from "antd";

import { subscribe } from "../../api/firebase.api";

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

  const formInput = () => (
    <Input
      style={{
        backgroundColor: "black",
        borderColor: "rgb(42,42,42)",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        fontSize: "20px",
      }}
    />
  );

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
            We're here to help
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
              marginBottom: "80px",
            }}
          >
            Sequence helps you build the next generation of Internet economies
            and experiences. Join our Discord to chat with our team. For
            additional support, reach out below.
          </Title>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 12, offset: 6 }}
          lg={{ span: 12, offset: 6 }}
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
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
              <Col md={12} lg={12} sm={12} xs={12}>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "rgb(153,153,153)",
                      }}
                    >
                      First NEXT_PUBLIC_FIREABSE_AUTH_DOMAIN
                    </label>
                  }
                  name="firstName"
                >
                  {formInput()}
                </Form.Item>
              </Col>
              <Col md={12} lg={12} sm={12} xs={12}>
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
            <Row>
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
                  <TextArea
                    style={{
                      backgroundColor: "black",
                      borderColor: "rgb(42,42,42)",
                      color: "white",
                      borderRadius: "10px",

                      fontSize: "12px",
                    }}
                    rows={8}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Button
              style={{
                backgroundColor: "rgb(64,117,137)",
                borderColor: "rgb(50,42,128)",
              }}
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
    // <Row style={{ margin: "20px 0 20px 0" }}>
    //   <Col
    //     md={{ span: 12, offset: 4 }}
    //     lg={{ span: 12, offset: 4 }}
    //     sm={{ span: 24, offset: 0 }}
    //     xs={{ span: 24, offset: 0 }}
    //   >
    // <Card style={{ backgroundColor: "black", color: "white" }} bordered={false}>
    //   <Row>
    //     <Col md={24} lg={24} sm={24} xs={24}>
    //       <p>We're here to help</p>
    //       <p>
    //         Sequence helps you build the next generation of Internet economies
    //         and experiences. Join our Discord to chat with our team. For
    //         additional support, reach out below.
    //       </p>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       md={{ span: 22, offset: 1 }}
    //       lg={{ span: 22, offset: 1 }}
    //       sm={{ span: 24, offset: 0 }}
    //       xs={{ span: 24, offset: 0 }}
    //     >
    //       <Form layout="vertical" onFinish={subscription} size="large">
    //         <Row>
    //           <Col md={24} lg={24} sm={24} xs={24}>
    //             <Form.Item
    //               label={
    //                 <label
    //                   style={{
    //                     color: "rgb(153,153,153)",
    //                   }}
    //                 >
    //                   Your Email
    //                 </label>
    //               }
    //               name="email"
    //             >
    //               {formInput()}
    //             </Form.Item>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col md={24} lg={24} sm={24} xs={24}></Col>
    //         </Row>
    //         <Button htmlType="submit" loading={loading}>
    //           Subscribe
    //         </Button>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Card>
    //   </Col>
    // </Row>
  );
}

export default SubscriptionCard;
