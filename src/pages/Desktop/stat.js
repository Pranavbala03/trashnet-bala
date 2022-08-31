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
  Table,
  Dropdown,
  Pagination,
  Offcanvas,
  CloseButton,
} from "react-bootstrap";
import { Routes } from "../../routes";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
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
  ChartBar,
  HouseLine,
  ArrowFatLineRight,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

export default () => {


  return (
    <>
      <Stack direction="horizontal">
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Trashnet
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink to="/#" activeClassName="activeClicked">
                  {" "}
                  <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>

                <CDBSidebarMenuItem icon="Chart">Stats</CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="list">Ledger</CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="help">Helpdesk</CDBSidebarMenuItem>
                {/* // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Dashboard</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Tables</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Profile page</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Analytics</CDBSidebarMenuItem>
            // </NavLink>

            // <NavLink exact to=""activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">404 page</CDBSidebarMenuItem>
            // </NavLink> */}
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "20px 5px",
                }}
              >
                Trashnet web-app
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <CDBSidebar textColor="#333" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Statistics
              </a>
            </CDBSidebarHeader>
            <br />
            <br />

            <CDBSidebarContent className="sidebar-content">
              <Container>
                <Typography variant="h6">
                  {" "}
                  Cycles Overview (07 Jul - 14 Jul)
                </Typography>

                <Card>
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <h1> 02 </h1>
                      <Stack direction="vertical">
                        <Typography variant="h6"> In-Progress</Typography>
                        <Typography variant="lead"> Under-review</Typography>
                      </Stack>
                      <Button variant="outline-primary" size="sm">
                        <ArrowFatLineRight />
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
                <br />
                <Card>
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <h1> 02 </h1>
                      <Stack direction="vertical">
                        <Typography variant="h6"> In-Progress</Typography>
                        <Typography variant="lead"> Under-review</Typography>
                      </Stack>
                      <Button variant="outline-primary" size="sm">
                        <ArrowFatLineRight />
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
                <br />
                <Card>
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <h1> 02 </h1>
                      <Stack direction="vertical">
                        <Typography variant="h6"> In-Progress</Typography>
                        <Typography variant="lead"> Under-review</Typography>
                      </Stack>
                      <Button variant="outline-primary" size="sm">
                        <ArrowFatLineRight />
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
              </Container>
              <br />
              <Container>
                <Typography variant="h5"> Payments</Typography>

                <Card>
                  <Card.Body>
                    <Stack direction="horizontal" gap={3}>
                      <Stack direction="vertical">
                        <Typography variant="h6"> Received</Typography>
                        <Typography variant="h4"> 10,000</Typography>
                      </Stack>
                      <Button variant="outline-primary" size="sm">
                        <ArrowFatLineRight />
                      </Button>
                    </Stack>
                  </Card.Body>
                </Card>
                <br />
              </Container>

              {/* <CDBSidebarMenuItem icon="Chart">Stats</CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="list">Ledger</CDBSidebarMenuItem>
                <CDBSidebarMenuItem icon="help">Helpdesk</CDBSidebarMenuItem> */}
              {/* // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Dashboard</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Tables</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Profile page</CDBSidebarMenuItem>
            // </NavLink>
            // <NavLink exact to="" activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">Analytics</CDBSidebarMenuItem>
            // </NavLink>

            // <NavLink exact to=""activeClassName="activeClicked">
            //   <CDBSidebarMenuItem icon="">404 page</CDBSidebarMenuItem>
            // </NavLink> */}
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: "center" }}>
              <div
                style={{
                  padding: "20px 5px",
                }}
              >
                <Button>All Cycles</Button>
              </div>
             
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
        <Container>
          <Stack direction="Vertical" gap={3}>
            <Typography variant="h1"> Ledger</Typography>
            <Typography variant="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <Stack direction="horizontal" gap={3}>
              <br />
              <br />
              {/* <div className="vr, me-auto"/> */}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  {" "}
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  {" "}
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  {" "}
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>4</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>{" "}
                <tr>
                  <td>5</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>{" "}
                <tr>
                  <td>6</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>{" "}
                <tr>
                  <td>7</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>8</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>9</td>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
      
        

  
          </Stack>
        </Container>

      </Stack>
     
    </>
  );
};
