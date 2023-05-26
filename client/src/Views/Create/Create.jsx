import React, {useState} from 'react';
import style from './Create.module.css';
import { GetNewDogs } from '../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Create() {

  //! HOOKS
  const dispatch = useDispatch();
  
  //! ESTADOS
  const [state, setState] = useState({
    name: '',
    weight_min: '',
    weight_max: '',
    height_min: '',
    height_max: '',
    life_span: '',
    image: '',
    temperaments: '',
  });
  
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
    name: 'Raza requerida ',
    weight_min: 'Peso minimo requerida ',
    weight_max: 'Peso maximo requerida',
    height_min: 'Altura minima requerida ',
    height_max: 'Altura maxima requerida',
    life_span: 'Años de vida requerida ',
    image: ' url de la Imagen requerida ',
    temperaments: 'Temperamentos requerida ',
  });

  //! VALIDACIONES
  const validate = (input, name) => {
    if(name === 'name') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Raza requerida',
        });
      };
      return;
    };
    if(name === 'weight_min') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Peso minimo requerido',
        });
      };
      return;
    };

    if(name === 'weight_max') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Peso maximo requerido',
        });
      };
      return;
    };

    if(name === 'height_min') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Altura minima requerida',
        });
      };
      return;
    };

    if(name === 'height_max') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Altura maxima requerida',
        });
      };
      return;
    };

    if(name === 'life_span') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Años de vida requeridos',
        });
      };
      return;
    };

    if(name === 'image') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'url de la Imagen requerida',
        });
      };
      return;
    };

    if(name === 'temperaments') {
      if (input.name !== '') {
        setErrors({
        ...Errors,
          [name]: '',
        });
      } else {
        setErrors({
        ...Errors,
          [name]: 'Temperamentos requeridos',
        });
      };
      return;
    }
    
  };
  
  return (
    <div className={style.container}>
    <Link to='/home'><button type="submit" className={style.button}>
          <span className={style.span}></span>
          <span className={style.span}></span>
          <span className={style.span}></span>
          <span className={style.span}></span>
          <span className={style.span}></span>
          <span className={style.text}>Back</span>
          </button></Link>
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