'use client'

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function SimpleSnackbar({ open , message , handleClose}) {
console.log("open , message==>>",open , message)

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  // };


  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}