import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBowlFood } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { MdBusiness } from "react-icons/md";
import { TbLicense, TbWorldWww } from "react-icons/tb";

function ProductStack() {
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState(null);
  const descriptionRef = useRef(null);

 const handleBrandClick = () => {
  setShowDescription(true);
  setDescription(
    <div style={{ textAlign: "justify" }} ref={descriptionRef}>
      <h3 style={{ textAlign: "center" }}> <strong className="purple">Brand Maintenance</strong> </h3>
      <p>
        Our brand maintenance service is designed to ensure that your brand remains consistent, strong, and impactful in the market. We understand the importance of maintaining a strong brand image to attract customers and stay ahead of the competition.
      </p>
      <p>
        With our brand maintenance service, we offer a comprehensive range of solutions to keep your brand in top shape. We provide regular brand audits to assess the effectiveness of your brand strategy and make necessary adjustments to align with your business goals. Our team of experts will closely analyze your brand elements, including your logo, tagline, colors, and messaging, to ensure they are consistent across all channels.
      </p>
      <p>
        We also offer brand reputation management, monitoring your brand's online presence and addressing any negative feedback or reviews promptly. Our social media experts will develop engaging content and manage your social media platforms to maintain a positive brand image and foster meaningful connections with your audience.
      </p>
      <p>
        Additionally, we provide brand guidelines and training to your team members to ensure consistent brand messaging and visual identity throughout your organization. Our goal is to help you build a strong and recognizable brand that resonates with your target market.
      </p>
      <p>
        Trust our brand maintenance service to safeguard your brand's reputation, enhance its visibility, and ultimately drive long-term success for your business. Contact us today to discuss how we can support your brand maintenance needs.
      </p>
      {/* <img src="brand_image.jpg" alt="Brand Maintenance" /> */}
    </div>
  );
  if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
};


  const handleSocialMediaClick = () => {
  setShowDescription(true);
  setDescription(
    <div style={{ textAlign: "justify" }}>
      <h3 style={{ textAlign: "center" }}> <strong className="purple">Social Media Maintenance</strong></h3>
      <p>
        Our social media maintenance service aims to help you effectively manage your social media presence across popular platforms such as Instagram, Shopee, TikTok, GoFood, and GrabFood. We understand the power of social media in today's digital landscape and its impact on brand visibility and customer engagement.
      </p>
      <p>
        With our social media maintenance service, our team of experts will develop and implement a tailored social media strategy for your business. We will create engaging content, schedule posts, and interact with your audience on platforms like Instagram, Shopee, TikTok, GoFood, and GrabFood to foster meaningful connections. Additionally, we will monitor your social media channels, respond to comments and messages, and address any customer concerns promptly.
      </p>
      <p>
        Trust our social media maintenance service to enhance your brand's online presence on popular platforms, increase brand loyalty, and drive customer engagement. Contact us today to discuss how we can support your social media maintenance needs.
      </p>
      {/* <img src="social_media_image.jpg" alt="Social Media Maintenance" /> */}
    </div>
  );
};


const handleLicenseClick = () => {
  setShowDescription(true);
  setDescription(
    <div style={{ textAlign: "justify" }}>
      <h3 style={{ textAlign: "center" }}> <strong className="purple">License & Permit</strong></h3>
      <p>
        Our license and permit service is designed to assist you in navigating the complex landscape of licenses, permits, and regulatory requirements for your business. We understand the importance of compliance and ensuring that your operations are in line with the necessary legal and regulatory frameworks.
      </p>
      <p>
        With our license and permit service, our team of experts will guide you through the process of obtaining the required licenses and permits for your business. We will conduct a thorough analysis of your industry and location to determine the specific permits and licenses you need. Our experts will assist you in preparing the necessary documentation, submitting applications, and addressing any inquiries or concerns from regulatory authorities.
      </p>
      <p>
        Trust our license and permit service to ensure that your business operates within the legal requirements, avoiding any penalties or disruptions. Contact us today to discuss how we can support your license and permit needs.
      </p>
      {/* <img src="license_image.jpg" alt="License & Permit" /> */}
    </div>
  );
};

const handleWebsiteClick = () => {
  setShowDescription(true);
  setDescription(
    <div style={{ textAlign: "justify" }}>
      <h3 style={{ textAlign: "center" }}> <strong className="purple">Website</strong> </h3>
      <p>
        Our website service is dedicated to creating and maintaining a professional and user-friendly online presence for your business. We understand the significance of a well-designed and optimized website in attracting and engaging customers, as well as driving conversions.
      </p>
      <p>
        With our website service, our skilled web designers and developers will work closely with you to create a custom website tailored to your brand and business goals. We will ensure that your website is visually appealing, mobile-responsive, and optimized for search engines. Additionally, we offer website maintenance and updates to keep your site secure, up-to-date, and functioning smoothly.
      </p>
      <p>
        Trust our website service to establish a strong online presence for your business, effectively showcase your products or services, and drive online growth. Contact us today to discuss how we can support your website needs.
      </p>
      {/* <img src="website_image.jpg" alt="Website" /> */}
    </div>
  );
};


  return (
    <div id="productStack">
    <Container fluid className="about-section">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" onClick={handleBrandClick}>
          <MdBusiness />
          <h2 className="techstack-title">Brand Maintenance</h2>
        </Col>
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          onClick={handleSocialMediaClick}
        >
          <SlSocialInstagram />
          <h2 className="techstack-title">Social Media Maintenance</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={handleLicenseClick}>
          <TbLicense />
          <h2 className="techstack-title">License & Permit</h2>
        </Col>
        <Col xs={4} md={2} className="tech-icons" onClick={handleWebsiteClick}>
          <TbWorldWww />
          <h2 className="techstack-title">Website</h2>
        </Col>
      </Row>
      {showDescription && <div>{description}</div>}
      <br/>
      <br/>
      <br/>
    </Container>
    </div>
  );
}

export default ProductStack;
