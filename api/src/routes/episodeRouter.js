const { Router } = require("express");
const { getEpisodes } = require("../controllers/episodeCont");

const episodeRouter = Router();

episodeRouter.get('/getEpisodes', getEpisodes);

module.exports = episodeRouter;
