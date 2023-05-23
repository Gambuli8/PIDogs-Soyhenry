import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import Cards from '../../Components/Cards/Cards';
import NavBar from '../../Components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllDogs } from '../../Redux/Actions/Actions';
import Filters from '../../Components/Filters/Filters';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
 const dogsFilter = useSelector((state) => state.dogsFilter);
  
  // const [ dogs, setDogs ] = useState(allDogs);

    useEffect(() => {
      dispatch(GetAllDogs());
    },[dispatch]);

    // useEffect(() => {
    //   setDogs(allDogs);
    // },[allDogs]);

    
  return (
    <div>
    {allDogs.length ? (
      <div className={style.container}>
      <NavBar />
      <Filters  />
      {Filters ? <Cards allDogs={dogsFilter}/> : <Cards allDogs={allDogs}/>}
      </div>
      ) : (
        <h3 className={style.loading}>Loading...</h3>
      )}
        </div>
  )
}

export default Home;