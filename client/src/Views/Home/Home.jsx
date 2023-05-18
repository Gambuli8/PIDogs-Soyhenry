import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import Cards from '../../Components/Cards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllDogs } from '../../Redux/Actions/Actions';

function Home() {
  const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);

    useEffect(() => {
      dispatch(GetAllDogs());
    },[]);

  return (
    <div className={style.container}>
      <Cards allDogs={allDogs} />
    </div>
  )
}

export default Home;