import React, { useEffect } from 'react';
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

    useEffect(() => {
      dispatch(GetAllDogs());
    },[]);


    
  return (
    <div>
    {allDogs.length ? (
      <div className={style.container}>
      <NavBar />
      <Filters  />
      {Filters? <Cards allDogs={dogsFilter}/> : <Cards allDogs={allDogs}/>}
      </div>
      ) : (
          <h3 className={style.loading}>Loading...</h3>
      )}
        </div>
  )
}

export default Home;