import React from "react";
import { Routes } from "../../routes";

import { House, List, User } from "phosphor-react";
import { Test } from "./test"
import { ThemeProvider } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// class NavigationBar extends React.Component {
//   render() {
//     return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Nav className="me-auto">
//             <Nav.Link href="#features"><List size={32} /></Nav.Link>
//             <Nav.Link href="#home"><House size={32} /></Nav.Link>
//             <Nav.Link href="#pricing"><User size={32} /></Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//     )
//   }
// }
class BottomBar extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default () => {
  const [value, setValue] = React.useState(0);

  return (
    
    <>
    <Test></Test>
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
       
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
        CGP cycle
        </Typography>
        <Typography>
          Vehicle has left
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
      <Button variant="filled">Update Status</Button>
      </CardFooter>
    </Card>
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="House" icon={<House size={32}/>} />
        <BottomNavigationAction label="User" icon={<User size={32}/>} />
        <BottomNavigationAction label="List" icon={<List size={32}/>} />
       
      </BottomNavigation>
    </Box>

    </>
  );
};
