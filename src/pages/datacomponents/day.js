import React from 'react';
import { Typography } from '@material-tailwind/react';

var Dday = () => {
    var showdate = new Date();
    var displayday = showdate.getDay();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
    return (
        <>
          <Typography variant="h6">{weekday[displayday]}</Typography>
        </>
    )
}
export default Dday

