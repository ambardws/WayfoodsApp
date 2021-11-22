// import { Navbar, Container, Button, Dropdown, Modal } from "react-bootstrap";
import { Modal } from "bootstrap";
import { Container, Row, Col, Form } from "react-bootstrap";

import React from "react";

export default function ModalRegister() {
  return (
    <div>
      {/* show btn Modal */}
      <button
        className="btn-register"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Register
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog customModal">
          <div className="modal-content">
            <Container>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                <h3 className="modal-title customTitle" id="exampleModalLabel">
                Register
              </h3>
                  <Form.Control
                    className="form-modal customForm customForm"
                    type="email"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <Form.Control
                    className="form-modal customForm"
                    type="password"
                    placeholder="Password"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <Form.Control
                    className="form-modal customForm"
                    type="text"
                    placeholder="Full Name"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <Form.Control
                    className="form-modal customForm"
                    type="text"
                    placeholder="Gender"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <Form.Control
                    className="form-modal customForm"
                    type="number"
                    placeholder="Phone"
                  />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <Form.Select aria-label="Default select example" className="form-modal customForm">
                    <option value="1">As User</option>
                  </Form.Select>
                </Col>
              </Row>
            </Container>
            <button type="button" className="btn submit-register">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
