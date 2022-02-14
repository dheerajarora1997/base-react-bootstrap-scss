import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../Components/Sidebar/';

export default function Home() {
  return (
    <div className='Main'>
      <Container>
        <Row className='my-5'>
          <Col lg={1}>
            1
          </Col>
          <Col lg={1}>2</Col>
          <Col lg={1}>3</Col>
          <Col lg={1}>4</Col>
          <Col lg={1}>5</Col>
          <Col lg={1}>6</Col>
          <Col lg={1}>7</Col>
          <Col lg={1}>8</Col>
          <Col lg={1}>9</Col>
          <Col lg={1}>10</Col>
          <Col lg={1}>11</Col>
          <Col lg={1}>12</Col>
        </Row>
        <Row className="my-4">
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={7}>Column 8</Col>
          <Col md={4}>
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
