import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default function EditProfile() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <h3 className="modal-title customTitleProfile" id="exampleModalLabel">
            Edit Profile
          </h3>
        </Row>
        <Row>
          <Col xs={10}>
            <Form.Control
              className="form-modal customForm"
              type="text"
              placeholder="Full Name"
            />
          </Col>
          <Col>
            <Form.Control
              className="form-modal customForm"
              type="file"
              placeholder="Full Name"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="form-modal customForm customForm"
              type="email"
              placeholder="Email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="form-modal customForm customForm"
              type="number"
              placeholder="Phone"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <Form.Control
              className="form-modal customForm customForm"
              type="text"
              placeholder="Location"
            />
          </Col>
          <Col>
            <Button type="button" className="select-location-edit">
              Select On Map<img src="image/map.png"></img>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={10}></Col>
          <Col>
            <Button type="button" className="select-location-edit mt-5">
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
