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
import Dtime from "./time";
import Dfate from "./date"
import Dday from "./day";
import { HashLink } from "react-router-hash-link";
const Greetings = () => {
  return (
    <Stack gap={3}>
      <Container className="mb-3">
        <Row>
          <Typography variant="h1">Good Morning John!</Typography>

          <Stack direction="horizontal" className="col-md-5 mx-auto">
            <Container>
              {" "}
              <Typography variant="lead"> Today's</Typography>
              <Dday />
            </Container>
            <div className="vr" style={{ color: "white" }} />
            <Container>
              {" "}
              <Typography variant="lead"> Date</Typography>
              <Dfate />
            </Container>
            <div className="vr" style={{ color: "white" }} />
            <Container>
              {" "}
              <Typography variant="lead">Time</Typography>
              <Dtime />
            </Container>
          </Stack>
        </Row>
      </Container>
    </Stack>
  );
};

export default Greetings;
