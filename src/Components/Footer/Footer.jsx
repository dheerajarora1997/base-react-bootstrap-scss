import React from 'react';

import MaterialIcon from 'material-icons-react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-2">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9} className="text-white d-flex">
            <MaterialIcon icon='developer_mode' size='tiny' className="material-icons text-white" />
            <span className="d-inline-block mx-2">React</span>|
            <span className="d-inline-block mx-2">React Bootstrap</span>|
            <span className="d-inline-block mx-2">React Router Dom</span>|
            <span className="d-inline-block mx-2">Material Icons React</span>|
            <span className="d-inline-block mx-2">Sass</span>
          </Col>
          <Col className="text-end" xs={12} md={3}>
            <a className="text-white px-2" href="https://github.com/dheerajarora1997" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="text-white px-2" href="https://www.linkedin.com/in/dheerajarora1997/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
