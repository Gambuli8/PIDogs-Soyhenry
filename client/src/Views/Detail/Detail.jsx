import React, { useEffect, useState } from 'react';
import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Detail() {

  const allDogs = useSelector((state) => state.allDogs);

  const [dog, setDog] = useState({});
  const {name} = useParams();

  useEffect(() => {
    setDog(allDogs.find((dog) => dog.name === name));
  }, []);

  return (
    <div>
      {dog?.name ? (
      <>
        <Link to='/home'><button type="submit" className={style.button}>
          <span className={style.circle1}></span>
          <span className={style.circle2}></span>
          <span className={style.circle3}></span>
          <span className={style.circle4}></span>
          <span className={style.circle5}></span>
          <span className={style.text}>Back</span>
          </button></Link>
        <div className={style.container}>
      <div className={style.Card}>
        <div className={style.container_info}>
          <h1 className={style.title}>{dog?.name}</h1>
          <h3 className={style.info}>Altura: {dog.height.metric} cm</h3>
          <h3 className={style.info}>Peso: {dog.weight.metric} kg</h3>
          <h3 className={style.info}>Años de vida: {dog?.life_span}</h3>
          <h3 className={style.info}>Temperamentos: {dog?.temperament?.join(', ')}</h3>
        </div>
        <div className={style.container_image}>
          <img className={style.image} src={dog?.image} alt='imagen no disponible' />
        </div>
      </div>
    </div>
        </>
       ) : (
        <h3 className={style.loading}>Loading</h3>
      )}
    </div>
  )
}

export default Detail;