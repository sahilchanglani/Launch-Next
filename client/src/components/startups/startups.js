import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Startup from './Startup/Startup';
import useStyles from './styles';

const Startups = ({ setCurrentId }) => {
  const {startups} = useSelector((state) => state.startups);
  const classes = useStyles();

  return (
    !startups?.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {startups.map((startup) => (
          <Grid key={startup._id} item xs={12} sm={12} md={6} lg={3}>
            <Startup startup={startup} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Startups;
