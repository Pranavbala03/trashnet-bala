import React, { useRef, useEffect, useState } from "react";
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
  ListGroup,
  Modal,
} from "react-bootstrap";
import { Routes } from "../../../routes";
import { Typography, Color, CardBody } from "@material-tailwind/react";
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
import Mobiletopnavbar from "../../datacomponents/navtop-mobile";
import Mobilebottomnavbar from "../../datacomponents/navbar-bottom-mobile";
import Greetings from "../../datacomponents/greeting-mobile";

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Mobilebottomnavbar />
      <Mobiletopnavbar />
      <Container className="mb-3">
        <Typography variant="h1" color="textPrimary">
          Profile
        </Typography>
        <Stack direction="horizontal" spacing={4} className="mb-3">
          <img
            src="https://picsum.photos/40/40"
            width="150"
            height="150"
            class="rounded-circle"
          ></img>
          <Container>
            <Typography variant="h2" color="textPrimary">
              {" "}
              John Doe
            </Typography>
            <Typography variant="lead" color="textPrimary">
              Collector
            </Typography>
          </Container>
        </Stack>
        <Stack direction="vertical" gap={3} className="mb-3">
          <Card>
            <Card.Body>
              <Typography variant="h3" color="textPrimary">
                {" "}
                Registered Address
              </Typography>
              <Typography variant="paragraph" color="textPrimary">
                4, 30th Main Rd, opp. Kempegowda Institute Of Medical Science,
                Kaveri Nagar, Banagirinagara, Banashankari 3rd Stage,
                Banashankari, Bengaluru, Karnataka 560070
              </Typography>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Stack direction="horizontal" spacing={2}>
                <Button variant="outline-*" onClick={handleShow}>
                  <img
                    src="https://picsum.photos/40/40"
                    width="50"
                    height="40"
                    class="rounded-circle"
                  ></img>
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Image of Facility</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img
                      src="https://picsum.photos/40/40"
                      width="500"
                      height="500"
                    ></img>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Container>
                  <Typography variant="h6" color="textPrimary">
                    {" "}
                    Image of Facility
                  </Typography>
                  <Typography variant="paragraph" color="textPrimary">
                    Last Updated:12/07/2022 : 15:30
                  </Typography>
                </Container>
              </Stack>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Typography variant="h3" color="textPrimary">
                {" "}
                GST Number{" "}
              </Typography>
              <Typography variant="lead">22AAAAA0000A1Z5</Typography>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Stack gap={2}>
                <Typography variant="h3" color="textPrimary">
                  {" "}
                  Waste Categories{" "}
                </Typography>
                <ListGroup>
                  <ListGroup.Item>this is 1</ListGroup.Item>
                  <ListGroup.Item>this is 2</ListGroup.Item>
                  <ListGroup.Item>this is 3</ListGroup.Item>
                  <ListGroup.Item>this is 4</ListGroup.Item>
                  <ListGroup.Item>this is 5</ListGroup.Item>
                </ListGroup>
              </Stack>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Typography variant="h3" color="textPrimary">
                {" "}
                Capacity{" "}
              </Typography>
              <ListGroup.Item>
                <Typography variant="lead">100000 kgs </Typography>
              </ListGroup.Item>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Typography variant="h3" color="textPrimary">
                {" "}
                Workers Strength{" "}
              </Typography>
              <ListGroup.Item>
                <Typography variant="lead">100 - 150 people</Typography>
              </ListGroup.Item>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div class="mb-4"></div>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </>
  );
};
