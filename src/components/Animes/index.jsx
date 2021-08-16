import React from 'react';
import P from 'prop-types';
import './index.css';

export const Animes = ({ animes2 }) => {
  return (
    <div className="Animes">
      {animes2.map((anime) => (
        <img key={anime} src={anime[1]} alt="" />
      ))}
    </div>
  );
};

Animes.propTypes = {
  animes2: P.array.isRequired,
};

export default Animes;
