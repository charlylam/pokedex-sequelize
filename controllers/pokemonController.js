import Pokemon from '../models/pokemon.js';

class PokemonController {
  renderPokemon = async (req, res) => {
    try {
      const pokemons = await Pokemon.findAll();

      res.render('pokemon', { pokemons });
    } catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  };

  renderPokemonDetail = async (req, res) => {
    try {
      const pokemon = await Pokemon.findByPk(req.params.id);

      if (!pokemon) {
        return res.status(404).render('error404');
      }

      res.render('pokemon-detail', { pokemon });
    } catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  };
}

export default new PokemonController();
