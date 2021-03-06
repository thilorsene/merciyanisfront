import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import logo from './pp.png'
import Icon from '@material-ui/core/Icon';
import MoodIcon from '@material-ui/icons/Mood';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { yellow } from '@material-ui/core/colors';
import {Box,TextField} from '@mui/material';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        
      },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Nouvelle Commande
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Lancer une commande
        </DialogTitle>
        <DialogContent dividers>
        <form action="http://localhost:8000/send_order" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleClose(); }  }>
        <div style={{ textAlign: 'center', padding: 8, margin: '24px -24px -24px -24px' }}>
        <TextField name="id" hintText="Produit" label="ID produit" />
          <TextField name="qte"  hintText="Quantite" label="Quantit??" />
          </div>
          
          <div style={{ textAlign: 'center', padding: 8, margin: '24px -24px -24px -24px' }}>
            <Button variant="contained" color="primary" type="submit">
                    Valider
                  </Button>
          </div>
        </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}