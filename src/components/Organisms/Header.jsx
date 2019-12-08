import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand exact href="/">Bank accounts
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Options admin" id="collasible-nav-dropdown">
        <NavDropdown.Item href="customer">Register customer</NavDropdown.Item>
        <NavDropdown.Item href="listCustomer">List customers</NavDropdown.Item>
        <NavDropdown.Item href="blockAcount">Block account</NavDropdown.Item>
        <NavDropdown.Item href="listAcount">List acount</NavDropdown.Item>
        <NavDropdown.Item href="transaction">List transactions</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Options checker" id="collasible-nav-dropdown">
        <NavDropdown.Item href="deposit">Deposit</NavDropdown.Item>
        <NavDropdown.Item href="withdrawal">Withdrawal</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Options client" id="collasible-nav-dropdown">
        <NavDropdown.Item href="register">Register acount</NavDropdown.Item>
        <NavDropdown.Item href="transferMoney">Transfer money</NavDropdown.Item>
        <NavDropdown.Item href="myTransaction">My transactions</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)


export default Header
