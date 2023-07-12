import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProductStack from "../Product/ProductStack";


function Product() {
  return (
     <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          what do <strong className="purple">you get </strong> from us?
        </h1>
        <p style={{ color: "white" }}>
          make sure to try all of our services to make your business more profitable, of course <strong className="purple">gacor parah</strong>. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        </Row>
        <ProductStack/>
      </Container>
    </Container>
  );
}

export default Product;
