import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';
import Paginado from '../Paginado/paginado';
import { useState } from 'react';

function Cards({allDogs}) {


  //! PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.cards_container}>
      <div className={style.Paginado}>
      <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginate={paginate}/>
      </div>
      <div className={style.Cards}>
      {currentDogs.map((dog) => (
          <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          life_span={dog.life_span}
          weight_min={dog?.weight_min}
          weight_max={dog?.weight_max}
          height_min={dog?.height_min}
          height_max={dog?.height_max}
          image={dog.image}
          temperaments={dog.temperaments}
          />
          ))}
          </div>
    </div>
  )
}

export default Cards;