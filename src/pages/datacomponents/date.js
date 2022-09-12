import React from 'react';
import { Typography } from '@material-tailwind/react';

var Dfate = () => {
    var showdate = new Date();
    var displaytodaydate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();

    return (
        <>
          <Typography variant="h6">{displaytodaydate}</Typography>
        </>
    )
}

export default Dfate

