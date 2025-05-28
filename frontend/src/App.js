import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <div>
      <h1>Job Listing Platform</h1>
      <JobForm />
      <SearchBar setJobs={setJobs} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
