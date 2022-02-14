import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Policy() {
  return (
    <div className="Main">
      <Container>
        <Row>
          <Col xs={{ order: 'last' }}>First, but last</Col>
          <Col xs>Second, but unordered</Col>
          <Col xs={{ order: 'first' }}>Third, but first</Col>
        </Row>
      </Container>
    </div>
  )
}