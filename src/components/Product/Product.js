import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Reusable/Particle";
import ProductStack from "../Product/ProductStack";
import Cards from "../Reusable/Cards";
// import Flippy, { FrontSide, BackSide } from 'react-flippy';
import CardCarousel from "../Reusable/CardCarousel";

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
        <Row style={{ justifyContent: "center", paddingBottom : "10px" }}>
        </Row>
        <ProductStack/>

        <h1 className="project-heading">
          You need it now, <strong   className="purple">but how?</strong>
        </h1>

        {/* <Cards/> */}
        <CardCarousel/>

      </Container>
    </Container>
  );
}

export default Product;
