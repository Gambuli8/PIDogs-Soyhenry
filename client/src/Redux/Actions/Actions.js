import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const GET_NEW_DOGS = 'GET_NEW_DOGS';
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
//!FILTERS
export const GET_FILTERS = 'GET_FILTERS';
export const GET_FILTER_BY_WEIGHT = 'GET_FILTER_BY_WEIGHT';
export const GET_FILTER_CREATED_DOG = 'GET_FILTER_CREATED_DOG';
export const GET_FILTER_BY_TEMPERAMENT = 'GET_FILTER_BY_TEMPERAMENT';


export const GetAllDogs = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/`);
             return dispatch({ type: GET_ALL_DOGS, payload: response.data });
        } catch (error) {
            alert(error.response.data);
        }
    };
};

export const GetAllTemperaments = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/temperaments/`);
            return dispatch({ type: GET_ALL_TEMPERAMENTS, payload: response.data });
        } catch (error) {
            alert(error.response.data);
        }
    };
};

export const GetNewDogs = (info) => {
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/dogs/`, info);
            dispatch({ type: GET_NEW_DOGS, payload: response.data });
            alert('Dog created successfully!');
        } catch (error) {
            alert(error.response.data);
        }
    };
};

export const GetDogsByName = (name) => {
    try {
        return async function (dispatch) {
            const response = await axios.get(`http://localhost:3001/dogs/search?name=${name}`);
                dispatch({ type: GET_DOGS_BY_NAME, payload: response.data });
        };
    } catch (error) {
        alert(error.response.data);
    }
};


//!FILTERS

export const GetFilters = (info) => {
    return function (dispatch) {
        return dispatch({ type: GET_FILTERS, payload: info });
    }
};

export const GetFilterByWeight = (info) => {
    return function (dispatch) {
        return dispatch({ type: GET_FILTER_BY_WEIGHT, payload: info });
    }
}

export const GetFilterByTemperament = (info) => {
    return function (dispatch) {
        return dispatch({ type: GET_FILTER_BY_TEMPERAMENT, payload: info });
    }
};

export function GetFilterCreatedDog (info) {
    return function (dispatch) {
    return dispatch({ type: GET_FILTER_CREATED_DOG, payload: info})
    }
};
