import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


export default function RecipeHopsShow({recipe}) {
 
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Hops
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Alpha Acid</TableCell>
            <TableCell>Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe.hops.map( (hop, index) => (
            <TableRow key={index}>  
              <TableCell>{hop.name} </TableCell>
              <TableCell></TableCell>
              <TableCell>{hop.alpha_acid}</TableCell>
              <TableCell>{hop.form}</TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}