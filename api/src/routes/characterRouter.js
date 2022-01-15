const { Router } = require("express");
const { getAllCharacters,postCharacter, idCharacter } = require("../controllers/characterCont");

const characterRouter = Router();

// todas las REQ que llegan a este archivo, es porque comienzan con lo siguiente:
// http:localhost:3001/character

characterRouter.get('/getCharacters', getAllCharacters);
characterRouter.post('/create', postCharacter);
characterRouter.get('/:id', idCharacter)

module.exports = characterRouter;
