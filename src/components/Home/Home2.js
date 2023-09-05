import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import our_team from "../../Assets/our_team.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Marketplace from "./Marketplace";
import LinkPreview from "./LinkPreview";

function Home2() {
 
  // With a commitment to excellence and innovation, we strive to deliver exceptional products and services across our multiple brands. 
  //  . 
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET US <span className="purple"> INTRODUCE </span> OURSELF
            </h1>
            <p className="home-about-body">
               Mulyosari Group is a dynamic and diversified company operating in various industries. 
              <br />
              <br />Our portfolio includes renowned brands such as
              <i>
                {/* Hierarchy Parfume , Juice Be Mine, Tahu Waliktiawan,*/}
                <b className="purple"> Huh-Hah Sambal, Tuxedo Autocare, Sappox Snacks, Shore Shoescare, Bahureksa, Organic Treasure Essential, Sweet Miles Essential, Ubamie, and Sateh.Pojok. </b>
              </i>
              <br />
              <br />
              Each brand is dedicated to providing top-quality products that meet the unique needs and preferences of our customers.
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={our_team} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            
            </p>
           

            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mulyosarigroup/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <br/>
            <br/>
            {/* <Marketplace/> */}
            {/* <LinkPreview/> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
