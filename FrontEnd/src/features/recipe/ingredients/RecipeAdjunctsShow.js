import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


export default function RecipeAdjunctsShow({recipe}) {
 
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Adjuncts
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Amount</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe.other_ingredients.map( (adjunct, index) => (
            <TableRow key={index}>  
              <TableCell>{adjunct.name} </TableCell>
              <TableCell></TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}