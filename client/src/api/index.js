import axios from 'axios';

const API = axios.create('http://localhost:5000');

export const fetchStartups = () => API.get('/startups');
export const createStartup = (newStartup) => API.post('/startups', newStartup);
export const likeStartup = (id) => API.patch(`/startups/${id}/likeStartup`);
export const updateStartup = (id, updatedStartup) => API.patch(`/startups/${id}`, updatedStartup);
export const deleteStartup = (id) => API.delete(`/startups/${id}`);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);