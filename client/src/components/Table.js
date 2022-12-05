import React from 'react';
import {
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
// import Batch from './Batch';

function Tabulation({ data }) {
  return (
    <Grid container padding={2}>
      <Table>
        <TableHead
          sx={{
            textTransform: 'uppercase',
          }}
        >
          <TableRow>
            <TableCell>Criminal Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            {/* <TableCell>Network Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell> */}
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell>
              <NavLink
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#4481EB',
                  padding: '8px',
                  borderRadius: '5px',
                  color: '#ffff',
                }}
                to='/records/add'
              >
                Add
              </NavLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{data.id}</TableCell>
                <TableCell>
                  {data.name}
                  {/* {data.secondName} */}
                </TableCell>
                <TableCell>{data.location}</TableCell>
                {/* <TableCell>{data.networkName}</TableCell> */}
                {/* <TableCell>
                      <Batch status={data.status} />
                    </TableCell> */}
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <NavLink
                    style={{ textDecoration: 'none', color: '#4481EB' }}
                    to='/profile'
                  >
                    View
                  </NavLink>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Grid container justifyContent='flex-end'>
        <Pagination sx={{ marginTop: 2 }} count={3} />
      </Grid>
    </Grid>
  );
}

export default Tabulation;
