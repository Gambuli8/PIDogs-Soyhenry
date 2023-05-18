import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALLDOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALLTEMPERAMENTS';
export const GET_NEW_DOGS = 'GET_NEWDOGS';


export const GetAllDogs = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/dogs/');
            return dispatch({ type: GET_ALL_DOGS, payload: response.data });
        } catch (error) {
            alert(error.response.data);
        } 
    };
};

export const GetAllTemperaments = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/temperament/');
            return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: response.data });
        } catch (error) {
            alert(error.response.data);
        }
    };
};

export const GetNewDogs = (info) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/`, info);
            dispatch({ type: GET_NEW_DOGS, payload: response.data });
            alert('Dog created successfully!');
        } catch (error) {
            alert(error.response.data);
        }
    };
};