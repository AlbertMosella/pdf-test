import {useNavigate} from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/machines');
  return (
    <div>
      <h3>PRODUCTS</h3>
      <button onClick={handleClick}>Go To machines</button>
    </div>
  );
};
