import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import hierarchy from "../../Assets/logo hierarchy.png";
import huhah from "../../Assets/logo huhah sambal.png";
import sappox from "../../Assets/logo sappox.png";
import Bahureksa from "../../Assets/logo3.png";
import Sateh from "../../Assets/satehlogo.png";
import Tuxedo from "../../Assets/Tuxedo Portrait (PNG).png";
import SweetMiles from "../../Assets/Logo Primer.png";
import OrganicT from "../../Assets/ORGANIC TREASURE LOGOO.jpg";
import Shore from "../../Assets/shore_logo.png";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few brands We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Bahureksa}
              isBlog={false}
              title="Bahureksa"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://www.instagram.com/bahureksa.leatherworks/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={huhah}
              isBlog={false}
              title="Huh-Hah!"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://www.instagram.com/huhhah.sub/"
              demoLink="https://shopee.co.id/huhhah.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={OrganicT}
              isBlog={false}
              title="Organic Treasure"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://www.instagram.com/organictreasure.id/"
              demoLink="https://shopee.co.id/organictreasure"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={sappox}
              isBlog={false}
              title="Sappox"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://www.instagram.com/sappox.snacks/"
              demoLink="https://shopee.co.id/sappoxsnacks"              
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Sateh}
              isBlog={false}
              title="Sateh.Pojok"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://www.instagram.com/sateh.pojok/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Shore}
              isBlog={false}
              title="Shore"
              description="Shore Shoes & Care is the perfect solution for cleaning and caring for your shoes.  Specially designed to remove dirt and stains, keeping shoes looking fresh and well cared for.  The effective formula protects and extends the life of shoes, making them look like new again."
              ghLink="https://www.instagram.com/shore.id/"
              demoLink="https://shopee.co.id/shore.indonesia"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={SweetMiles}
              isBlog={false}
              title="Sweet Miles"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://www.instagram.com/sweetmiles.id/"
              demoLink="https://shopee.co.id/sweetmiles.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Tuxedo}
              isBlog={false}
              title="Tuxedo"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://www.instagram.com/tuxedo.autocare/"
              demoLink="https://shopee.co.id/tuxedo.autocare" 
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={SweetMiles}
              isBlog={false}
              title="Ubamie"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://www.instagram.com/ubamiee/"
              demoLink="" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
