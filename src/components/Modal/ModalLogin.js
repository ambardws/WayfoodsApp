// import { Navbar, Container, Button, Dropdown, Modal } from "react-bootstrap";
import { Modal } from "bootstrap";
import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";

export default function ModalLogin(props) {
  function login(){
    const isLogin = true
    props.login(isLogin);
  }
  return (
    <div>
      {/* show btn Modal */}
      <button
        className="btn-login"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Login
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog customModal">
          <div className="modal-content">
            <Container>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <h3
                    className="modal-title customTitle"
                    id="exampleModalLabel"
                  >
                    Login
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
            </Container>
            <button type="button" onClick={login} data-bs-dismiss="modal" className="btn submit-register">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
