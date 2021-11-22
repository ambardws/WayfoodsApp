import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./PopularAndNearRestorantsComponent.css";
import { Link } from "react-router-dom";
import MenuOrders from "../Menu/MenuOrders";

export default function NearRestaurantsComponents(props) {

  function handleClick() {
    const kirim = props
    return <MenuOrders dataNear={kirim} /> 
  }

  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <h3 className="mt-5">Restaurant Near You</h3>
          </Col>
        </Row>
        <Row>
          {props.dataNear.map((restaurant) => {
            return (
              <Col>
                <Link to={`/menu-orders/${restaurant.id}`} className="link-menu-order" onClick={handleClick}>
                  <Card>
                    <Card.Body>
                      <img src={`image/restaurant/${restaurant.image}`}></img>
                      <p className="name-near-restaurant">
                        {restaurant.nameRestaurant}
                      </p>
                      {restaurant.distance}KM
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
