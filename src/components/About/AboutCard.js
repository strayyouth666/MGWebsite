import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Mulyosari Group </span>
            from <span className="purple"> Surabaya, Indonesia.</span>
          </p>

      

          <p style={{ color: "rgb(155 126 172)" }}>
            "Semua manusia di muka bumi ini bingung, mbak. Nanti nggak bingung kalo di surga"{" "}
          </p>
          <footer className="blockquote-footer">Aldi Taher</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
