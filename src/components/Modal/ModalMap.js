import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1iYXJkd3MiLCJhIjoiY2t3OHRkaHUxM2lkNTJwbXF5ZnYwOXhpMyJ9.DTl6Nndk9oWBDlQ3GjDpaA";

export default function ModalMap() {
  const mapContainerRef = useRef(null);
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  const [loc, setLoc] = useState();

  function location(param) {
      console.log("a")
  }

  useEffect(() => {
    if (ref.current && !map) {
      const map = new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [106.816666, -6.2],
        zoom: 12.5,
      });

      // add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          // When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
          // Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true,
        })
      );

      setMap(map);

      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([106.961712, -6.247093])
        .setHTML(
          '<img src="image/loc.png"><h5>Jln Mawar V</h5>Jln Mawar V RT003 RW002 No.42 Kelurahan Jakasampurna Bekasi Barat Kota Bekasi  <button class="btn-map-modal" onClick="location()">Confirm Location</button>'
        )
        .addTo(map)
    }
  }, [ref, map]);
  return (
    <div>
      {/* show btn Modal */}
      <button
        className="btn-map"
        data-bs-toggle="modal"
        data-bs-target="#modal-map"
      >
        Select On Map<img src="image/map.png"></img>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="modal-map"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog customModal-map">
          <div className="modal-content">
            <Container>
              <Row className="justify-content-md-center">
                <Col xs={11}>
                  <h3
                    className="modal-title customTitle"
                    id="exampleModalLabel"
                  >
                    Select Location
                  </h3>
                  <div className="map-container" ref={ref} />
                </Col>
              </Row>
            </Container>
            <button type="button" className="btn submit-register">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
