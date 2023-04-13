import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ data  }) => {
    console.log(data)
  return (
    <div style={{ width: '30px', height: '30px' }}>
      <CircularProgressbar text={`${data.completion_percentage}%`}  />
    </div>
  );
};

export default ProgressBar;
