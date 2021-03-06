import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { likeStartup, deleteStartup } from '../../../actions/startups';
import useStyles from './styles';

const Startup = ({ startup, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();

  const Likes = () => {
    if (startup?.likes?.length > 0) {
      
      return startup.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{startup.likes.length > 2 ? `You and ${startup.likes.length - 1} others` : `${startup.likes.length} like${startup.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{startup.likes.length} {startup.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openStartup = () => navigate(`/startups/${startup._id}`);


  return (
    <Card className={classes.card} raised elevation={6}>
      
        <CardMedia className={classes.media} image={startup.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} onClick={openStartup} style={{cursor: "pointer"}} title={startup.title} />
        <div className={classes.overlay}>
          <Typography variant="h6" onClick={openStartup} style={{cursor: "pointer"}}>{startup.headline}</Typography>
          <Typography variant="body2">{moment(startup.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId===startup?.creator || user?.result?._id===startup?.creator) && (
          <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(startup._id)}>
              <MoreHorizIcon fontSize="default" />
              </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{startup.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} onClick={openStartup} style={{cursor: "pointer"}} gutterBottom variant="h5" component="h2">{startup.name}</Typography>
        <CardContent onClick={openStartup} style={{cursor: "pointer"}}>
          <Typography variant="body2" color="textSecondary" align="justify" component="p">{startup.description.split(' ').slice(0, 20).join(' ')}</Typography>
        </CardContent>
        
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeStartup(startup._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId===startup?.creator || user?.result?._id===startup?.creator) && (
          <Button size="small" color="primary" onClick={() => dispatch(deleteStartup(startup._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}
        
      </CardActions>
    </Card>
  );
};

export default Startup;
