import React from 'react'
import { Navbar, Container, Nav, } from "react-bootstrap"
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed="top">
        <Container>
            <Navbar.Brand>
                <img src={logo} height="50" alt="logo"/>
                <h1>Pawsitive Haven</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link>
                    <i className="fa-solid fa-house-chimney"></i>
                    Home
                </Nav.Link>
                <Nav.Link>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Sign in
                </Nav.Link>
                <Nav.Link>
                    <i class="fa-solid fa-user-plus"></i>
                    Sign up
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar