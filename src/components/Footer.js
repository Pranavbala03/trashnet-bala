import React from "react";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";
import { Nav } from "react-bootstrap";
import { House, MagnifyingGlass, Plus} from "phosphor-react";

const iconSize = 32;

// Footer V.2. to look more like the bottom nav bar from the figma designs.

export default () => {
  return (
    <Row className="bg-dark d-flex align-items-center justify-content-center bottom-align">
      <Col lg={4} className="d-flex flex-row justify-content-center align-items-center">
        <Nav defaultActionKey="home" variant="pills" className="d-flex flex-row ">
          <Nav.Item>
            <Nav.Link eventKey="home" href="#" className="mb-3">
              <House size={iconSize}/>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="home" href="#" className="mb-3">
              <Plus size={iconSize}/>
            </Nav.Link>
          </Nav.Item>
 
          <Nav.Item>
            <Nav.Link eventKey="home" href="#" className="mb-3">
              <MagnifyingGlass size={iconSize} />
            </Nav.Link>
          </Nav.Item>
 
        </Nav>
      </Col>
    </Row>
  )
}