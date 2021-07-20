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
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';

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
  const [total,setTotal] = useState(0)

  


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
/* This function as its name is used to add an album on the card 
    the a variable is used to make a copy of the card in order to update it using the push method  */
    function addToCart(row){
      let a = cart
      if (a == [] || a.find(element => element.album.title ==row.album.title)==undefined){
        a.push(row)
        console.log(a)
        setCart(a)
      }
      else {
       let b = a.findIndex(element => element.album.title == row.album.title)
       console.log(b)
       a[b].number = a[b].number+1
       setCart(a)
       console.log(a)
        }
        var somme =  cart.reduce(
          (adder, current) => adder + current.album.price*current.number
          ,0
      );
      console.log('Total',somme)
      setTotal(somme)
      }

/*This funtion is used to decrement, delete an album from the card 
  Isssue : It works properly when the cart is emty or when we haven't reached 0 album while decrementing */      

    function decrement(row){
      let cp_cart = cart
      if (cart.length === 0 || cart.find(element => element.album.title ==row.title)==undefined){
        console.log('Album not present on cart')
        
      }
      else {
       let b = cp_cart.findIndex(element => element.album.title == row.title)
       cp_cart[b].number = cp_cart[b].number-1
        if(cp_cart[b].number==0){
          delete cp_cart[b]
        }
       setCart(cp_cart)
       console.log(cart)
       var somme = cart.reduce(
        (adder, current) => adder + current.album.price*current.number
        , 0
    );
    setTotal(somme)
    console.log('Total',somme)
        }

    }
     

    /*For the cart i would like to create a separated component and send the articles through props 
    then i could be able to manage them in both side if the props were global

    All the functions dedicated to the cart management are implement (with some issues) unless 
    the update through the text field . 
    Icrement and decrement are available near the add to cart button on the album list.
    All the result are visble on the console. 
    */

    /*
      About the textfield update i have tried it but i deleted because
      i couldnt set the the realtime value of the album number in the cart 
    */
  
     

  const classes = useStyles();
    return (  <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" > 
            <Avatar alt="Remy Sharp" src={logo} className={classes.large}  style={{alignSelf: 'center'}} component={Link} to=''/>
            <br></br>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Purchase an Album Or Not
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
                          <IconButton color="primary" aria-label="add to cart" onClick={addToCart.bind(this,{'album':row,'number':1})}>
                            <AddShoppingCartIcon />
                          </IconButton>

                          </TableCell>
                          <TableCell align="center">
                          <IconButton color="primary" aria-label="add to cart" onClick={addToCart.bind(this,{'album':row,'number':1})}>
                            <AddIcon />
                          </IconButton>
                          
                          </TableCell>
                          <TableCell align="center">
                          <IconButton color="secondary" aria-label="add to cart" onClick={decrement.bind(this,row)}>
                            <RemoveIcon />
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