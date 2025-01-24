import React from 'react';
import './Row.css';

const Row = ({ title, movies, isLargeRow = false }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={movie.poster}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
