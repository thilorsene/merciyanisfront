import React from 'react';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import logo from './pages/logo.png'
import CustomizedDialogs from './pages/Credits';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: blue[50],
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginLeft: '188px'
  },
}));


export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm"> 
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Let's Dance
            </Typography>
            <Avatar alt="Logo MerciYanis" src={logo} className={classes.large}  style={{alignSelf: 'center'}} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" component={Link} to="/purchase">
                    Purchase an Album
                  </Button>
                </Grid>
                <Grid item>
                  <CustomizedDialogs/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </main>
    </React.Fragment>
  );
}