    import React, { useEffect, useState } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import style from './Filters.module.css';
    import Paginate from '../Paginado/paginado';
    import { GetAllDogs, GetAllTemperaments, GetDogsByName, GetFilters, GetFilterByTemperament,  } from '../../Redux/Actions/Actions';


export default function Filters() {

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const allTemperaments = useSelector((state) => state.allTemperaments)

    const [currentPage, setCurrentPage] = useState(1)
    // const [dogsPerPage, setDogPerPage] = useState(8)
    // const [orden, setOrden] = useState('')
    // const indexLastDog = currentPage * dogsPerPage
    // const indexFirstDog = indexLastDog - dogsPerPage
    // const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)
    
    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    
    // function handlerFilterName (e) {
        //     dispatch(GetDogsByName(e.target.value))
        //     setCurrentPage(1)
        //     setOrden(`Ordenado ${e.target.value}`)
        // }
        // <Paginate dogsPerPage={dogsPerPage} allDogs={allDogs} paginado={paginado}/>


        function handlerFilterTemperament (e) {
            e.preventDefault();
            dispatch(GetFilterByTemperament(e.target.value))
            setCurrentPage(1)
        }
        

    const filter = (event) => {
        dispatch(GetFilters(event.target.value));
    };
  return (
    <div className={style.container}>
        <select onChange={filter} name="ordenamiento" id="Order">
            <option defaultChecked value="0">Ordenar</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
        </select>
         <select onChange={e => handlerFilterTemperament(e)}>
            <option disabled selected defaultValue>Temperaments</option>
            <option key={1+'e'} value='All'>All</option>
            {
                allTemperaments.map(temp => (
                    <option value={temp.name} key={temp.id}>{temp.name}</option>
                ))
            }
            </select>
    </div>
  )
};