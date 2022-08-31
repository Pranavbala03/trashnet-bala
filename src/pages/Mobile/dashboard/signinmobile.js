import React from "react";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Routes } from "../../../routes";
import { EnvelopeOpen, Password } from "phosphor-react";
import { Typography } from "@material-tailwind/react";

//firebase
import db from "../../../firebase.config";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";

export default () => {
  const q = query(collection(db, "users"));

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row>
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <Typography variant="h3">
                    {" "}
                    Sign in to the EPR Portal
                  </Typography>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>
                      <Typography variant="lead"> Email</Typography>
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <EnvelopeOpen />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        placeholder="example@company.com"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>
                        <Typography variant="lead"> Password</Typography>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <Password />{" "}
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label
                          htmlFor="defaultCheck5"
                          className="mb-0"
                        >
                          Remember me
                        </FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">
                        Lost password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  {/* <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button> */}
                  <Button
                    variant="primary"
                    as={Link}
                    to={Routes.mobiledashboard.path}
                    className="w-100"
                  >
                    Login
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
