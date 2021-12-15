import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import logo from '../../images/logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" component={Link} to="/" className={classes.heading}>
              <img className={classes.image} src={logo} alt="logo" align="center" height="8%" width="8%" />Launch Next
            </Typography>
            {user? (
              <div>
                <Avatar src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                <Typography variant="h6" >{user.result.name}</Typography>
                <Button variant="contained" size="medium" color="secondary">Logout</Button>
              </div>
            ):(
              <Button component={Link} to="/auth" variant="contained" size="medium" color="primary">Sign In</Button>
            )}
            <Button variant="contained" size="medium" color="secondary">Submit Startup</Button>
          </Toolbar>
        </AppBar>
    )
}

export default Navbar;