
import React from 'react';
import { useSelector} from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function BrewlogListRecipeShow({recipe}) {
  const brewlogs = useSelector( state => state.brewlogs.brewlogs.filter( brewlog => brewlog.recipe_id === recipe.id))
 
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       BrewLogs
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Brewed</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {brewlogs.map( (brewlog, index) => (
            <TableRow key={index}>  
              
              <TableCell>
                <Link color="inherit" href={`https://http://localhost:3000/brewlogs/${brewlog.id}`}>{brewlog.created_at.slice(0, 10)} 
                </Link>
              </TableCell>
            </TableRow>
              ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}