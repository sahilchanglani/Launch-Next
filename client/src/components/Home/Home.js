import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Paper } from '@material-ui/core';

import { getStartups } from '../../actions/startups';
import Pagination from '../Pagination';
import Startups from '../Startups/startups';
import Form from '../Form/form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    // const classes = useStyles();

    useEffect(() => {
        dispatch(getStartups());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                <Startups setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <Paper elevation={6}>
                    <Pagination/>                
                </Paper>
                </Grid>
            </Grid>
            </Container>
        </Grow>
    )
}

export default Home;