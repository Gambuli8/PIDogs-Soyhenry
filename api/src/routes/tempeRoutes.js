const {Router} = require('express');
const {getTemperamentHandler} = require('../Handlers/tempeHandlers.js');

const temperamentRouter = Router();

temperamentRouter.get('/', getTemperamentHandler);


module.exports = temperamentRouter;