import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Muhammad Faruq</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:mulyosarigroup5@gmail.com?subject=Bussiness%20and%20Inquieres&body=Hello,%20Mulyosari%20Group%20!"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mulyosarigroup/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
