import React from 'react';
import JobCreateForm from '../components/JobCreateForm';
import '../styles/JobCreateForm.css';

const CreateJob = () => {
  return (
    <div className="container mt-4">
      <JobCreateForm />
    </div>
  );
};

export default CreateJob;