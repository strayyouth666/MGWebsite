import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiInstagram,
  SiTiktok,
  SiGrab,
  SiShopee,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiInstagram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopee />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTiktok />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGrab />
      </Col>
     
    </Row>
  );
}

export default Toolstack;
