import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#212121", padding: 0, height: "80px" }}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink href="/">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="300"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink href="/cart">
                <Nav.Link>Microblading</Nav.Link>
              </NavLink>
              <NavLink href="/login">
                <Nav.Link>Reserva</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
