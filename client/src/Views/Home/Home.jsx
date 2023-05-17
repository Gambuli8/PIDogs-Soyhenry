import React from 'react';
import style from './home.module.css';
import Cards from '../../Components/Cards/Cards';

function Home() {
  return (
    <div className={style.container}>
      <Cards />
    </div>
  )
}

export default Home;