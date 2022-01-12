import React,{ useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: '188px'
  },
}));

/*
  The cart coponents
*/
const Cart = ({elem}) => {
  const [cart,setCart] = useState([])

  useEffect(() => {
     setCart(elem)
    },[elem]);

  const classes = useStyles();
    return ( 
              <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Artist</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {elem.map((row) => {
                      console.log("elem:",row)
                      return(
                      <TableRow key={row.key}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="center">
                          {row.artist}
                        </TableCell>
                        <TableCell align="center">
                          {row.price}
                        </TableCell>
                      </TableRow>)
})}
                    </TableBody>
                  </Table>
                </TableContainer>
    );
  }; export default Cart