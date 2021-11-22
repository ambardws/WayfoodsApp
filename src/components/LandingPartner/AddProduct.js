import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function AddProduct() {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <h3 className="modal-title customTitleProfile" id="exampleModalLabel">
            Add Product
          </h3>
        </Row>
        <Row>
          <Col xs={10}>
            <Form.Control
              className="form-modal customForm"
              type="text"
              placeholder="Title"
            />
          </Col>
          <Col>
            <Form.Control
              className="form-modal customForm"
              type="file"
              placeholder="Avatar"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="form-modal customForm customForm"
              type="number"
              placeholder="Price"
            />
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
