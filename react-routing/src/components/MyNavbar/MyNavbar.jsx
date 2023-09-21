import React from 'react'
import MyNavbarCss from "./navbar.module.css"
import { Link } from "react-router-dom"
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
const MyNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className={`${MyNavbarCss.container}`}>
      <Container fluid>
      <div className={`${MyNavbarCss.heading}`}>
          <h1>React Routing</h1>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className={`${MyNavbarCss.list}`}>
          <Nav navbarScroll>
            <Nav>
              <Button variant="primary">
                <Link to="/" className={`${MyNavbarCss.page}`}>Home</Link>
                </Button>
            </Nav>
            <Nav>
              <Button variant="primary">
            <Link to="/about" className={`${MyNavbarCss.page}`}>About</Link>
            </Button>
            </Nav>
            <Nav>
            <Button variant="primary">
            <Link to="/contact" className={`${MyNavbarCss.page}`}>Contact</Link>
            </Button>
            </Nav>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <div className={`${MyNavbarCss.container}`}>
        <div className={`${MyNavbarCss.heading}`}>
          <h1>React Routing</h1>
        </div>
        <div className={`${MyNavbarCss.list}`} expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ul>
            <li>
              <Button variant="primary">
                <Link to="/" className={`${MyNavbarCss.page}`}>Home</Link>
                </Button>
            </li>
            <li>
            <Button variant="primary">
            <Link to="/about" className={`${MyNavbarCss.page}`}>About</Link>
            </Button>
                

            </li>
            <li>
            <Button variant="primary">
            <Link to="/contact" className={`${MyNavbarCss.page}`}>Contact</Link>
            </Button>
                
            </li>
          </ul>
          </Navbar.Collapse>
        </div>
      </div> */}
    </>
  )
}

export default MyNavbar
