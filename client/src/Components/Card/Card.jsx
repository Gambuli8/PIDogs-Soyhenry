import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({name, image, temperaments, weight, email, phone}) {
  return (
    <div className={style.card_container}>
      <div className={style.card_detail}>
        <p className={style.title}>{name}</p>
            <p className={style.info}>{email}</p>
            <p className={style.info}>{phone}</p>
      </div>
      <Link to={`/detalle/${name}`}> <button className={style.button}>Mas info</button></Link>
    </div>
  )
}

export default Card;