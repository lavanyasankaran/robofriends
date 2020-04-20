import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
  return (
    <div>
      {games.map(ro => (
        <Card  title={ro.title} url={ro.url} platform={ro.platform} score={ro.score} genre={ro.genre} editors_choice={ro.editors_choice} release_year={ro.release_year}/>
      ))}
    </div>
  );
}

export default CardList;
