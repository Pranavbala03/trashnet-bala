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
          </Stack>
        </Container>
      </Stack>
    </>
  );
};
