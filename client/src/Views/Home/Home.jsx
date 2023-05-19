import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import Cards from '../../Components/Cards/Cards';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllDogs } from '../../Redux/Actions/Actions';
import Filters from '../../Components/Filters/Filters';

function Home() {
  const allDogs = useSelector((state) => state.allDogs);
  const dogsFilter = useSelector((state) => state.dogsFilter);

  const dispatch = useDispatch();
  
  const [ dogs, setDogs ] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [dogsPerPage, setDogsPerPage] = useState(8);
  // const maxPage = Math.ceil(allDogs.length / dogsPerPage);
  // console.log(maxPage);

    useEffect(() => {
      dispatch(GetAllDogs());
    },[]);

    useEffect(() => {
      setDogs(allDogs);
    },[allDogs]);


  return (
    <div>
    {dogs.length ? (
      <div className={style.container}>
        {/* <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage} /> */}
      <Filters />
      {Filters?<Cards allDogs={dogsFilter}/>:<Cards allDogs={dogs} />}
      </div>
      ) : (
        <h3 className={style.loading}>Loading...</h3>
      )}
        </div>
  )
}

export default Home;