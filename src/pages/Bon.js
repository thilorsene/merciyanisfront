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
import Chip from '@mui/material/Chip';

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

export default function Bon(props) {
  const [error,setError] = useState(null)
  const [items,setItems] = useState([])
  const [isLoaded,setIsLoaded] = useState(false)
  
  


  useEffect(() => {
      const uri = 'http://localhost:8000/bons'
      fetch(uri)
        .then(res => res.json())
        .then((results ) => {
          console.log(results)
          setItems(results)
        })
    },[]);
    
  const classes = useStyles();
    return (  <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" > 
            <Avatar alt="Remy Sharp" src={logo} className={classes.large}  style={{alignSelf: 'center'}} component={Link} to=''/>
            <br></br>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
              <Grid item key={1} xs={12}>
              <Typography  align="center" color="textSecondary" >
              Bon de commandes
            </Typography>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">article</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Qte Commandée</TableCell>
                        <TableCell align="center">Qte Livrée</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((row) => (
                        <TableRow key={row.key}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="center">
                            {row.id_article}
                          </TableCell>
                          <TableCell align="center" >
                            {row.date}
                          </TableCell>
                          <TableCell align="center">
                            {row.qte_commande}
                          </TableCell>
                          <TableCell align="center">
                            {row.qte_livree}
                          </TableCell>
                         
                          <TableCell align="center" >
                          <IconButton  aria-label="add to cart">
                            <AddShoppingCartIcon />
                          </IconButton>

                          </TableCell>
                          
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>
      </main>
    </React.Fragment>
    );
  }