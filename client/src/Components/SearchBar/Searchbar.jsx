import React, { useEffect } from 'react';
import style from './Searchbar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetDogsByName } from '../../Redux/Actions/Actions';

export let results = [];

function Searchbar({paginado}) {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const allDogs = useSelector((state) => state.allDogs);
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(GetDogsByName(name));
  // }, [dispatch, name]);

  const handlerinputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(GetDogsByName(name));
      setName("");
      navigate(`/home`);
    }
  };



  return (
    <div className={style.container}>
    <div className={style.input_group}>
        <input onChange={e => handlerinputChange(e)} type="text" name='text' className={style.input} autoComplete='off' value={name} />
        <label className={style.user_label}>Buscar</label>
    </div>
        <button type="submit" className={style.button} onClick={e => handlerSubmit(e)}>
          <span className={style.circle1}></span>
          <span className={style.circle2}></span>
          <span className={style.circle3}></span>
          <span className={style.circle4}></span>
          <span className={style.circle5}></span>
          <span className={style.text}>Buscar</span>
          </button>
    </div>
  )
}

export default Searchbar;