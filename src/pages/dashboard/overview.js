import React from "react";
import { Routes } from "../../routes";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { House, List, User } from "phosphor-react";

class NavigationBar extends React.Component {
  render() {
    return (
    <div>
      <Navbar bg="light" variant="dark" fixed="bottom">
      <Container>
       
        <Nav className="me-auto">
        <Button variant="dark">
          <Nav.Link href="#features"><List size={32} /></Nav.Link>
     </Button>
    <Button variant="dark">
      <br></br>
          <Nav.Link href="#home"><House size={32} /></Nav.Link>
          </Button>
         <Button variant="dark">
          <Nav.Link href="#pricing"><User size={32} /></Nav.Link>
          </Button>
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
