import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const { data } = await fetchJobs();
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
