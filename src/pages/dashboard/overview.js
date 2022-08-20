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
       
      </Stack>
      <Navbar fixed="bottom" className="bg-light">
        <Container>
          <Button variant="outline-*" size="sm"><List  size={32}/></Button>
          <Button variant="outline-*" size="sm"><House size={32}/></Button>
          <Button variant="outline-*" size="sm"><User size={32}/></Button>
          
        </Container>
      </Navbar>
    </>
  );
};
