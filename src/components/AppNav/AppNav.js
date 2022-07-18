import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

// props
// navItems - an array of navItem objects.
// handleNavClick - a function.
function AppNav(props) {

  // The code for navbar is from here: https://react-bootstrap.github.io/components/navbar/
  return (
    <nav>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {
              props.navItems.map((navItem, index) => {
                return <Nav.Link key={index} href="#home">{navItem.label}</Nav.Link>
              })
            }
          </Nav>
        </Container>
      </Navbar>
      {/* {
        props.navItems.map((navItem) =>
          <a href="#" onClick={() => props.handleNavClick(navItem.value)} >
            {navItem.label} |
          </a>
        )
      } */}
    </nav >
  )
}

export default AppNav;
