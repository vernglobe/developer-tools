import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const TopNavBar = ({children}: any) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/tools/jsonminify">JSON-Beautify</Nav.Link>
          <Nav.Link href="/tools/cssminify">CSS-Beautify</Nav.Link>
          <Nav.Link href='/tools/scriptcompiler'>Script-Compiler</Nav.Link>
        </Nav>
        {children}
      </Container>
    </Navbar>
  )
}
