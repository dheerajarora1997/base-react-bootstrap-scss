import React from 'react';

import './Header.scss';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { NavLink } from "react-router-dom";


export default function Header(props) {

  const { linkClicked } = props;

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink className="navbar-brand" to="/">Logo</NavLink>
          <Navbar.Toggle className="border-0" />
          <Navbar.Collapse className="justify-content-end">
            <NavLink onClick={() => { linkClicked('home') }} className="nav-link" to="/">Home</NavLink>
            <NavLink onClick={() => { linkClicked('terms') }} className="nav-link" to="terms">Terms</NavLink>
            <NavLink onClick={() => { linkClicked('policy') }} className="nav-link" to="policy">Policy</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
