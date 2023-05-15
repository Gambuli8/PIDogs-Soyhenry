const {Router} = require('express');
const { getDogByNameHandler, getDogByIdHandler, postDogHandler, getDogAllHandler } = require('../Handlers/dogsHandlers.js');

const dogsRouter = Router();

dogsRouter.get('/', getDogAllHandler);
dogsRouter.get('/search', getDogByNameHandler);
dogsRouter.get('/:id', getDogByIdHandler);
dogsRouter.post('/', postDogHandler);

module.exports = dogsRouter;