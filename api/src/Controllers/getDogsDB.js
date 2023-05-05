const { Dog, Temperament } = require('../db.js');

const getDogsDB = async (name, image, altura, peso, años_de_vida) => {
    try {
        const dogsDB = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
            attributes: ['id', 'name', 'image', 'altura', 'peso', 'años_de_vida'],
        });
        return dogsDB;
    } catch (error) {
        console.log(error);
    }
};