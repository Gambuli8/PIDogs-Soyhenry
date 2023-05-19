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
        <input onChange={handlerChange} type="text" placeholder="Search..." value={name} />
        <button onClick={handlerSubmit} type="submit">Search</button>
    </div>
  )
}

export default Searchbar;