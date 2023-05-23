    import React from 'react';
    import style from './Filters.module.css';
    import { useSelector, useDispatch } from 'react-redux';
    import { GetFilters, GetFilterByWeight, GetFilterCreatedDog, GetFilterByTemperament } from '../../Redux/Actions/Actions';

export default function Filters() {
    const allTemperaments = useSelector((state) => state.allTemperaments);
    const dispatch = useDispatch();

    const handlerFilter = (e) => {
        dispatch(GetFilters(e.target.value));
    };

    const handlerFilterPeso = (e) => {
        dispatch(GetFilterByWeight(e.target.value));
    };

    const handlersFilterCreated = (e) => {
        dispatch(GetFilterCreatedDog(e.target.value));
    };

    const handlerFilterTemperament = (e) => {
        dispatch(GetFilterByTemperament(e.target.value));
    };


  return (
    <div className={style.container}>
        <select onChange={e => handlerFilter(e)} name="ordenamiento" id="Order">
            <option disabled selected defaultChecked>Alfabeticamente</option>
            <option key={1} value="A-Z">A-Z</option>
            <option key={2} value="Z-A">Z-A</option>
        </select>
        <select onChange={e => handlerFilterPeso(e)} name="ordenamiento_peso" id="peso">
            <option disabled selected defaultChecked>Order by weight</option>
            <option key={1} value="max">Maximo</option>
            <option key={2} value="min">Minimo</option>
        </select>
        <select onChange={e => handlersFilterCreated(e)} name="ordenamiento_dogs" id="Created">
            <option disabled selected defaultChecked>Order by create</option>
            <option key={1} value="all">Todos</option>
            <option key={2} value="created">Creados</option>
            <option key={3} value="api">Existentes</option>
        </select>
        <select onChange={e => handlerFilterTemperament(e)} name="temperamentos" id="Temperaments">
            <option disabled selected defaultChecked >Temperaments</option>
            <option key={1} value='All'>All</option>
                 {allTemperaments.map((t) => (
                     <option key={t.id} value={t.name}>{t.name}</option>
                     ))}
        </select>
    </div>
  )
};