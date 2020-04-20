import React from 'react';

const Card = ({ title, url,platform,score,genre,editors_choice,release_year }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      
      <div>
        <h2>{title}</h2>
        <p>URL:{url}</p>
        <p>PLATFORM:{platform}</p>
        <p>SCORE:{score}</p>
        <p>GENRE:{genre}</p>
        <p>EDITORS CHOICE:{editors_choice}</p>
        <p>RELEASE YEAR:{release_year}</p>
      </div>
    </div>
  );
}

export default Card;
