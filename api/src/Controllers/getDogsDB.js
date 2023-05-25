const { Dog, Temperament } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;

const getDogsDB = async (name) => {
    if (name) {
        const dogDB = await Dog.findAll({
            where: {
                name,
            },
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?name=${name}&api_key=${API_KEY}`);
        const dogApiFilter = await dogApi.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                weight_min: parseInt(dog.weight.metric.split(' - ')[0]),
                weight_max: parseInt(dog.weight.metric.split(' - ')[1]),
                height_min: parseInt(dog.height.metric.split(' - ')[0]),
                height_max: parseInt(dog.height.metric.split(' - ')[1]),
                life_span: dog.life_span,
                createdInDb: dog.createdInDb,
                temperament: dog.temperament ? dog.temperament.split(', ') : [],
                image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
            };
        });
        const response = [...dogDB,...dogApiFilter];
        return response;
    };
};

const getAllDogs = async () => {
    const allDog = await Dog.findAll();
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        const dogApiFilter = dogApi.data.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                weight_min: parseInt(dog.weight.metric.split(' - ')[0]),
                weight_max: parseInt(dog.weight.metric.split(' - ')[1]),
                height_min: parseInt(dog.height.metric.split(' - ')[0]),
                height_max: parseInt(dog.height.metric.split(' - ')[1]),
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
    // id de la base de datos son numeros y letras y el id de la api son solo numeros 
    if(isNaN(id)){
        const dogDB = await Dog.findByPk(id);
        return dogDB;
    }
        const dogApi = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`);
        return dogApi.data;
}

const newDogDB = async (image, name, height_min, height_max, weight_min, weight_max, life_span) => {
    let newDog = await Dog.create({ image, name, height_min, height_max, weight_min, weight_max, life_span });
    let temperamentDB = await Temperament.findAll();
    await newDog.addTemperament(temperamentDB);
    return newDog;
};

const getTemperaments = async () => {
    const temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const temperamentApiFilter = await temperamentApi.data.map(dog => {
        return dog.temperament ? dog.temperament.split(', ') : [] 
    });
    const response = [...temperamentApiFilter];
    const responseFilter = new Set(response.flat());
        responseFilter.forEach(async (tempe) => {
        await Temperament.findOrCreate({
            where: {
                name: tempe,
            },
        });
    });
    const temperamentDB = await Temperament.findAll();
    const tempeMap = temperamentDB.map((tempe) => tempe.name)
    return tempeMap;
};

module.exports = {
    getAllDogs,
    getDogsDB,
    getDogsDBId,
    newDogDB,
    getTemperaments,
};