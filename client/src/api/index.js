import axios from 'axios';

const API = axios.create('http://localhost:5000');

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchStartups = () => API.get('/startups');
export const fetchStartupsBySearch = (searchQuery) => API.get(`/startups/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createStartup = (newStartup) => API.post('/startups', newStartup);
export const likeStartup = (id) => API.patch(`/startups/${id}/likeStartup`);
export const updateStartup = (id, updatedStartup) => API.patch(`/startups/${id}`, updatedStartup);
export const deleteStartup = (id) => API.delete(`/startups/${id}`);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);