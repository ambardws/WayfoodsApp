import React from "react";
import "./CartOrdersComponents.css";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalMap from "../Modal/ModalMap";

export default function CardOrdersComponents(props) {
  const [getChart, setChart] = useState();
  const [getSubTotal, setSubTotal] = useState();
  const [getTotal, setTotal] = useState();
  const [getNewOrder, setNewOrder] = useState(props.onCartOrder);
  const [getName, setName] = useState(props.onCartOrder[0].nameRestaurant)
  const ongkir = 10000;

  let navigate = useNavigate();

  useEffect(() => {
    if (getNewOrder.length === 0) {
      props.updateOrder(getNewOrder);
      navigate("/");
      return;
    }

    let qty = getNewOrder
      .map((restaurant) => restaurant.qty)
      .reduce((accumulator, current) => {
        return accumulator + current;
      });
    setChart(qty);

    let subTotal = getNewOrder
      .map((restaurant) => restaurant.price * restaurant.qty)
      .reduce((accumulator, current) => {
        return accumulator + current;
      });
    setSubTotal(subTotal);

    setNewOrder(getNewOrder);

    props.updateOrder(getNewOrder);

    let total = getSubTotal + ongkir;
    setTotal(total);
  }, [getChart, getSubTotal, getTotal, getNewOrder]);

  function Add(param) {
    getNewOrder.map((restaurant) => {
      if (restaurant.nameMenu === param) {
        setChart((restaurant.qty += 1));
      }
    });
  }

  function Less(param) {
    getNewOrder.map((restaurant) => {
      if (restaurant.nameMenu === param) {
        setChart((restaurant.qty -= 1));
      }
    });
  }

  function deleteMenu(param) {
    const newOrder = getNewOrder.filter(
      (restaurant) => restaurant.nameMenu != param
    );
    setNewOrder(newOrder);
  }
  

  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <h3 className="mt-5">{getName}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h5 className="mt-5">Delivery Location</h5>
            <Form.Control type="text" className="form-map" />
          </Col>
          <Col>
            <ModalMap />
          </Col>
        </Row>
        <Row>
          <h5 className="mt-5">Review Your Order</h5>
        </Row>
        <Row>
          <Col xs={9} className="mb-5">
            <hr></hr>
            {getNewOrder.map((restaurant) => {
              return (
                <Row style={{ marginBottom: "20px" }}>
                  <Col xs={1}>
                    <img
                      src={`image/menuorder/${restaurant.imageMenu}`}
                      className="img-order"
                    ></img>
                  </Col>
                  <Col xs={9}>
                    <p className="title-order">{restaurant.nameMenu}</p>
                    <div className="btn-counter">
                      <Button
                        className="counter"
                        onClick={() => Less(restaurant.nameMenu)}
                      >
                        -
                      </Button>

                      <Form.Control
                        type="number"
                        className="form-number"
                        value={restaurant.qty}
                      />
                      <Button
                        className="counter"
                        onClick={() => Add(restaurant.nameMenu)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col style={{ color: "red" }}>
                    <Row>Rp. {restaurant.price}</Row>
                    <Row>
                      <Button
                        className="btn-trash"
                        onClick={() => deleteMenu([`${restaurant.nameMenu}`])}
                      >
                        <img src="image/trash.png"></img>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              );
            })}
            <hr></hr>
          </Col>
          <Col xs={3} className="mb-5">
            <hr></hr>
            <Row className="total-price" style={{ color: "red" }}>
              <Col>Subtotal</Col>
              <Col>Rp. {getSubTotal}</Col>
            </Row>
            <Row className="total-price">
              <Col>Qty</Col>
              <Col>{getChart}</Col>
            </Row>
            <Row className="total-price" style={{ color: "red" }}>
              <Col>Ongkir</Col>
              <Col>Rp. {ongkir}</Col>
            </Row>
            <hr></hr>
            <Row
              className="total-price"
              style={{ color: "red", fontWeight: "bold" }}
            >
              <Col>Total</Col>
              <Col>Rp. {getTotal}</Col>
            </Row>
            <Button className="btn-chart-order">Order</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
