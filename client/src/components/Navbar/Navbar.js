import React, { useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes'
import {AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import logo from '../../images/logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT});
        navigate('/');

        setUser(null);
    }
    
    useEffect(() => {
      const token = user?.token;

      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" component={Link} to="/" className={classes.heading}>
              <img className={classes.image} src={logo} alt="logo" align="center" height="8%" width="8%" />Launch Next
            </Typography>
            {user? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                <Button variant="contained" size="medium" color="secondary" onClick={logout}>Logout</Button>
              </div>
            ):(
              <Button component={Link} to="/auth" variant="contained" size="medium" color="primary">Sign In</Button>
            )}
            {/* <Button variant="contained" size="medium" color="secondary">Submit Startup</Button> */}
          </Toolbar>
        </AppBar>
    )
}

export default Navbar;