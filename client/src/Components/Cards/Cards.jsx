import React from 'react';
import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards() {
  return (
    <div className={style.cards_container}>
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'rufina'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'viki'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
      <Card name={'gero'} email={'gero@gmail.com'} phone={'11223344'} />
    </div>
  )
}

export default Cards;