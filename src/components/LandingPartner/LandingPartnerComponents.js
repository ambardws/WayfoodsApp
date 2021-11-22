import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import './LandingPartnerComponents.css'

export default function LandingPartnerComponents() {
  return (
    <div>
      <Container className="mt-5">
        <h3>Income Transcation</h3>
        <Table striped bordered hover>
          <thead>
            <tr className="border-tranc">
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Product Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-tranc">
            <tr>
              <td>1</td>
              <td>Sugeng No Pants</td>
              <td>Cikarang</td>
              <td>Paket Geprek</td>
              <td style={{color: "#FF9900"}}>Waiting Approve</td>
              <td style={{width: "16%"}}><Button className="btn-cancel-tranc">Cancel</Button><Button className="btn-approve-tranc">Approve</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Malika</td>
              <td>Jakasampurna</td>
              <td>Paket Geprek</td>
              <td style={{color: "#78A85A"}}>Success</td>
              <td><img src="image/done.png" className="center" ></img></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Aldi</td>
              <td>Kranji</td>
              <td>Paket Geprek</td>
              <td style={{color: "#E83939"}}>Cancel</td>
              <td><img src="image/cancel.png" className="center" ></img></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Aqid</td>
              <td>Tambun</td>
              <td>Paket Geprek</td>
              <td style={{color: "#00D1FF"}}>On The Way</td>
              <td><img src="image/done.png" className="center" ></img></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
