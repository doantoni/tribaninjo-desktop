import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'renderer/Components/Title/Title';
import icon from '../../../assets/bananas.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="buttons">
        <img width="200" alt="icon" src={icon} />
      </div>
      <Title title="Tribaninjo" />
      <div className="buttons">
        <button onClick={() => navigate('/filip')} type="button">
          <span role="img" aria-label="filip">
            🐴
          </span>
          Filip
        </button>

        <button onClick={() => navigate('/patricija')} type="button">
          <span role="img" aria-label="folded hands">
            💍🙅🏻‍♀️
          </span>
          Patricija
        </button>
      </div>
    </div>
  );
};

export default Home;
