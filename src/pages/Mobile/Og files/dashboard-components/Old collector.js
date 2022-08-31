import React, { useRef, useEffect, useState } from "react";

import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Scales, CaretDown, Camera } from "phosphor-react";
import { IconButton, Typography, Input, Button } from "@material-tailwind/react";

import { Col, Row, Card, FormCheck, Container } from "react-bootstrap";

import { Routes } from "../../../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faWeightHanging,
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  var fileInput = document.getElementById("weight-collector");
  var fileDisplayArea = document.getElementById("fileDisplayArea");

  window.onload = function () {
    var fileInput = document.getElementById("weight-collector");
    var fileDisplayArea = document.getElementById("fileDisplayArea");

    fileInput.addEventListener("change", function (e) {
      // Put the rest of the demo code here.
      var file = fileInput.files[0];
      var imagetype = /image.*/;
      if (file.type.match(imagetype)) {
        var reader = new FileReader();
        reader.onload = function (e) {
          fileDisplayArea.innerHTML = "";
          var img = new Image();
          img.src = reader.result;
          fileDisplayArea.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else {
        fileDisplayArea.innerHTML = "File not supported!";
      }
    });
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link
              as={Link}
              to={Routes.DashboardOverview.path}
              className="text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to
              homepage
            </Card.Link>
          </p> */}
          <Row
          // className="justify-content-center form-bg-image"
          // style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                {/* <div className="text-center text-md-center mb-4 mt-md-0"> */}
                  {/* Header */}
               <div>
                <Typography variant="h1"> Collector Input</Typography>
               </div>

               <Input variant="standard" label="Weight Collected" />
              
                <Form className="mt-4">
                  <div className="mt-3 mb-4 text-center"></div>
                  <div className=" justify-content-center my-4">
                    {/* Weight */}
                    <Form.Group id="weight" className="mb-4">
                      <Typography variant="h5">Weight Collected</Typography>
                      <Input variant="outlined" label="Outlined" />
                     
                    </Form.Group>


                   
 {/* Camera */}

 {/* <div></div> */}

                    <Form.Group >
                    <Typography variant="h5">Weight</Typography>
                      <IconButton variant="outlined" size="md" color="blue" ripple={true}>
                        <label for="weight-collector">
                          <Camera />
                        </label>
                      </IconButton>
                     
                      <container></container>

                      <input
                        type="file"
                        id="weight-collector"
                        name="weight-collector"
                        accept="image/*"
                        capture="environment"
                        style={{ display: "none" }}
                      ></input>
                      <div id="fileDisplayArea"></div>
                    </Form.Group>

                
                  </div>

                 
            
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
