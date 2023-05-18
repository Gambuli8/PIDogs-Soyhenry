import React from 'react';
import style from './Create.module.css';
import { PostDogs } from '../../Redux/Actions/Actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Create() {

  const [state, setState] = useState({
    name: '',
    weight: '',
    height: '',
    life_span: '',
    image: '',
    temperaments: [],
  });

  const dispatch = useDispatch();
  

  // esta funcion se encarga de capturar los datos que se ingresan en los inputs
  const handlerChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    validate({
      ...state,
      [e.target.name]: e.target.value,
    }, e.target.name);
  };

  // esta funcion se encarga de validar los datos que se ingresan en los inputs
  const [Errors, setErrors] = useState({
    name: 'Raza ',
    weight: 'Peso ',
    height: 'Altura ',
    life_span: 'Años de vida ',
    image: ' url de la Imagen ',
    temperaments: 'Temperamentos ',
  });


  const validate = (input, name) => {
    if(name === 'name') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Raza requerida',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };
    if(name === 'weight') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Peso requerido',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'height') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Altura requerida',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'life_span') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Años de vida requeridos',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'temperaments') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Temperamentos requeridos',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    }

  };

  // esta funcion se encarga de enviar los datos al back
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(PostDogs(state));
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
    <form className={style.form} onSubmit={handlerSubmit}>
      {console.log(Errors)}
        <div className={style.form_front}>
            <div className={style.form_details}>Crear nuevo Perro</div>
            <input type="text" className={style.input} name='name' placeholder={Errors.name} onChange={handlerChange} />
            <input type="text" className={style.input} name='weight' placeholder={Errors.weight} onChange={handlerChange} />
            <input type="text" className={style.input} name='life_span' placeholder={Errors.life_span} onChange={handlerChange} />
            <input type="text" className={style.input} name='height' placeholder={Errors.height} onChange={handlerChange} />
            <input type="text" className={style.input} name='temperaments' placeholder={Errors.temperaments} onChange={handlerChange} />
            <input type="url" className={style.input} name='imagen' placeholder={Errors.image} onChange={handlerChange} />
            <button type='submit' className={style.btn}>Crear</button>
        </div>
    </form>
      </div>
    </div>
  )
}

export default Create;