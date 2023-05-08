const { Dog, Temperament } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const getDogsDB = async (name) => {
   const dogDB = await Dog.findAll({
        where: {
            name: name
        },
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
        });

    const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?name=${name}`);
    const dogApiFilter = dogApi.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
            life_span: dog.life_span,
            temperament: dog.temperament  ? dog.temperament.split(', ') : [],
            image: dog.image.url,
        };
    });
    const response = [...dogDB, ...dogApiFilter];

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

const newDogDB = async (image, name, height, weight, life_span) => {
    const newDog = await Dog.create({ image, name, height, weight, life_span });
    return newDog;
};

// const getTemperament = async () => {
//     const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//     return temperamentApi.data.map(dog => dog.temperament).filter(dog => dog !== undefined).join().split(',').map(dog => dog.trim()).filter((dog, index, array) => array.indexOf(dog) === index).sort();
//     const temperamentDB = await Temperament.findAll();
//     return temperaments;
// };

module.exports = {
    getDogsDB,
    getDogsDBId,
    newDogDB,
    // getTemperament,
};