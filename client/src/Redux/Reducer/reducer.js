import { GET_ALL_DOGS,
        GET_ALL_TEMPERAMENTS,
        GET_NEW_DOGS,
        GET_DOGS_BY_NAME,
        GET_FILTERS,
        GET_FILTER_BY_WEIGHT,
        GET_FILTER_CREATED_DOG,
        GET_FILTER_BY_TEMPERAMENT } 
from "../Actions/Actions";


let inicialState = {
    allDogs: [],
    allTemperaments: [],
    newDogs: [],
    dogsFilter: [],
    filtered: false
};

// dogsFilter es una copia de allDogs, que se va a modificar con los filtros
// filtered es un booleano que indica si se aplicaron filtros o no

function rootReducer (state = inicialState, action){
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogsFilter: action.payload
            }
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }
        case GET_NEW_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_DOGS_BY_NAME: 
            return {
                ...state,
                dogsFilter: action.payload,
                filtered: true
            }
        case GET_FILTERS:
            const filterDogs = action.payload === "A-Z" ? state.allDogs.sort((a,b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
              })
            : state.allDogs.sort((a,b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
              });
            return {
              ...state,
              dogsFilter: filterDogs,
          };
        case GET_FILTER_BY_WEIGHT:
            const allDogWeight = state.allDogs.filter(d => d.weight_min)
            const filterWeight = action.payload === 'min' ? allDogWeight.sort((a, b) => {
              return a.weight_min - b.weight_min
            })  :
            allDogWeight.sort((a,b) =>{
              return a.weight_min - b.weight_min
          }).reverse()
            
            return {
              ...state,
              dogsFilter: filterWeight,
          }; 
          case GET_FILTER_CREATED_DOG:
            const allDogs = state.allDogs;
        const filterCreated = action.payload === 'created' ? allDogs.filter(d => d.createdInDb) : allDogs.filter(d => !d.createdInDb)
        return {
          ...state,
          dogsFilter: action.payload === 'all' ? state.allDogs : filterCreated
        };
        case GET_FILTER_BY_TEMPERAMENT:
            const allDogs2 = state.allDogs
        const filteredTemp = action.payload === 'All'?  allDogs2 : allDogs2.filter(e => {
            return e.temperament?.includes(action.payload)
        })
        return {
          ...state,
          dogs: filteredTemp,
      };
                        
        default:
            return {
                    ...state
            } 
        };
                        
    };
                    
export default rootReducer;