import React from 'react';
import JobCreateForm from '../components/JobCreateForm';
import '../styles/JobCreate.css';

const CreateJob = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <JobCreateForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default CreateJob;