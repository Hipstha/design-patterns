import axios from 'axios';

class Pokemon {

  constructor( 
    path: string = 'https://pokeapi.co/api/v2',
    pathToPokemon: string = '/pokemon/pikachu',
  ) {
    this.path = path;
    this.pathToPokemon = pathToPokemon;
  }
    
    private path: string;
    private pathToPokemon: string;
    private pokemon: any;

  public async getPokemon() {
    this.pokemon = await this.requestPokemon();
    return this.pokemon;
  }

  private axiosClient() {
    const axiosClient = axios.create({
      baseURL: this.path
    });
    return axiosClient;
  }

  private async requestPokemon() {
    try {
      const resp = await this.axiosClient().get( this.pathToPokemon );
      const respClear = this.parsingPokemon( resp );
      return respClear;
    } catch( error ) {
      return [];
    }
  }

  private parsingPokemon( resp ) {
    const respToClear = resp.data;
    const respClear = {
      name: respToClear.name,
      img: respToClear.sprites.other.dream_world.front_default,
      height: respToClear.height,
      weight: respToClear.weight,
      type: respToClear.types[0].type.name,
      hp: respToClear.stats[0].base_stat
    };
    return respClear;
  }

}