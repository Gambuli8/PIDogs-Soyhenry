import React from 'react';
import style from './landing.module.css';

function landing() {
  return (
    <div className={style.landing}>
      <div className={style.container}>
      <h1>landing</h1>
      <button className={style.button}>Iniciar</button>
      </div>
    </div>
  )
}

export default landing;