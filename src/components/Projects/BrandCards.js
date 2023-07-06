import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgInstagram } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiGoogle, SiShopee, SiGooglemaps} from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <CgInstagram /> &nbsp;
          {props.isTiktok ? "Tiktok" : "Instagram"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            < SiShopee /> &nbsp;
            {"Shopee"}
          </Button>
        )}

          {/* If the component contains Maps link and if it's not a Blog then, it will render the below component  */}

        {props.isFnB && props.mapsLink && (
          <Button
            variant="primary"
            href={props.mapsLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            < SiGooglemaps /> &nbsp;
            {"Maps"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
