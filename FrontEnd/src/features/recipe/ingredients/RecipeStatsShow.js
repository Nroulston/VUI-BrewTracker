import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(2),
  },
}));

export default function RecipeStatsShow({recipe}) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
       Recipe Stats
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Style </TableCell>
            <TableCell>Method </TableCell>
            <TableCell>Batch Size</TableCell>
            <TableCell>Boil Time</TableCell>
            <TableCell>Preboil Volume</TableCell>
            <TableCell>Preboil Gravity</TableCell>
            <TableCell >Target OG</TableCell>
            <TableCell >Target FG</TableCell>
            <TableCell >IBU's</TableCell>
            <TableCell >SRM</TableCell>
            <TableCell >Mash PH</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>{recipe.style} </TableCell>
              <TableCell>{recipe.method} </TableCell>
              <TableCell>{recipe.batch_size}</TableCell>
              <TableCell>{recipe.boil_time}</TableCell>
              <TableCell>{recipe.pre_boil_size}</TableCell>
              <TableCell >{recipe.pre_boil_gravity}</TableCell>
              <TableCell >{recipe.target_og}</TableCell>
              <TableCell >{recipe.target_fg}</TableCell>
              <TableCell >{recipe.ibu}</TableCell>
              <TableCell >{recipe.srm}</TableCell>
              <TableCell >{recipe.mash_ph}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}