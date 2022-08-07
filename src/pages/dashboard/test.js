import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

console.log("DOGFISH "*10);

export class Test extends React.Component {
    render() {
        return (
            <BottomNavigation>
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites"/>
                <BottomNavigationAction label="Nearby"/>
            </BottomNavigation>
        );
    }
}

