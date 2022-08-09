import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

      </AppBar>
    </Box>
    

    
    
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
}

// // class NavigationBar extends React.Component {
// //   render() {
// //     return (
// //     <div>
// //       <Navbar bg="dark" variant="dark">
// //         <Container>
// //           <Nav className="me-auto">
// //             <Nav.Link href="#features"><List size={32} /></Nav.Link>
// //             <Nav.Link href="#home"><House size={32} /></Nav.Link>
// //             <Nav.Link href="#pricing"><User size={32} /></Nav.Link>
// //           </Nav>
// //         </Container>
// //       </Navbar>
// //     </div>
// //     )
// //   }
// // }
// class BottomBar extends React.Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }