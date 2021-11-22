import React from "react";
import { Navbar, Container, Button, Dropdown, Modal } from "react-bootstrap";
import logo from "../wayfoods.svg";
import "./NavbarComponents.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalRegister from "./Modal/ModalRegister";
import ModalLogin from "./Modal/ModalLogin";
import { useNavigate } from "react-router-dom";

export default function NavbarComponents(props) {
  let navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  let isOrder = false;

  if (props.dataOrder.length >= 1) {
    isOrder = true;
  }

  function logout() {
    setIsUser(false)
    navigate("/");
  }

  function logoutOwner() {
    setIsPartner(false)
    navigate("/");
  }

  function checkLogin(param) {
    setIsUser(param);
    navigate("/");
  }

  useEffect(() => {
    if (isPartner) {
      navigate("/transaction");
    }
    //insert something funtion
  }, []);



  return (
    <div>
      <Navbar style={{ backgroundColor: "#FFC700" }}>
        <Container>
          {isUser ? (
            <Navbar.Brand>
              <Link to="/" className="title-header">
                <div style={{ fontWeight: "bold", display: "inline" }}>
                  WayFoods
                </div>
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </Navbar.Brand>
          ) : isPartner ? (
            <Navbar.Brand>
              {" "}
              <Link to="transaction" className="title-header">
                <div style={{ fontWeight: "bold", display: "inline" }}>
                  WayFoods
                </div>
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ marginLeft: "5px" }}
                />
              </Link>{" "}
            </Navbar.Brand>
          ) : (
            <Navbar.Brand>
              <Link to="/" className="title-header">
                <div style={{ fontWeight: "bold", display: "inline" }}>
                  WayFoods
                </div>
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{ marginLeft: "5px" }}
                />
              </Link>
            </Navbar.Brand>
          )}
          {isUser ? (
            <Navbar.Collapse className="justify-content-end">
              <img
                alt=""
                src="/image/Vector.png"
                width="30"
                height="30"
                className="d-inline-block align-top icon-chart"
                style={{ marginLeft: "5px" }}
              />
              {isOrder ? (
                <Link to="/cart-orders" style={{textDecoration: "none"}} >
                  {" "}
                  <p className="notif-order">{props.dataOrder.length}</p>
                </Link>
              ) : (
                " "
              )}
              <Dropdown>
                <Dropdown.Toggle className="dropdown-profile btn btn-defaul">
                  <img
                    alt=""
                    src="/image/foto.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{ marginLeft: "5px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img src="/image/user.png" className="icon"></img>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    <img src="/image/logout.png" className="icon"></img>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={logout}
                    >
                      Log Out
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          ) : isPartner ? (
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
                <Dropdown.Toggle className="dropdown-profile btn btn-defaul">
                  <img
                    alt=""
                    src="/image/partner.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    style={{ marginLeft: "5px" }}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img src="/image/user.png" className="icon"></img>
                    <Link
                      to="/profile-partner"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Profile Partner
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <img src="/image/addProduct.png" className="icon"></img>
                    <Link
                      to="/add-product"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Add Product
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">
                    <img src="/image/logout.png" className="icon"></img>
                    <Link
                      to=""
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={logoutOwner}
                    >
                      Log Out
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <ModalRegister />
              <ModalLogin login={checkLogin} />
              {/* <Button className="btn-login">Login</Button> */}
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
