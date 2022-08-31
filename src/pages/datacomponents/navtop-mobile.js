import React from "react";

import {
  Navbar,
  Container,
  Button,
  Image,
  Row,
  Col,
  Stack,
  Figure,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Routes } from "../../routes";
import { Typography, Color } from "@material-tailwind/react";
import {
  Scales,
  CaretDown,
  Camera,
  List,
  Recycle,
  CarSimple,
  House,
  User,
  Plus,
  MapPinLine,
  Clock,
} from "phosphor-react";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const Mobiletopnavbar = () => {
  return (
    <>
      <Navbar variant="light">
        <Container>
          <Button variant="outline-*">
            <List size={24} />
          </Button>
        </Container>
        <Container>
          <Button variant="info" size="sm">
            Contact Us
          </Button>
          <Button
            variant="outline-*"
            size="sm"
            as={Link}
            to={Routes.mobileprofile.path}
          >
            <img
              src="https://picsum.photos/40/40"
              width="20"
              height="20"
              className="rounded-circle"
            ></img>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Mobiletopnavbar;
