import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import { useParams, useNavigate } from 'react-router-dom';
import { getStartup, getStartupsBySearch } from '../../actions/startups';

import useStyles from './styles';

const Startup = () => {
    const dispatch = useDispatch();
    const { startup, startups, isLoading } = useSelector((state) => state.startups);
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getStartup(id));
    }, [id]);
    
    useEffect(() => {
        if (startup) {
            dispatch(getStartupsBySearch({ search: 'none', tags: startup?.tags.join(',') }));
        }
    }, [startup]);
    
    if (!startup) return null;
    
    // const openStartup = () => navigate(`/startups/${startup._id}`);
    
    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        );
    }

    const recommendedStartups = startups.filter(({_id}) => _id !== startup.id);

    const openStartup = (_id) => navigate(`/startups/${_id}`);

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
          <div className={classes.card}>
            <div className={classes.section}>
              <Typography variant="h3" component="h2">{startup.name}</Typography>
              <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{startup.tags.map((tag) => `#${tag} `)}</Typography>
              <Typography gutterBottom variant="h5" color="textSecondary" component="h2">{startup.heading}</Typography>
              <Typography gutterBottom variant="body1" component="p">{startup.description}</Typography>
              <Typography gutterBottom variant="body1" component="p">Website: <a href="{startup.website}">{startup.website}</a></Typography>
              <Typography variant="h6">Founder: {startup.user}</Typography>
              <Typography variant="body1">{moment(startup.createdAt).fromNow()}</Typography>
              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
              <Divider style={{ margin: '20px 0' }} />
              <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
              <Divider style={{ margin: '20px 0' }} />
            </div>
            <div className={classes.imageSection}>
              <img className={classes.media} src={startup.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={startup.name} />
            </div>
          </div>
          <br/>
          {recommendedStartups.length && (

            <div className={classes.section}>
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedStartups}>
                {recommendedStartups.map(({ name, headline, description, likes, image, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openStartup(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{name}</Typography>
                    <Typography gutterBottom variant="subtitle2">{headline}</Typography>
                    <Typography gutterBottom variant="subtitle2">{description}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={image} width="200px" />
                </div>
            ))}
            </div>
        </div>
        )}
        
        </Paper>
    );

};

export default Startup;