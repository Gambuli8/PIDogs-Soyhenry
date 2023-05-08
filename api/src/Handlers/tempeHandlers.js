const {getTemperament} = require('../Controllers/getDogsDB.js');

const getTemperamentHandler = async (req, res) => {
    try {
        const temperament = await getTemperament();
        res.status(200).json(temperament);
    } catch (error) {
        res.status(404).send('No se encontraron temperamentos');
    }
};

module.exports = {
    getTemperamentHandler,
};