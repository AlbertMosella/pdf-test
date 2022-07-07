import React from 'react';
import {useNavigate} from 'react-router-dom';
export const Machines = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/products');
  return (
    <div>
      <h3>MACHINES</h3>
      <button onClick={handleClick}>Go To products</button>
    </div>
  );
};
