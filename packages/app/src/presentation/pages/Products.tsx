import React from 'react';
import {useHistory} from 'react-router-dom';

export const Products = () => {
  const history = useHistory();
  const handleClick = () => history.push('/machines');
  return (
    <div>
      <h3>PRODUCTS</h3>
      <button onClick={handleClick}>Go To machines</button>
    </div>
  );
};
