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
import { Routes } from "../../../routes";
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
import Mobiletopnavbar from "../../datacomponents/navtop-mobile";
import Mobilebottomnavbar from "../../datacomponents/navbar-bottom-mobile";
import Greetings from "../../datacomponents/greeting-mobile";

export default () => {
  return (
    <>
      <Mobilebottomnavbar />
      <Mobiletopnavbar />
      <Greetings />
      <Container>
        <Stack gap={3}>
          <Button as={Link} to={Routes.CollectorInput.path}>
            {" "}
            CollectorInput{" "}
          </Button>
          <Button as={Link} to={Routes.RecyclerConfirmation.path}>
            {" "}
            Recycler Confirmation{" "}
          </Button>
          <Button as={Link} to={Routes.RecyclerInput.path}>
            {" "}
            Recycler Input{" "}
          </Button>
          <Button as={Link} to={Routes.ManufacturerConfirmation.path}>
            {" "}
            Manufacturer Confirmation{" "}
          </Button>
          <Button as={Link} to={Routes.GstBill.path}>
            {" "}
            Gst Bill{" "}
          </Button>
          <Button as={Link} to={Routes.NotFound.path}>
            {" "}
            View Input Cycle{" "}
          </Button>
          <Button as={Link} to={Routes.Firebasecry.path}>
            {" "}
            Please work Firebase{" "}
          </Button>
        </Stack>
      </Container>
    </>
  );
};
