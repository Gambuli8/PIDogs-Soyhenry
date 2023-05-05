const {Router} = require('express');
const { getDogHandler, getDogByIdHandler, postDogHandler, } = require('../Handlers/dogsHandlers.js');

const dogsRouter = Router();

dogsRouter.get('/', getDogHandler);
dogsRouter.get('/:id', getDogByIdHandler);
dogsRouter.post('/', postDogHandler);

module.exports = dogsRouter;