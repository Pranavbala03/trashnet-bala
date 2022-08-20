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
import { Typography } from "@material-tailwind/react";
import {
  Scales,
  CaretDown,
  Camera,
  List,
  Recycle,
  CarSimple,
  House, User
} from "phosphor-react";

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
        <Container>
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
        <Container>
          <Typography variant="h2"> Collector Input</Typography>
          <Card>
            {" "}
            <Card.Header>
              <Stack direction="horizontal" gap={3}>
                {" "}
                <Recycle size={24} />
                <div>
                  <Typography variant="paragraph">3775207r35</Typography>
                </div>
              </Stack>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="weight-collected">
                  <Form.Label>Weight of Collected Waste</Form.Label>
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

                  <Form.Text className="text-muted">
                    Don't forget to Click a picture
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Picture</Form.Label>
                  <Stack direction="Vertical" gap={3}>
                    <Button variant="outline-secondary">
                      <label for="weight-collector">
                        <Camera />
                      </label>
                    </Button>

                    <input
                      type="file"
                      id="weight-collector"
                      name="weight-collector"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        uploader(e);
                      }}
                      style={{ display: "none" }}
                    ></input>
                    {result && <img ref={imageRef} src={result} alt="" />}
                  </Stack>
                  <Form.Text className="text-muted">
                    Picture of the React hate machine
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Types of Plastic</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Click to Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Recycling Facility</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Click to Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload Pictures of Collected Waste</Form.Label>
                  <Stack direction="Vertical" gap={3}>
                    <Button variant="outline-secondary">
                      <label for="weight-collector">
                        <Camera />
                      </label>
                    </Button>

                    <input
                      type="file"
                      id="weight-collector1"
                      name="weight-collector"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => {
                        setImageUrl(e.target.files[0]);
                        uploader();
                      }}
                      style={{ display: "none" }}
                    ></input>
                    {display && <img ref={imageUrlref} src={display} alt="" />}
                  </Stack>
                  <Form.Text className="text-muted">
                    Picture of the React hate machine
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="weight-collected">
                  <Form.Label>Vehicle No.</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <CarSimple size={20} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="KAXX 00 XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="weight-collected">
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    {" "}
                    Submit
                  </Button>
                </div>
                </Form.Group>
                <Container>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    {" "}
                    Submit
                  </Button>
                 
                </div>
                </Container>
              </Form>
            </Card.Body>
          </Card>

        </Container>
      </Stack>
      <Navbar fixed="bottom" className="bg-light">
        <Container>
          
          <Button variant="outline-*"  size="sm"><List  size={32}/></Button>
          <Button variant="outline-*" size="sm"><House size={32}/></Button>
          <Button variant="outline-*" size="sm"><User size={32}/></Button>
          
        </Container>
      </Navbar>
    </>
  );
};
