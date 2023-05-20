import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({name, image, temperaments, weight, height, life_span, id}) {
  return (
    <div className={style.card_container}>
      <div className={style.card_detail}>
        <img src={image} alt={name} className={style.img} />
        <h3 className={style.info}>{name}</h3>
      </div>
      <Link to={`/detalle/${name}`}> <button className={style.button}>Mas info</button></Link>
    </div>
  )
}

export default Card;