import React, { useEffect, useState } from 'react';
import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail(props) {

  const allDogs = useSelector((state) => state.allDogs);
  const [dog, setDog] = useState({});
  const {name} = useParams();

  useEffect(() => {
    setDog(allDogs.find((dog) => dog.name === name));
  }, []);


  
  return (
    <div className={style.container}>
      <div className={style.Card}>
        <div className={style.container_info}>
          <h1 className={style.title}>{dog.name}</h1>
          <h3 className={style.info}>Altura: {dog.height?.imperial} cm</h3>
          <h3 className={style.info}>Peso: {dog.weight?.imperial} kg</h3>
          <h3 className={style.info}>Años de vida: {dog.life_span}</h3>
          <h3 className={style.info}>Temperamentos: {dog.temperaments}</h3>
        </div>
        <div className={style.container_image}>
          <img className={style.image} src={dog.image} alt='imagen no disponible' />
        </div>
      </div>
    </div>
  )
}

export default Detail;