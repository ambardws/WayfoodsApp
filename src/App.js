import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "./components/NavbarComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/ContentRestaurantsComponents";
import MenuOrders from "./components/Menu/MenuOrders";
import { useRef, useEffect, useState } from "react";
import CartOrdersComponents from "./components/Cart/CartOrdersComponents";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ProfileComponents from "./components/Profile/ProfileComponents";
import EditProfile from "./components/Profile/EditProfile";
import LandingPartnerComponents from "./components/LandingPartner/LandingPartnerComponents";
import ProfilePartnerComponents from "./components/LandingPartner/ProfilePartnerComponents";
import EditProfilePartner from "./components/LandingPartner/EditProfilePartner";
import AddProduct from "./components/LandingPartner/AddProduct";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1iYXJkd3MiLCJhIjoiY2t3OHRkaHUxM2lkNTJwbXF5ZnYwOXhpMyJ9.DTl6Nndk9oWBDlQ3GjDpaA";

function App() {
  const [getOrders, setOrders] = useState([]);

  const createOrder = (order) => {
    setOrders(getOrders.concat(order));
  };

  const updateOrder = (order) => {
    setOrders(order);
  };

  return (
    <Router>
      <div className="App">
        <NavbarComponents dataOrder={getOrders} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/menu-orders/:id"
            element={<MenuOrders onCreateOrder={createOrder} />}
          />
          <Route
            path="/cart-orders"
            element={<CartOrdersComponents onCartOrder={getOrders}  updateOrder={updateOrder}  />}
          />
           <Route
            path="/profile"
            element={<ProfileComponents onCartOrder={getOrders} />}
          />
          <Route
            path="/edit-profile"
            element={<EditProfile />}
          />
          <Route
            path="/transaction"
            element={<LandingPartnerComponents />}
          />
          <Route
            path="/profile-partner"
            element={<ProfilePartnerComponents />}
          />
          <Route
            path="/edit-profile-partner"
            element={<EditProfilePartner />}
          />
          <Route
            path="/add-product"
            element={<AddProduct />}
          />
        </Routes>
        {/* <HeaderComponents /> */}
        {/* <ContentRestaurantsComponents /> */}
      </div>
    </Router>
  );
}

export default App;
