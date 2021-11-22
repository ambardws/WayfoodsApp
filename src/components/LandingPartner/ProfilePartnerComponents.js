import React from "react";
import "./LandingPartnerComponents.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfilePartnerComponents() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h3>Profile Partner</h3>
            <Row>
              <Col xs={4}>
                <img src="/image/partnerprofile.png"></img>
                <Row>
                  <Link
                    to="/edit-profile-partner"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className="btn-edit-profile">Edit Profile</Button>
                  </Link>
                </Row>
              </Col>
              <Col>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Nama <p>Geprek Bensu</p>
                  </li>
                  <li>
                    Email <p>Geprek Bensu@gmail.com</p>
                  </li>
                  <li>
                    Phone <p>08182381231</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <h3>History Order</h3>
            <Row>
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <p style={{ fontWeight: "bold" }}>Ambar</p>
                      <p>Sunday 21 November 2021</p>
                      <p style={{ color: "red" }}>Total Rp.45000</p>
                    </Col>
                    <Col>
                      <div
                        style={{
                          fontWeight: "bold",
                          display: "inline",
                          fontSize: "20pt",
                        }}
                      >
                        WayFoods
                      </div>
                      <img
                        alt=""
                        src="/image/wayfoods.svg"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        style={{ marginLeft: "5px" }}
                      />
                       <img
                        alt=""
                        src="/image/finish.png"
                        width="150"
                        height="20"
                        className="d-inline-block align-top mt-4"
                        style={{ marginLeft: "5px" }}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
