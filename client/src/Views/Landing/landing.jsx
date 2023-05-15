import React from 'react';
import style from './landing.module.css';
import { Link } from 'react-router-dom';

function landing() {
  return (
    <div className={style.landing}>
      <div className={style.container}>
      <button className={style.button}> Iniciar
        <div className={style.icon}>
        <Link to="/home" className={style.link}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
        </Link>
        </div>
      </button>
      </div>
    </div>
  )
}

export default landing;