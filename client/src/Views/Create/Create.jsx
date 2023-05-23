import React from 'react';
import style from './Create.module.css';
import { GetNewDogs } from '../../Redux/Actions/Actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Create() {

  //! ESTADOS
  const [state, setState] = useState({
    name: '',
    weight_min: '',
    weight_max: '',
    height_min: '',
    height_max: '',
    life_span: '',
    image: '',
    temperaments: [],
  });

  //! HOOKS
  const dispatch = useDispatch();
  
  //! FUNCIONES
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

  // esta funcion se encarga de enviar los datos al back
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(GetNewDogs(state));
  };

  // esta funcion se encarga de validar los datos que se ingresan en los inputs
  const [Errors, setErrors] = useState({
    name: 'Raza ',
    weight_min: 'Peso minimo ',
    weight_max: 'Peso maximo',
    height_min: 'Altura minima ',
    height_max: 'Altura maxima',
    life_span: 'Años de vida ',
    image: ' url de la Imagen ',
    temperaments: 'Temperamentos ',
  });

  //! VALIDACIONES
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
    if(name === 'weight_min') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Peso minimo requerido',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'weight_max') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Peso maximo requerido',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'height_min') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Altura minima requerida',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: '',
        });
      };
      return;
    };

    if(name === 'height_max') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'Altura maxima requerida',
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

    if(name === 'image') {
      if (input === '') {
        setErrors({
        ...Errors,
          [name]: 'url de la Imagen requerida',
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
  
  return (
    <div className={style.container}>
      <div className={style.Card}>
      <h1 className={style.title}>Crear Perro</h1>
        <form className={style.form} onSubmit={handlerSubmit}>
          <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.name} name='name' onChange={handlerChange} />
            <label>Raza</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.weight_min} name='weight_min' onChange={handlerChange} />
            <label>Peso minimo</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.weight_max} name='weight_max' onChange={handlerChange} />
            <label>Peso maximo</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.height_min} name='height_min' onChange={handlerChange} />
            <label>Altura minima</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.height_max} name='height_max' onChange={handlerChange} />
            <label>Altura maxima</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.life_span} name='life_span' onChange={handlerChange} />
            <label>Años de vida</label>
            </div>

            <div className={style.form_details}>
            <input type="text" className={style.input} placeholder={Errors.temperaments} name='temperaments' onChange={handlerChange} />
            <label>Temperamentos</label>
            </div>
            <div className={style.form_details}>
            <input type="url" className={style.input} placeholder={Errors.image} name='image' onChange={handlerChange} />
            <label>Url de la imagen</label>
            </div>
            <button type='submit' className={style.btn}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Crear
              </button>
        </form>
      </div>
    </div>
  )
}

export default Create;