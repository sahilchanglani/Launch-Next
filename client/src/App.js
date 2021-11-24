import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Startups from './components/Startups/Startups';
import Form from './components/Form/Form';
import { getStartups } from './actions/startups';
import useStyles from './styles';
import logo from './images/logo.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getStartups());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className={classes.image} src={logo} alt="logo" align="center" height="8%" width="8%" />Launch Next
            </Typography>
            <Button variant="contained" size="medium" color="secondary">Submit Startup</Button>
          </Toolbar>
        </AppBar>
        <br/><br/><br/><br/>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Startups setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
