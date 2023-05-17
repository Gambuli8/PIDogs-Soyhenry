import React from 'react';
import style from './Detail.module.css';

function Detail() {
  return (
    <div className={style.container}>
      <div className={style.Card}>
        <div className={style.container_info}>
        <h2 className={style.info}>holo</h2>
        <h2 className={style.info}>holo</h2>
        <h2 className={style.info}>holo</h2>
        </div>
        <div className={style.container_image}>
          <img src="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Detail