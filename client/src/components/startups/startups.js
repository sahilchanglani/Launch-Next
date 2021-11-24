import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Startup from './Startup/Startup';
import useStyles from './styles';

const  Startups = ({ setCurrentId }) => {
  const startups = useSelector((state) => state.startups);
  const classes = useStyles();

  return (
     <h2>Startups</h2>
  );
};

export default Startups;
