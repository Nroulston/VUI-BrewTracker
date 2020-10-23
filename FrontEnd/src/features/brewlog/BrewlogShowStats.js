import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


export default function BrewlogShowStats({ brewlog}) {
 
  //TODO create comparison between stats
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       BrewLog Stats
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Strike Volume </TableCell>
            <TableCell>Strike Temperature </TableCell>
            <TableCell>Mash pH</TableCell>
            <TableCell>Original Gravity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>{brewlog.strike_volume} </TableCell>
              <TableCell>{brewlog.strike_temp} </TableCell>
              <TableCell>{brewlog.mash_pH}</TableCell>
              <TableCell>{brewlog.original_gravity}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}