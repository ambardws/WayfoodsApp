import React from "react";
import "./PopularAndNearRestorantsComponent.css";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function PopularRestorantsComponents(props) {
  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <h3 className="mt-5">Popular Restaurant</h3>
          </Col>
        </Row>
        <Row>
          {props.dataPopular.map((restaurant) => {
            return (
              <Col>
                <Card>
                  <Card.Body>
                      <img src={`image/logo/${restaurant.logo}`}></img>
                      <p className="name-restaurant">{restaurant.nameRestaurant}</p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}

        </Row>
      </Container>
    </div>
  );
}
