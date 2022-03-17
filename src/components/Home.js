import React from "react";
import BoxRight from "./BoxRight";
import Card from "./Card";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Container className="h-50">
      <Row className="d-flex justify-content-center">
        <Col lg="2">
          <BoxRight />
        </Col>
        <Col lg="2">
          <Card />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
