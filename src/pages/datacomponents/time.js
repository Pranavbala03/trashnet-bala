import React from 'react';
import { Typography } from '@material-tailwind/react';


var Dtime = () => {
    var showdate = new Date();

    var displaytimenow = showdate.getHours() + ' : ' + showdate.getMinutes();
    return (
        <>
          <Typography variant="h6">{displaytimenow}</Typography>
        </>
    )
}
export default Dtime

