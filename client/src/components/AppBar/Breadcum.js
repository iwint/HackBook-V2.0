import React, { useState } from 'react';
import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
function Breadcum() {
  const location = useLocation().pathname;

  return (
    <Box>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          Pages
        </Link>

        <Typography>Dashboard</Typography>
      </Breadcrumbs>
      <Typography variant='h4' sx={{ fontWeight: 'bold' }} color='text.cabzpay'>
        {(location === '/app' && 'Dashboard') ||
          (location === '/records' && 'Criminal Records') ||
          (location === '/facedetect' && 'Face Detection') ||
          (location === '/records/add' && 'Add Record') ||
          (location === '/osint' && 'OSINT') ||
          (location === '/orgintracker' && 'Origin Tracker') ||
          (location === '/dnslookup' && 'DNS LookUp') ||
          (location === '/emailtracker' && 'Email Tracker') ||
          (location === '/portscan' && 'Port Scan') ||
          (location === '/setting' && 'Settings')}
      </Typography>
    </Box>
  );
}

export default Breadcum;
