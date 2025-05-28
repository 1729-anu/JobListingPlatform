import React, { useState } from 'react';
import { createJob } from '../api';

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(formData);
    setFormData({ title: '', company: '', location: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a Job</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" required />
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description" required />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobForm;
