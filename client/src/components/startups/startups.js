import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Startup from './Startup/startup';
import useStyles from './styles';

const Startups = ({ setCurrentId }) => {
  const { startups, isLoading } = useSelector((state) => state.startups);
  const classes = useStyles();

  if(!startups.length && !isLoading) return 'No startups';

  return (
    isLoading ? <CircularProgress /> : (
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
