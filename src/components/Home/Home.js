import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import plan from "../../Assets/plan.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ProductPreview from "../Product/Product";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Friends!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                WE'RE
                <strong className="main-name"> MULYOSARI GROUP</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={plan}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "425px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      {/* <ProductPreview /> */}
    </section>
  );
}

export default Home;
