import React from 'react';
import "../Cards/Cards.css";
import "./Header.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MusaLogo from "../../assets/images/musa-logo.png";
import logo1 from "../../assets/images/logo1.svg";


function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={MusaLogo} className="logo-photo"/>Musa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', float:"right" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Transactions</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Resources</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Blockchain
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Tokens
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div style={{background:"grey",padding:"0px 3px"}}>
               <img src={logo1}  style={{height:"50px", width:"50px"}}/>
            </div>
            <Button variant="outline-success">login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;