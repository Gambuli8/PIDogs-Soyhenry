import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_NEW_DOGS } from "../Actions/Actions";


let inicialState = {
    allDogs: [],
    allTemperaments: [],
    newDogs: [],
}

function rootReducer (state = inicialState, action){
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }
        case GET_NEW_DOGS:
            return {
                ...state,
                newDogs: action.payload
            }
        default:
            return {
                ...state
            }
        };
    
};

export default rootReducer;