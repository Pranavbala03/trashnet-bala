import React from "react";
import { Routes } from "../../routes";
import { Navbar, Container, Nav } from "react-bootstrap";
import { House, List, User } from "phosphor-react";

class NavigationBar extends React.Component {
  render() {
    return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container>
       
        <Nav className="me-auto">
          
          <Nav.Link href="#features"><List size={32} /></Nav.Link>
          <Nav.Link href="#home"><House size={32} /></Nav.Link>
          <Nav.Link href="#pricing"><User size={32} /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    )
  }
}
class BottomBar extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default () => {
  return (
    <NavigationBar></NavigationBar>
  );
};
