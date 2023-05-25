    import React from 'react';
    import style from './Filters.module.css';
    import { useSelector, useDispatch } from 'react-redux';
    import { GetFilters, GetFilterByWeight, GetFilterCreatedDog, GetFilterByTemperament } from '../../Redux/Actions/Actions';

export default function Filters() { 
    const allDogs = useSelector((state) => state.allDogs);
    const allDogs2 = allDogs.map((d) => d.temperament);
    const allDogs3 = new Set(allDogs2.flat());
    const allDogs4 = [...allDogs3];
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
            <option defaultChecked value='All' >Temperaments</option>
            {allDogs4.map((t) => (
                <option className={style.opciones} key={`${t}`} value={t}>{t}</option>
            ))}
        </select>
    </div>
  )
};