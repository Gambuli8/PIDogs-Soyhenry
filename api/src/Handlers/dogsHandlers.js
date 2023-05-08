const { getDogsDB, getDogsDBId, newDogDB } = require('../Controllers/getDogsDB.js');

const getDogHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const allDogs = await getDogsDB(name);
        res.status(200).json(allDogs);
    } catch (error) {
        res.status(404).send('No se encontraron perros');
    }
};

const postDogHandler = async (req, res) => {
    const {image, name, height, weight, life_span } = req.body;
    try {
        const newDog = await newDogDB(image, name, height, weight, life_span);
        res.status(200).json(newDog);
    } catch (error) {
        res.status(404).send('No se pudo crear el perro');
    }
};

const getDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await getDogsDBId(id); 
        res.status(200).json(dog);
    } catch (error) {
        res.status(404).send('No se encontró el perro');
    }
};
module.exports = {
    getDogHandler,
    getDogByIdHandler,
    postDogHandler,
};