import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';
import Paginado from '../Paginado/paginado';
import { useState } from 'react';

function Cards({allDogs}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const maxPage =  Math.ceil(allDogs.length / dogsPerPage);

  return (
    <div className={style.cards_container}>
      <div className={style.Paginado}>
      <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage} />
      </div>
      <div className={style.Cards}>
      {allDogs.slice(
        (currentPage - 1) * dogsPerPage,
        (currentPage - 1) * dogsPerPage + dogsPerPage
        ).map((dog) => (
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
    </div>
  )
}

export default Cards;