const { Dog, Temperament } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const getDogsDB = async (name) => {
    if (name) {

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
                name: dog.name.toLowerCase().includes(name.toLowerCase()) ? dog.name : null,
                height: dog.height,
                weight: dog.weight,
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
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/`);
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

const newDogDB = async (image, name, height, weight, life_span, temperament) => {
    const newDog = await Dog.create({ image, name, height, weight, life_span, temperament });
    let temperamentDB = await Temperament.findAll({
        where: {
            name: temperament,
        },
    });
    await newDog.addTemperament(temperamentDB);
    return newDog;
};

const getTemperament = async () => {
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    temperamentApi.data.forEach(async (dog) => {
        if(dog.temperament){
            let temps = dog.temperament.split(', ');
            temps.forEach(async (temp) => {
                await Temperament.findOrCreate({
                    where: {
                        name: temp,
                    },
                });
            });
        }
    });
    const temperamentDB = await Temperament.findAll();
    return [...temperamentApi.data, ...temperamentDB];
};

module.exports = {
    getAllDogs,
    getDogsDB,
    getDogsDBId,
    newDogDB,
    getTemperament,
};