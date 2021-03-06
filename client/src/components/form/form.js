import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom'
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createStartup, updateStartup } from '../../actions/startups';

const Form = ({ currentId, setCurrentId }) => {
  const [startupData, setStartupData] = useState({ name: '', website: 'https://', headline: '', description: '', image: '', tags: '' });
  const startup = useSelector((state) => (currentId ? state.startups.startups.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (startup) setStartupData(startup);
    user = JSON.parse(localStorage.getItem('profile'));
  }, [startup, location]);

  const clear = () => {
    setCurrentId(0);
    setStartupData({ name: '', website: 'https://', headline: '', description : '', image : '', tags: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name === 'name' && startupData.description.split(' ').length<5){
      setStartupData({ ...startupData, [name]: value, description: `${value} is a `});
    }
    else{
      setStartupData({ ...startupData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createStartup({...startupData, user: user?.result?.name}));
      clear();
    } else {
      dispatch(updateStartup(currentId, {...startupData, user: user?.result?.name}));
      clear();
    }
  };

  return (
    !user?.result?.name ?
     (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to register a startup and like other Startups
        </Typography>
      </Paper>
    ) : (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${startup.name}"` : 'Submit your startup'}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={startupData.name} onChange={handleChange} />
        <TextField name="website" variant="outlined" label="Website" fullWidth value={startupData.website} onChange={handleChange} />
        <TextField name="headline" variant="outlined" label="Headline" fullWidth value={startupData.headline} onChange={handleChange} />
        <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} value={startupData.description} onChange={handleChange} />
        <TextField name="tags" variant="outlined" label="Tags (comma separated)" fullWidth value={startupData.tags} onChange={(e) => setStartupData({ ...startupData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setStartupData({ ...startupData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    )
  );
};

export default Form;
