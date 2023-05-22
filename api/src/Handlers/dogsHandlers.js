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
        res.status(404).json({error: error.message});
    }
};

const getDogAllHandler = async (req, res) => {
    try {
        const allDogs = await getAllDogs();
        res.status(200).json(allDogs);
    } catch (error) {
        res.status(404).json('No se encontraron perros');
    }
};

const postDogHandler = async (req, res) => {
    const {image, name, height, weight, life_span, temperament } = req.body;
    try {
        const newDog = await newDogDB(image, name, height, weight, life_span, temperament);
        res.status(200).json(newDog);
    } catch (error) {
        res.status(404).json(error.message)
    }
};

const getDogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await getDogsDBId(id); 
        res.status(200).json(dog);
    } catch (error) {
        res.status(404).json('No se encontró el perro');
    }
};
module.exports = {
    getDogAllHandler,
    getDogByNameHandler,
    getDogByIdHandler,
    postDogHandler,
};