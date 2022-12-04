import { Grid } from '@mui/material';
import React from 'react';
import CustomAppBar from './AppBar';
import SideBar from './Sidebar';

function index({ children }) {
  return (
    <Grid container>
      <Grid item xs={2} sx={{ height: '100vh' }}>
        <SideBar />
      </Grid>
      <Grid
        sx={{
          backgroundColor: '#F4F7FE',
        }}
        item
        xs={10}
      >
        <CustomAppBar />
        <Grid
          item
          p={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '80%',
            width: '100%',
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default index;
