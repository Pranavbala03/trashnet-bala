import React from "react";
import { Routes } from "../../routes";

import { House, List, User, Plus } from "phosphor-react";
import { Test } from "./test";
import { ThemeProvider } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Trashnet
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}

        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"></a>
            </li>
          </ul>
        </div>
      </nav>

      <h1> Good Morning John dove</h1>
      <div class="box-border h-32 w-32 p-4 border-4 ...">
      <div className="d-grid gap-2">
      {/* <Button  type="button" class="btn btn-primary" variant="primary" size="lg"> */}
      <Button variant="primary">
      <Plus size={32} />
       <Typography>
        Start CGP cycle
        </Typography>
      </Button>
     
    </div>
    </div>
      <div class="box-border h-32 w-32 p-4 border-4 ...">
        <Card className="w-96">
        <CardHeader floated={false} className="h-80"></CardHeader>
        <CardBody className="text-center"></CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
      </Card>
     </div>
     <div class="box-border h-32 w-32 p-4 border-4 ...">
        <Card className="w-96">
        <CardHeader floated={false} className="h-80"></CardHeader>
        <CardBody className="text-center"></CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
      </Card>
     </div>
     <div class="box-border h-32 w-32 p-4 border-4 ...">
        <Card className="w-96">
        <CardHeader floated={false} className="h-80"></CardHeader>
        <CardBody className="text-center"></CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
      </Card>
     </div>
     <div class="box-border h-32 w-32 p-4 border-4 ...">
        <Card className="w-96">
        <CardHeader floated={false} className="h-80"></CardHeader>
        <CardBody className="text-center"></CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
      </Card>
     </div>
      
      {/* bottom navigation */}
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="House" icon={<House size={32} />} />
          <BottomNavigationAction label="User" icon={<User size={32} />} />
          <BottomNavigationAction label="List" icon={<List size={32} />} />
        </BottomNavigation>
      </Box>
    </>
  );
};
