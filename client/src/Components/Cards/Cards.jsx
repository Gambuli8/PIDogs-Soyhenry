import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({allDogs}) {
  return (
    <div className={style.cards_container}>
      {allDogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          life_span={dog.life_span}
          weight={dog.weight.imperial}
          height={dog.height.imperial}
          image={dog.image}
          temperaments={dog.temperaments}
        />
        ))};
    </div>
  )
}

export default Cards;