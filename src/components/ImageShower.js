import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';
import React from 'react';

const useStyles = makeStyles(() => ({
  closeIcon: {
    position: 'fixed',
    top: 20,
    right: 20,
    zIndex: 99999,
  },
  icon: {
    width: 80,
    height: 'auto',
  },
}));

function ImageShower(props) {
  const classes = useStyles();
  if (!props.open) {
    return null;
  }
  return (
    <>
      <Dialog open={true} onClose={props.onClose}>
        <img alt={props.title} src={props.src} />
      </Dialog>
      <IconButton className={classes.closeIcon} onClick={props.onClose}>
        <Close className={classes.icon} />
      </IconButton>
    </>
  );
}

export default ImageShower;
