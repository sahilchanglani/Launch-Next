import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getStartups, getStartupsBySearch } from '../../actions/startups';
import Pagination from '../Pagination';
import Startups from '../Startups/startups';
import Form from '../Form/Form';

import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    // const classes = useStyles();

    useEffect(() => {
        dispatch(getStartups());
    }, [currentId, dispatch]);

    const searchStartup = () => {
        if(search.trim() || tags) {
            dispatch(getStartupsBySearch({search, tags: tags.join(',')}));
            navigate(`/startups/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchStartup();
        }
    };

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9}>
                <Startups setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField 
                            name="search"
                            variant="outlined" 
                            label="Search Startups"
                            onKeyPress={handleKeyPress}
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <ChipInput 
                            style={{ margin: '10px 0' }}
                            value={tags}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label="Search Tags"
                            variant="outlined"
                        />
                        <Button onClick={searchStartup} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                    </AppBar>
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