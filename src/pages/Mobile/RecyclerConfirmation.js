// import React, { useRef, useEffect, useState } from "react";
// import {
//   Navbar,
//   Container,
//   Button,
//   Image,
//   Row,
//   Col,
//   Stack,
//   Figure,
//   Form,
//   Card,
//   InputGroup,
// } from "react-bootstrap";
// import { Routes } from "../../routes";
// import { Typography } from "@material-tailwind/react";
// import {
//   Scales,
//   CaretDown,
//   Camera,
//   List,
//   Recycle,
//   CarSimple,
//   House, User, Plus
// } from "phosphor-react";
// import {Link } from 'react-floating-action-button'

// export default () => {
//   const [image, setImage] = React.useState("");
//   const imageRef = React.useRef(null);

//   function useDisplayImage() {
//     const [result, setResult] = React.useState("");

//     function uploader(e) {
//       const imageFile = e.target.files[0];

//       const reader = new FileReader();
//       reader.addEventListener("load", (e) => {
//         setResult(e.target.result);
//       });

//       reader.readAsDataURL(imageFile);
//     }

//     return { result, uploader };
//   }

//   const { result, uploader } = useDisplayImage();

//   const [imageUrl, setImageUrl] = React.useState("");
//   const imageUrlref = React.useRef(null);

//   function somethingimage() {
//     const [display, setdisplay] = React.useState("");

//     function uploaderu(e) {
//       const imageUrlfile = e.target.files[0];

//       const reader = new FileReader();
//       reader.addEventListener("load", (e) => {
//         setdisplay(e.target.result);
//       });
//       reader.readAsDataURL(imageUrlfile);
//     }
//     return { display, uploaderu };
//   }
//   const { display, uploaderu } = somethingimage();

//   const { result1, uploader1 } = useDisplayImage();

//   return (
//    <>
   
//       <Navbar variant="light">
//         <Container>
//           <Button variant="outline-*">
//             <List size={24} />
//           </Button>
//         </Container>
//         <Container>
//           <Button variant="info" size="sm">
//             Contact Us
//           </Button>
//           <Button variant="outline-*" size="sm">
//             <img
//               src="https://picsum.photos/40/40"
//               width="20"
//               height="20"
//               class="rounded-circle"
//             ></img>
//           </Button>
//         </Container>
//       </Navbar>
//       <Stack gap={3}>
//         <Container className="mb-3">
//           <Row>
//             <Typography variant="h1">Good Morning John!</Typography>

//             <Stack direction="horizontal" className="col-md-5 mx-auto">
//               <Container>
//                 {" "}
//                 <Typography variant="lead"> Today's</Typography>
//                 <Typography variant="h6">Weight</Typography>
//               </Container>
//               <div className="vr" style={{ color: "white" }} />
//               <Container>
//                 {" "}
//                 <Typography variant="lead"> Date's</Typography>
//                 <Typography variant="h6">15/07/14</Typography>
//               </Container>
//               <div className="vr" style={{ color: "white" }} />
//               <Container>
//                 {" "}
//                 <Typography variant="lead">Time</Typography>
//                 <Typography variant="h6">10:22</Typography>
//               </Container>
//             </Stack>
//           </Row>
//         </Container>
      
//         </Stack>
//         <Container className="mb-3">
          
//         <div className="d-grid gap-2">
//       <Button>
//       <Col>
//        <Plus size={20} /> 
//        </Col>
//       </Button>
      
//       </div>
     
//       </Container>
//       <Container>
//             <Link href="#"
//                 tooltip="Create note link"
//                 icon="far fa-sticky-note" />
//             <Link href="#"
//                 tooltip="Add user link"
//                 icon="fas fa-user-plus" />
               
//             <Button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
//                 tooltip="The big plus button!"
//                 rotate={true}
//                 icon={<Plus size={32} />} />
                
//         </Container>
       
//       <Navbar fixed="bottom" className="bg-light">
//         <Container>
          
//           <Button variant="outline-*"  size="sm"><List  size={32}/></Button>
//           <Button variant="outline-*" size="sm"><House size={32}/></Button>
//           <Button variant="outline-*" size="sm"><User size={32}/></Button>
          
//         </Container>
       
//       </Navbar> 
//     </>
//   );
// };

import React from "react";
import { Routes } from "../../routes";
import { House, List, User, Plus } from "phosphor-react";
import {
  Navbar,

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
import { ThemeProvider } from "@material-tailwind/react";
import {

  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Container, Link } from 'react-floating-action-button'

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

      <Container>
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
