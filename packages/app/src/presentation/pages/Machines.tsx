import React from 'react';
import {useHistory} from 'react-router-dom';
export const Machines = () => {
  const history = useHistory();
  const handleClick = () => history.push('/products');
  return (
    <div>
      <h3>MACHINES</h3>
      <button onClick={handleClick}>Go To products</button>
    </div>
  );
};
