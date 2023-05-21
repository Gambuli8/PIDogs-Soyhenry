import React from 'react';
import style from './Searchbar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetDogsByName } from '../../Redux/Actions/Actions';

function Searchbar({paginado}) {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handlerinputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlerChange = (e) => {
    handlerinputChange(e);
  };

  const handlerButtonSubmit = (e) => {
    e.preventDefault();
    if(name){
      dispatch(GetDogsByName(name));
      setName("");
      navigate("/home");
      paginado(1);
    };
  };

  const handlerSubmit = (e) => {
    handlerButtonSubmit(e);
  };

  return (
    <div className={style.container}>
    <div className={style.input_group}>
        <input onChange={handlerChange} type="text" name='text' className={style.input} autoComplete='off' value={name} />
        <label className={style.user_label}>Buscar</label>
    </div>
        <button onClick={handlerSubmit} type="submit" className={style.button}>
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