import axios from 'axios'; 

class Pokemon {

  constructor( 
    path: string = 'https://pokeapi.co/api/v2',
    pathToPokemon: string = '/pokemon/pikachu',
    pokemon: any
  ) {
    this.path = path;
    this.pathToPokemon = pathToPokemon;
    this.pokemon = pokemon
  }
    
    private path: string;
    private pathToPokemon: string;
    private pokemon: any;

  public async getPokemon() {

    const axiosClient = axios.create({
      baseURL: this.path
    });

    let resp;

    try {
      resp = await axiosClient.get( this.pathToPokemon );
    } catch( error ) {
      resp = [];
    }

    const respToClear = resp.data;
    this.pokemon = {
      name: respToClear.name,
      img: respToClear.sprites.other.dream_world.front_default,
      height: respToClear.height,
      weight: respToClear.weight,
      type: respToClear.types[0].type.name,
      hp: respToClear.stats[0].base_stat
    };

    return this.pokemon;

  }

}