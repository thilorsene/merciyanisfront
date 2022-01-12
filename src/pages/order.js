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

export default function Send_Order() {
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
        Credits
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          App Credits
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom  align="center">
            With
          </Typography>
          <Typography align="center">
          <EmojiEmotionsIcon style={{ color: yellow[800] }}></EmojiEmotionsIcon>
            
          </Typography>
          <Typography gutterBottom>
           By Mbaye Thilor SENE 
          </Typography>
        <Avatar alt="Logo MerciYanis" src={logo} className={classes.large}  style={{alignSelf: 'center'}} />
        <Typography align="center">
           Hakuna Matata !!!!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}