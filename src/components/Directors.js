import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div>
          {director.name}
          {director.movies.map(movie =>
            <ul>
              <li key={director}>{movie}</li>
            </ul>  
           )}
        </div>  
      )}
    </div>
  );
}

export default Directors
