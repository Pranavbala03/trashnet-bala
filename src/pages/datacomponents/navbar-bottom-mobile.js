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

const Mobilebottomnavbar = () => {
  return (
    <>
      <Navbar fixed="bottom" className="bg-light" style={{ marginBottom: "0" }}>
        <Container>
          <Button
            variant="outline-*"
            size="sm"
            as={Link}
            to={Routes.Formhotkey.path}
          >
            <List size={32} />
          </Button>
          <Button
            variant="outline-*"
            size="sm"
            as={Link}
            to={Routes.mobiledashboard.path}
          >
            <House size={32} />
          </Button>
          <Button
            variant="outline-*"
            size="sm"
            as={Link}
            to={Routes.mobileprofile.path}
          >
            <User size={32} />
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Mobilebottomnavbar;
