import React from "react";
import BoxRight from "./BoxRight";
import CardBox from "./CardBox";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Container className="margin-auto">
      <Row className="d-flex justify-content-center w-100 margin-auto">
        <Col lg="2" className="w-50 d-flex justify-content-center">
          <BoxRight />
        </Col>
        <Col lg="2" className="w-50 ">
          <CardBox />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
