import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineFastfood } from "react-icons/md";

function Techstack() {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState("");

  const handleFoodClick = () => {
  setShowDescription(true);
  setDescription(
      <div style={{ textAlign: "center" }}>
      <p>
         <strong className="purple">Food & Beverages:</strong> Providing solutions for the food industry. Brands we've worked with: <strong className="purple">Huh-Hah!, Sappox-Snacks, SatehPojok, and Ubamie</strong>.
      </p>
      {/* <img src="license_image.jpg" alt="License & Permit" /> */}
    </div>
   
  );
};

const handleChemicalsClick = () => {
  setShowDescription(true);
  setDescription(
     <div style={{ textAlign: "center" }}>
      <p>
         <strong className="purple">Chemicals:</strong> Expertise in the chemicals, helping brands like <strong className="purple">Bahureksa, Organic Treasure, Shore, Sweet Miles, and Tuxedo-Autocare </strong> thrive.
      </p>
      {/* <img src="license_image.jpg" alt="License & Permit" /> */}
    </div>
   
  );
};


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={handleFoodClick}>
        <MdOutlineFastfood />
        <h2 className="techstack-title">Food & Beverages</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={handleChemicalsClick}>
        <SlChemistry />
        <h2 className="techstack-title">Chemicals</h2>
      </Col>
      <br/ >
      {showDescription && <p>{description}</p>}
    </Row>
  );
}

export default Techstack;
