import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchJobs = () => API.get('/jobs');
export const searchJobs = (query) => API.get(`/jobs/search?query=${query}`);
export const createJob = (jobData) => API.post('/jobs', jobData);
export const updateJob = (id, jobData) => API.put(`/jobs/${id}`, jobData);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
