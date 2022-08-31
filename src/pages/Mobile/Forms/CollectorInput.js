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
import { Routes } from "../../../routes";
import { Typography } from "@material-tailwind/react";
import {
  Scales,
  CaretDown,
  Camera,
  List,
  Recycle,
  CarSimple,
  House,
  User,
} from "phosphor-react";
import { Link } from "react-router-dom";
import Mobiletopnavbar from "../../datacomponents/navtop-mobile";
import Mobilebottomnavbar from "../../datacomponents/navbar-bottom-mobile";
import Greetings from "../../datacomponents/greeting-mobile";

export default () => {
  // const [image, setImage] = React.useState([]);
  // const imageRef = React.useRef(null);

  // function useDisplayImage() {
  //   const [result, setResult] = React.useState("");

  //   function uploader(e) {
  //     const imageFile = e.target.files[0];

  //     const reader = new FileReader();
  //     reader.addEventListener("load", (e) => {
  //       setResult(e.target.result);
  //     });

  //     reader.readAsDataURL(imageFile);
  //   }

  //   return { result, uploader };
  // }

  // const { result, uploader } = useDisplayImage();

  // const [imageUrl, setImageUrl] = React.useState("");
  // const imageUrlref = React.useRef(null);

  // function somethingimage() {
  //   const [display, setdisplay] = React.useState("");

  //   function uploaderu(e) {
  //     const imageUrlfile = e.target.files[0];

  //     const reader = new FileReader();
  //     reader.addEventListener("load", (e) => {
  //       setdisplay(e.target.result);
  //     });
  //     reader.readAsDataURL(imageUrlfile);
  //   }
  //   return { display, uploaderu };
  // }
  // const { display1, uploaderu1 } = somethingimage();

  // const { result1, uploader1 } = useDisplayImage();
  if (window.File && window.FileList && window.FileReader) {
    function showFile() {
      var preview = document.getElementById("preview");
      var fileInput = document.querySelector("input[type=file]");

      for (var i = 0; i < fileInput.files.length; i++) {
        var reader = new FileReader();
        reader.onload = (readerEvent) => {
          var listItem = document.createElement("li");
          listItem.innerHTML =
            "<img src='" + readerEvent.target.result + "' />";
          preview.append(listItem);
        };
        reader.readAsDataURL(fileInput.files[i]);
      }
    }
  } else {
    alert("Your browser is too old to support HTML5 File API");
  }

  return (
    <>
      <Mobilebottomnavbar />
      <Mobiletopnavbar />
      <Greetings />
      <Container>
        <br />
        <Stack gap={3}>
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
                      {/* <Button variant="outline-secondary">
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
                    {result && <img ref={imageRef} src={result} alt="" />} */}
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
                      <input
                        type="file"
                        multiple
                        onchange="showFile()"
                        accept="image/*"
                      ></input>
                      <div id="preview"></div>

                      {/* <Button variant="outline-secondary">
                      <label for="weight-collector1">
                        <Camera />
                      </label>
                    </Button>

                    <input
                      type="file"
                      id="weight-collector1"
                      name="weight-collector1"
                      accept="image/*"
                      capture="environment"
                      onChange={(e) => {
                        setImageUrl(e.target.files[0]);
                        uploaderu1();
                      }}w
                      style={{ display: "none" }}
                    ></input>
                    {display1 && <img ref={imageUrlref} src={display1} alt="" />} */}
                      {/* {result && <img ref={imageRef} src={result} alt="" />} */}
                      <Button variant="outline-secondary">
                        <label for="weight-collector">
                          <Camera />
                        </label>
                      </Button>
                      <input
                        type="file"
                        multiple
                        onchange="showFile()"
                        accept="image/*"
                        id="weight-collector"
                        name="weight-collector"
                        capture="environment"
                        style={{ display: "none" }}
                      ></input>
                      {/* {result && <img ref={imageRef} src={result} alt="" />} */}
                      <img src="preview" />
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
                      <Button
                        variant="primary"
                        type="submit"
                        as={Link}
                        to={Routes.Signup.path}
                      >
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
      </Container>
    </>
  );
};
