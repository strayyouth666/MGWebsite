import React from "react";
import { Col, Row } from "react-bootstrap";
// import { FaBowlFood } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineFastfood } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdOutlineFastfood />
        <h2 className="techstack-title">
                Food & Beverages{" "}
           </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SlChemistry/>
          <h2 className="techstack-title">
                Chemicals{" "}
           </h2>
      </Col>
    </Row>
  );
}

export default Techstack;
