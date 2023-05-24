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
    <div className={style.container_filtros}>
        <select className={style.select} onChange={e => handlerFilter(e)} name="ordenamiento">
            <option className={style.opciones} defaultValue='0' defaultChecked >Alfabeticamente</option>
            <option className={style.opciones} key={1} value="A-Z">A-Z</option>
            <option className={style.opciones} key={2} value="Z-A">Z-A</option>
        </select>
        <select className={style.select} onChange={e => handlerFilterPeso(e)} name="ordenamiento_peso">
            <option className={style.opciones} defaultValue='0' defaultChecked >Order by weight</option>
            <option className={style.opciones} key={1} value="max">Maximo</option>
            <option className={style.opciones} key={2} value="min">Minimo</option>
        </select>
        <select className={style.select} onChange={e => handlersFilterCreated(e)} name="ordenamiento_dogs">
            <option className={style.opciones} defaultChecked defaultValue='0' >Order by create</option>
            <option className={style.opciones} key={1} value="all">Todos</option>
            <option className={style.opciones} key={2} value="created">Creados</option>
            <option className={style.opciones} key={3} value="api">Existentes</option>
        </select>
        <select className={style.select} onChange={e => handlerFilterTemperament(e)} name="temperamentos">
            <option defaultChecked defaultValue='0' >Temperaments</option>
            <option className={style.opciones} key={1} value='All'>All</option>
                 {allTemperaments.map((t) => (
                     <option className={style.opciones} key={t.id} value={t.name}>{t.name}</option>
                     ))}
        </select>
    </div>
  )
};