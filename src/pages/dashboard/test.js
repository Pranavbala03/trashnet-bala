import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";;
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import { List, User } from "phosphor-react";
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


console.log("DOGFISH " * 10);

export class Test extends React.Component {
  render() {
    return (
      <>
 
          {/* <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
               <List size={32} />
              </IconButton>
            <h1>Dashboard</h1>
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
                  <User size={32} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
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
          </AppBar> */}
          <div>
          <AppBar>
            <Toolbar>
           <IconButton>
            <List size={32} />
            <typography
            variant="h6">
hi
            </typography>
   
            <h1>Dashboard</h1>
           </IconButton>
            </Toolbar>
          </AppBar>
          
          </div>
          <div>
 
          </div>

   
      </>
    );
  }
}
