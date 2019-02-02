import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./style.css";

const Results = props => {
  return (
    <div classname="col-md-12">
      <Card>
        <CardImg
          top
          width="30%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Book Name</CardTitle>
          <CardSubtitle>Author</CardSubtitle>
          <CardText>
            Plot information / summary here.  Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>View</Button>
          <Button>Save</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Results;
