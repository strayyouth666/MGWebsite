import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandCard from "./BrandCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import hierarchy from "../../Assets/logo hierarchy.png";
import huhah from "../../Assets/logo huhah sambal White.png";
import sappox from "../../Assets/logo sappox White-01.png";
import Bahureksa from "../../Assets/Bahureksa White.png";
import Sateh from "../../Assets/satehlogo White-01.png";
import Tuxedo from "../../Assets/Tuxedo Square white-01.png";
import Ubamie from "../../Assets/Ubamie Logo White-01.png";
import SweetMiles from "../../Assets/Logo Sweet Miles Whhite-01.png";
import OrganicT from "../../Assets/Logo Organic Treasure White-01-01.png";
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
              description="In every Bahureksa product, we consistently present every detail of Bahureksa products with 3 Key Elements that will always be attached to all products, namely exclusive, elegant, and affordable."
              ghLink="https://www.instagram.com/bahureksa.leatherworks/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={huhah}
              isBlog={false}
              title="Huh-Hah!"
              description="Huh-Hah! Sambal: Ignite your taste buds with the fiery flavors of our exceptional sambal. Bursting with the finest ingredients, including tantalizing squid, tuna, and onions, it delivers a symphony of savory sensations. Elevate your meals with Huh-Hah! and experience a harmonious blend of spice, seafood, and umami goodness."
              ghLink="https://www.instagram.com/huhhah.sub/"
              demoLink="https://shopee.co.id/huhhah.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={OrganicT}
              isBlog={false}
              title="Organic Treasure"
              description="Organic Treasure: Unlock the power of nature with our exceptional essential oil collection. Crafted from the purest organic ingredients, our oils offer a treasure trove of holistic benefits. Immerse yourself in the enchanting aromas that promote balance, wellness, and harmony. Embrace the organic treasure for a revitalizing journey of well-being."
              ghLink="https://www.instagram.com/organictreasure.id/"
              demoLink="https://shopee.co.id/organictreasure"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={sappox}
              isBlog={false}
              title="Sappox"
              description="Sappox-Snacks is a snack from home production that is very guaranteed quality. Sappox-Snacks uses premium raw materials and of course we choose fruit and vegetables and a mixture of quality ingredients, so that the sweet and crunchy taste of fruit and vegetables from Sappox-Snacks will be a snacking companion."
              ghLink="https://www.instagram.com/sappox.snacks/"
              demoLink="https://shopee.co.id/sappoxsnacks"              
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Sateh}
              isBlog={true}
              isFnB={true}
              title="Sateh.Pojok"
              description="Sateh pojok is a simple satay outlet that sells chicken satay and klopo meat satay, one of Surabaya's culinary specialties. The concept we bring is different from other satay products in general, where our satay can be enjoyed anytime and anywhere. With our express packaging concept and delicious flavors, sateh pojok is here to serve you a piece of heaven."
              ghLink="https://www.instagram.com/sateh.pojok/"
              mapsLink="https://goo.gl/maps/shmnSJsMckqgHXRG7"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Shore}
              isBlog={false}
              title="Shore"
              description="Shore Shoes & Care is the perfect solution for cleaning and caring for your shoes. Specially designed to remove dirt and stains, keeping shoes looking fresh and well cared for.  The effective formula protects and extends the life of shoes, making them look like new again."
              ghLink="https://www.instagram.com/shore.id/"
              demoLink="https://shopee.co.id/shore.indonesia"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={SweetMiles}
              isBlog={false}
              title="Sweet Miles"
              description="Sweet Miles Aromatherapy: Indulge in a blissful journey of scents that rejuvenate your mind and soul. Our carefully curated collection of aromatic oils and diffusers create a serene atmosphere, promoting relaxation and tranquility. Discover the sweetest miles of pure aromatic bliss with our exquisite aromatherapy products."
              ghLink="https://www.instagram.com/sweetmiles.id/"
              demoLink="https://shopee.co.id/sweetmiles.id"
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Tuxedo}
              isBlog={false}
              title="Tuxedo"
              description="Tuxedo Autocare offers premium black vehicle detailing services, including expert glass polishing and application of cutting-edge nano coatings. Our meticulous treatments enhance your car's appearance and protect it from the elements. Experience fuel savings and unmatched luxury, ensuring your vehicle stands out on the road."
              ghLink="https://www.instagram.com/tuxedo.autocare/"
              demoLink="https://shopee.co.id/tuxedo.autocare" 
            />
          </Col>

          <Col md={4} className="project-card">
            <BrandCard
              imgPath={Ubamie}
              isBlog={true}
              isFnB={true}
              title="Ubamie"
              description="Combining the distinctive umami flavor with the deliciousness of bakmie, it is hoped that our product 'Ubamie' will become a delicious and attractive food alternative for consumers. We introduce Ubamie as a product that combines two delicious and unique flavors, and provides a different eating experience from other types of food."
              ghLink="https://www.instagram.com/ubamiee/"
              mapsLink="https://maps.app.goo.gl/gUNYQSEt55BpMaPo8?g_st=ic" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
