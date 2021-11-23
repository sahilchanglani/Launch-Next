import React from "react";
import {Container, AppBar, Typography, Grid, Grow, Box, Toolbar, IconButton, Button} from "@material-ui/core";
import logo from "./images/logo.png";
import useStyles from "./styles"

const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className={classes.image} src={logo} alt="logo" align="center" height="8%" width="8%" />Launch Next
            </Typography>
            <Button variant="contained" size="medium" color="#029C63">Submit Startup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  ); 
};

export default App;
