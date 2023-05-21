import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_NEW_DOGS, GET_FILTERS } from "../Actions/Actions";


let inicialState = {
    allDogs: [],
    allTemperaments: [],
    newDogs: [],
    dogsFilter: [],
    filtered: false
}

//dogsFilter lo que hace es crear una copia de allDogs pero ordenada.
//filtered es un booleano que se usa para saber si se aplicó un filtro o no.

function rootReducer (state = inicialState, action){
    switch(action.type){
        default:
            return {
                ...state
            } 
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
        case GET_FILTERS:
            if(action.payload === 'asc'){
                let asc = [...state.allDogs].sort((prev, next) => {
                    if(prev.name > next.name) return 1;
                    if(prev.name < next.name) return -1;
                    return 0;
                });
                return {
                    ...state,
                    dogsFilter: asc,
                    filtered: true
                }
            } else if(action.payload === 'desc'){
                return {
                    ...state,
                    dogsFilter: [...state.allDogs].sort((prev, next) => {
                        if(prev.name > next.name) return -1;
                        if(prev.name < next.name) return 1;
                        return 0;
                    }),
                    filtered: true
                }
            }
        };
    
};

export default rootReducer;