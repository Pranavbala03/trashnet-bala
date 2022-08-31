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
import { Link } from "react-router-dom";
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
import Mobiletopnavbar from "../../datacomponents/navtop-mobile";
import Mobilebottomnavbar from "../../datacomponents/navbar-bottom-mobile";
import Greetings from "../../datacomponents/greeting-mobile";

export default () => {
  return (
    <>
      {" "}
      <Mobilebottomnavbar />
      <Mobiletopnavbar />
      <Greetings />
      <Container>
        <Stack direction="vertical">
          <Typography variant="h2">Update GST bill</Typography>
          <Card>
            <Card.Header>
              <Stack gap={3} direction="horizontal">
                <Recycle size={24} />
                <div>
                  <Typography variant="paragraph">3775207r35</Typography>
                </div>
              </Stack>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="rc-plastic-received">
                  <Form.Label>GST invoice</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <Scales size={20} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="100"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Picture of GST bill</Form.Label>
                  <Stack direction="Vertical" gap={3}>
                    <Button variant="outline-secondary">
                      <label for="weight-collector">
                        <Camera />
                      </label>
                    </Button>
                    <input
                      accept="image/*"
                      id="weight-collector"
                      name="weight-collector"
                      capture="environment"
                      style={{ display: "none" }}
                    ></input>
                  </Stack>
                  <Form.Text className="text-muted">
                    Details Should be Visible
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="weight-collected">
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      as={Link}
                      to={Routes.mobiledashboard.path}
                    >
                      {" "}
                      Submit
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
