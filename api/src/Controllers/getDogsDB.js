const { Dog, Temperament } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const getDogsDB = async (name) => {
    if (name) {

        const dogDB = await Dog.findOne({
            where: {
                name: name
            },
        });
        
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?name=${name}`);
        const dogApiFilter = dogApi.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name.toLowerCase().includes(name.toLowerCase()) ? dog.name : null,
                weight_min: dog.weight_min,
                weight_max: dog.weight_max,
                height: `${dog.height_min} - ${dog.height_max}`,
                life_span: dog.life_span,
                temperament: dog.temperament  ? dog.temperament.split(', ') : [],
                image: dog.image,
            };
        });
        const response = [...dogDB, ...dogApiFilter];
        
        return response;
    }
};

const getAllDogs = async () => {
    const allDog = await Dog.findAll();
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const dogApiFilter = dogApi.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                weight_min: parseInt(dog.weight.imperial.split(' - ')[0]),
                weight_max: parseInt(dog.weight.imperial.split(' - ')[1]),
                height_min: parseInt(dog.height.imperial.split(' - ')[0]),
                height_max: parseInt(dog.height.imperial.split(' - ')[1]),
                life_span: dog.life_span,
                createdInDb: dog.createdInDb,
                temperament: dog.temperament  ? dog.temperament.split(', ') : [],
                image: dog.image.url,
            };
    });
    const response = [...allDog, ...dogApiFilter];
    return response;
};

const getDogsDBId = async (id) => {
    if(isNaN(id)){
        const dogDB = await Dog.findByPk(id);
        return dogDB;
    }
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`);
        return dogApi.data;
}

const newDogDB = async (image, name, height_min, height_max, weight_min, weight_max, life_span, temperament) => {
    const newDog = await Dog.create({ image, name, height_min, height_max, weight_min, weight_max, life_span, temperament });
    const temperamentDB = await Temperament.findAll({
        where: {
            name: temperament,
        },
    });
    await newDog.addTemperament(temperamentDB);
    return newDog;
};

const getTemperaments = async () => {
    const temperamentDB = await Temperament.findAll();
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temperamentApiFilter = temperamentApi.data.map(dog => {
        return dog.temperament ? dog.temperament.split(', ') : [];
    });
    const response = [...temperamentDB, ...temperamentApiFilter];
    const responseFilter = response.filter(tempe => tempe != null)
    const responseFilter2 = responseFilter.flat().sort( (a, b) => a.localeCompare(b) );
    const setResponse = new Set(responseFilter2);
    return [...setResponse];
};

module.exports = {
    getAllDogs,
    getDogsDB,
    getDogsDBId,
    newDogDB,
    getTemperaments,
};