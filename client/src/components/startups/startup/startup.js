import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeStartup, deleteStartup } from '../../../actions/startups';
import useStyles from './styles';

const Startup = ({ startup, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={startup.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={startup.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{startup.headline}</Typography>
        <Typography variant="body2">{moment(startup.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(startup._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{startup.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"><a href={startup.website}>{startup.name}</a></Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{startup.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likeStartup(startup._id))}><ThumbUpAltIcon fontSize="small" /> Like {startup.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteStartup(startup._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Startup;
