import React from "react";
import { useState, useEffect } from "react";
import PopularRestaurantComponents from "./PopularRestorantsComponents";
import NearRestaurantsComponents from "./NearRestaurantsComponents";
import HeaderComponents from "./HeaderComponents";

export default function ContentRestaurantsComponents() {
  const [getPopularRestaurant, setPopularRestaurants] = useState([
    { id: 1,nameRestaurant: "Burger King",logo: "BurgerKing.png"},
    { id: 2, nameRestaurant: "Starbucks", logo: "StarBuck.png" },
    { id: 3, nameRestaurant: "KFC", logo: "KFC.png" },
    { id: 3, nameRestaurant: "JCO", logo: "jco.png" },
  ]);

 

  const [getNearRestaurant, setNearRestaurants] = useState([
    {
      id: 1,
      nameRestaurant: "Geprek Bensu",
      distance: 0.2,
      image: "bensu.png",
      menu: [
        { idMenu: 1, name: "Paket Geprek", price : 15000},
        { idMenu: 2, name: "Paket Geprek Keju", price : 20000},
        { idMenu: 3, name: "Paket Geprek Leleh", price : 25000},
        { idMenu: 4, name: "Paket Sambel Matah", price : 15000},
        { idMenu: 5, name: "Mie Ayam Geprek", price : 17000},
        { idMenu: 6, name: "Mie Ayam Geprek Keju", price : 22000},
        { idMenu: 7, name: "Mie Ayam Leleh", price : 27000},
        { idMenu: 8, name: "Mie Ayam Sambel Telur Asin", price : 27000}
      ]
    },
    {
      id: 2,
      nameRestaurant: "Nasi Goreng Mas Rony",
      distance: 0.6,
      image: "nasigoreng.png",
    },
    {
      id: 3,
      nameRestaurant: "Pecel Ayam Prambanan",
      distance: 0.6,
      image: "pecelayam.png",
    },
    {
      id: 4,
      nameRestaurant: "Kopi Kenangan",
      distance: 1.6,
      image: "kopi.png",
    },
  ]);

  return (
    <div>
      <HeaderComponents />
      <PopularRestaurantComponents dataPopular={getPopularRestaurant} />
      <NearRestaurantsComponents dataNear={getNearRestaurant} />
    </div>
  );
}
