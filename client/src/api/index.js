import axios from 'axios';

const url = 'http://localhost:5000/startups';

export const fetchStartups = () => axios.get(url);
export const createStartup = (newStartup) => axios.post(url, newStartup);
export const likeStartup = (id) => axios.patch(`${url}/${id}/likeStartup`);
export const updateStartup = (id, updatedStartup) => axios.patch(`${url}/${id}`, updatedStartup);
export const deleteStartup = (id) => axios.delete(`${url}/${id}`);
