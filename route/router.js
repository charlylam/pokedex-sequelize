import express from 'express';

const router = express.Router();

import pokemonController from '../controllers/pokemonController.js';

router.get('/', pokemonController.renderPokemon);
router.get('/pokemon/:id', pokemonController.renderPokemonDetail);

export default router;
