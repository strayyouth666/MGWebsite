import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, We are <span className="purple">Mulyosari Group </span>
            from <span className="purple"> Indonesia, Southeast Asia. </span>
            By providing business consulting services and several other supporting matters such as licensing and marketing strategies to achieve 
            our vision of <span className="purple">Inovating Together, Empowering Brands. </span>
          
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Semua manusia di muka bumi ini bingung, kak. Nanti ngga bingung kalau sudah di surga"{" "}
          </p>
          <footer className="blockquote-footer">Aldi Taher</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
