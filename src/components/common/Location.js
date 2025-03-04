import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    zIndex: 1,
    justifyContent: 'space-between',
  },

  entityLocation: {
    fontWeight: 500,
    color: '#bebcbc',
    fontSize: 15,
    textAlign: 'center',
    display: 'flex',
  },
  LocationOnOutlinedIcon: {
    padding: '0px 5px',
    fontSize: 15,
    justifyContent: 'space-between',
  },
}));

function Location({ entityLocation }) {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <div>
        <div className={classes.entityLocation}>
          {' '}
          <LocationOnOutlinedIcon className={classes.LocationOnOutlinedIcon} />
          {entityLocation}
        </div>
      </div>
    </Box>
  );
}

export default Location;
