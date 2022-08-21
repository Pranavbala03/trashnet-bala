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
  Clock
} from "phosphor-react";
import { Link } from "react-floating-action-button";

export default () => {
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  const [imageUrl, setImageUrl] = React.useState("");
  const imageUrlref = React.useRef(null);

  function somethingimage() {
    const [display, setdisplay] = React.useState("");

    function uploaderu(e) {
      const imageUrlfile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setdisplay(e.target.result);
      });
      reader.readAsDataURL(imageUrlfile);
    }
    return { display, uploaderu };
  }
  const { display, uploaderu } = somethingimage();

  const { result1, uploader1 } = useDisplayImage();

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
          <Button variant="outline-*" size="sm">
            <img
              src="https://picsum.photos/40/40"
              width="20"
              height="20"
              class="rounded-circle"
            ></img>
          </Button>
        </Container>
      </Navbar>
      <Stack gap={3}>
        <Container className="mb-3">
          <Row>
            <Typography variant="h1">Good Morning John!</Typography>

            <Stack direction="horizontal" className="col-md-5 mx-auto">
              <Container>
                {" "}
                <Typography variant="lead"> Today's</Typography>
                <Typography variant="h6">Weight</Typography>
              </Container>
              <div className="vr" style={{ color: "white" }} />
              <Container>
                {" "}
                <Typography variant="lead"> Date's</Typography>
                <Typography variant="h6">15/07/14</Typography>
              </Container>
              <div className="vr" style={{ color: "white" }} />
              <Container>
                {" "}
                <Typography variant="lead">Time</Typography>
                <Typography variant="h6">10:22</Typography>
              </Container>
            </Stack>
          </Row>
        </Container>
      </Stack>
      <Container className="mb-3">
        <div className="d-grid gap-2">
          <Button>
            <Col>
              <Plus size={20} /> <span>{"   "}</span>
              Start a CGP cycle
            </Col>
          </Button>
        </div>
      </Container>

      <Stack>
        <Container className="mb-3">
          <Typography variant="h5"> Cycles in Progress</Typography>
          <Stack gap={3}>
            <Card>
              <Card.Body>
              
              <div className="d-grid gap-2">
                    <Recycle/><Typography> 472103847283</Typography>
                   <Typography variant ="h4"> Plastic Type</Typography>
                   <Typography variant ="h5"> Arriving at <MapPinLine/> <Typography variant="h5"> Station</Typography></Typography>
                   <Typography variant ="h5"> Vehicle no. <CarSimple/> <Typography variant="h5"> KA00 XX 0000</Typography></Typography>
                   <Typography variant ="h5"> at <Clock/> <Typography variant="h5"> 12:00</Typography></Typography>
                  <Button variant="outline-primary"> Update Status</Button>
                   </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              
              <div className="d-grid gap-2">
                    <Recycle/><Typography> 472103847283</Typography>
                   <Typography variant ="h4"> Plastic Type</Typography>
                   <Typography variant ="h5"> Arriving at <MapPinLine/> <Typography variant="h5"> Station</Typography></Typography>
                   <Typography variant ="h5"> Vehicle no. <CarSimple/> <Typography variant="h5"> KA00 XX 0000</Typography></Typography>
                   <Typography variant ="h5"> at <Clock/> <Typography variant="h5"> 12:00</Typography></Typography>
                  <Button variant="outline-primary"> Update Status</Button>
                   </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              
              <div className="d-grid gap-2">
                    <Recycle/><Typography> 472103847283</Typography>
                   <Typography variant ="h4"> Plastic Type</Typography>
                   <Typography variant ="h5"> Arriving at <MapPinLine/> <Typography variant="h5"> Station</Typography></Typography>
                   <Typography variant ="h5"> Vehicle no. <CarSimple/> <Typography variant="h5"> KA00 XX 0000</Typography></Typography>
                   <Typography variant ="h5"> at <Clock/> <Typography variant="h5"> 12:00</Typography></Typography>
                  <Button variant="outline-primary"> Update Status</Button>
                   </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                
              </Card.Body>
            </Card>
          </Stack>
        </Container>
      </Stack>

      <Navbar fixed="bottom" className="bg-light">
        <Container>
          <Button variant="outline-*" size="sm">
            <List size={32} />
          </Button>
          <Button variant="outline-*" size="sm">
            <House size={32} />
          </Button>
          <Button variant="outline-*" size="sm">
            <User size={32} />
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

{
  /* <Container>
            <Link href="#"
                tooltip="Create note link"
                icon="far fa-sticky-note" />
            <Link href="#"
                tooltip="Add user link"
               ><Plus/></Link>
               
            <Button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                tooltip="The big plus button!"
                rotate={true}
                ><Plus/></Button>
                
        </Container>

  */
}
