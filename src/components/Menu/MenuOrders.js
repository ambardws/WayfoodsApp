import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./MenuOrders.css";

export default function MenuOrders(props) {
  const [getNearRestaurant, setNearRestaurants] = useState([
    {
      id: 1,
      nameRestaurant: "Geprek Bensu",
      distance: 0.2,
      image: "bensu.png",
      menu: [
        {
          idMenu: 1,
          name: "Paket Geprek",
          price: 15000,
          imageMenu: "paketgeprek.png",
        },
        {
          idMenu: 2,
          name: "Paket Geprek Keju",
          price: 20000,
          imageMenu: "geprekkeju.png",
        },
        {
          idMenu: 3,
          name: "Paket Geprek Leleh",
          price: 25000,
          imageMenu: "geprekleleh.png",
        },
        {
          idMenu: 4,
          name: "Paket Sambel Matah",
          price: 15000,
          imageMenu: "gepreksambelmatah.png",
        },
        {
          idMenu: 5,
          name: "Mie Ayam Geprek",
          price: 17000,
          imageMenu: "mieayamgeprek.png",
        },
        {
          idMenu: 6,
          name: "Mie Ayam Geprek Keju",
          price: 22000,
          imageMenu: "mieayamgeprekkeju.png",
        },
        {
          idMenu: 7,
          name: "Mie Ayam Leleh",
          price: 27000,
          imageMenu: "mieayamleleh.png",
        },
        {
          idMenu: 8,
          name: "Mie Ayam Sambel Telur Asin",
          price: 27000,
          imageMenu: "mieayamsambeltelurasin.png",
        },
      ],
    },
    {
      id: 2,
      nameRestaurant: "Nasi Goreng Mas Rony",
      distance: 0.6,
      image: "nasigoreng.png",
      menu: [
        { idMenu: 1, name: "Nasi Goreng Biasa", price: 15000 },
        { idMenu: 2, name: "Nasi Goreng Baso", price: 20000 },
        { idMenu: 3, name: "Nasi Goreng Pete", price: 25000 },
        { idMenu: 4, name: "Nasi Goreng Ati Ampela", price: 15000 },
        { idMenu: 5, name: "Nasi Goreng Spesial", price: 17000 },
        { idMenu: 6, name: "Mie Goreng", price: 22000 },
        { idMenu: 7, name: "Mie Rebus", price: 27000 },
        { idMenu: 8, name: "Kwetiaw", price: 27000 },
      ],
    },
    {
      id: 3,
      nameRestaurant: "Pecel Ayam Prambanan",
      distance: 0.6,
      image: "pecelayam.png",
      menu: [
        { idMenu: 1, name: "Paket Geprek", price: 15000 },
        { idMenu: 2, name: "Paket Geprek Keju", price: 20000 },
        { idMenu: 3, name: "Paket Geprek Leleh", price: 25000 },
        { idMenu: 4, name: "Paket Sambel Matah", price: 15000 },
        { idMenu: 5, name: "Mie Ayam Geprek", price: 17000 },
        { idMenu: 6, name: "Mie Ayam Geprek Keju", price: 22000 },
        { idMenu: 7, name: "Mie Ayam Leleh", price: 27000 },
        { idMenu: 8, name: "Mie Ayam Sambel Telur Asin", price: 27000 },
      ],
    },
    {
      id: 4,
      nameRestaurant: "Kopi Kenangan",
      distance: 1.6,
      image: "kopi.png",
      menu: [
        { idMenu: 1, name: "Paket Geprek", price: 15000 },
        { idMenu: 2, name: "Paket Geprek Keju", price: 20000 },
        { idMenu: 3, name: "Paket Geprek Leleh", price: 25000 },
        { idMenu: 4, name: "Paket Sambel Matah", price: 15000 },
        { idMenu: 5, name: "Mie Ayam Geprek", price: 17000 },
        { idMenu: 6, name: "Mie Ayam Geprek Keju", price: 22000 },
        { idMenu: 7, name: "Mie Ayam Leleh", price: 27000 },
        { idMenu: 8, name: "Mie Ayam Sambel Telur Asin", price: 27000 },
      ],
    },
  ]);

  const params = useParams();
  const { id } = params;
  const menuOrder = getNearRestaurant.filter(
    (restaurant) => restaurant.id == id
  );

  function handleButton(val) {
    const newOrder = {
      nameRestaurant: val[0],
      nameMenu: val[1],
      price: parseInt(val[2]),
      imageMenu: val[3],
      qty: 1
    };
    props.onCreateOrder(newOrder);
  }

  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <h3 className="mt-5">Menus {menuOrder[0].nameRestaurant}</h3>
          </Col>
        </Row>
        <Row>
          {menuOrder[0].menu.map((menu) => {
            return (
              <Col xs={3} className="mb-5">
                <Card>
                  <Card.Body>
                    <img src={`/image/menuorder/${menu.imageMenu}`}></img>
                    <p className="name-near-restaurant">{menu.name}</p>
                    <p style={{ color: "red" }}>Rp. {menu.price}</p>
                    <Button
                      className="btn-order"
                      onClick={() =>
                        handleButton([
                          `${menuOrder[0].nameRestaurant}`,
                          `${menu.name}`,
                          `${menu.price}`,
                          `${menu.imageMenu}`,
                        ])
                      }
                    >
                      Order
                    </Button>
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
