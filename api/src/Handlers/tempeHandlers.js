const {getTemperaments} = require('../Controllers/getDogsDB.js');

const getTemperamentHandler = async (req, res) => {
    try {
        const temperament = await getTemperaments();
        return res.status(200).json(temperament);
    } catch (error) {
        return res.status(404).send('No se encontraron temperamentos');
    }
};

module.exports = {
    getTemperamentHandler,
};