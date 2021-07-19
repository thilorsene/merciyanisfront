import React,{ useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import logo from './logo.png'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Cart from './Cart'
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: blue[50],
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
    paddingTop: '56.25%',
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

export default function Purchase(props) {
  const [error,setError] = useState(null)
  const [items,setItems] = useState([])
  const [isLoaded,setIsLoaded] = useState(false)
  const [cart,setCart] = useState([])

  useEffect(() => {
      const uri = 'http://127.0.0.1:8000/albums'
      fetch(uri)
        .then(res => res.json())
        .then((results ) => {
          console.log(results)
          setItems(results)
        })
    },[cart]);

    const carts =  <Cart cart={cart}/>

    function addToCart(row){
     let a = cart
      console.log(a)
      a.push(row)
      console.log(a)
      setCart(a)
      console.log(cart)
      setCart(a)
     }

  const classes = useStyles();
    return (  <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" > 
            <Avatar alt="Remy Sharp" src={logo} className={classes.large}  style={{alignSelf: 'center'}} component={Link} to=''/>
            <br></br>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Purchase Album
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
              <Grid item key={1} xs={7}>
              <Typography  align="center" color="textSecondary" >
              Album List
            </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Artist</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">Rating</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((row) => (
                        <TableRow key={row.key}>
                          <TableCell component="th" scope="row">
                            {row.artist}
                          </TableCell>
                          <TableCell align="center">
                            {row.title}
                          </TableCell>
                          <TableCell align="center">
                            {row.rating}
                          </TableCell>
                          <TableCell align="center">
                            {row.price}
                          </TableCell>
                          <TableCell align="center">
                          <IconButton color="primary" aria-label="add to cart" onClick={addToCart.bind(this,row)}>
                            <AddShoppingCartIcon />
                          </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item key={2} xs={5}>
              <Typography  align="center" color="textSecondary" >
              Cart
            </Typography>
                {carts}
              </Grid>
            </Grid>
          </Container>
      </main>
    </React.Fragment>
    );
  }