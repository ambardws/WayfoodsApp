import React from "react";
import "./HeaderComponents.css";
import header from "./header-img.png";
import { Container, Row, Col } from "react-bootstrap";

export default function HeaderComponents() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col>
            <div className="title-header">
              <h1>Are You Hungry ?</h1>
              <h1>Express Home Delivery</h1>
              <div className="title-header-detail">
                 <div className="line"></div>
                 <div className="detail"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
              </div>
            </div>
          </Col>
          <Col>
            <img src={header} className="header-img"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
