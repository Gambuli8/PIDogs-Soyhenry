const e = require('express');
const { getAllDogs ,getDogsDB, getDogsDBId, newDogDB } = require('../Controllers/getDogsDB.js');

//query --> /dogs?name=perro
const getDogByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name) {
            const allDogsName = await getDogsDB(name);
            res.status(200).json(allDogsName);
        }
    } catch (error) {
        res.status(400).json('No se encontraron perros');
    }
};

const getDogAllHandler = async (req, res) => {
    try {
        const allDogs = await getAllDogs();
        res.status(200).json(allDogs);
    } catch (error) {
        res.status(400).json('No se encontraron perros');
    }
};

const postDogHandler = async (req, res) => {
    const {image, name, height_min, height_max, weight_min, weight_max, life_span, temperament } = req.body;
    try {
        let newDog = await newDogDB(image, name, height_min, height_max, weight_min, weight_max, life_span, temperament);
        return res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

const getDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await getDogsDBId(id); 
        res.status(200).json(dog);
    } catch (error) {
        res.status(400).json('No se encontró el perro');
    }
};

module.exports = {
    getDogAllHandler,
    getDogByNameHandler,
    getDogByIdHandler,
    postDogHandler,
};