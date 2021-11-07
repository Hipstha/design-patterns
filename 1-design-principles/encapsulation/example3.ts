import axios from 'axios';

class Pokemon {

  private pokemon: any;

  public async getPokemon() {
    const crud = new CRUD();
    this.pokemon = crud.getRequest(); 
    return this.pokemon;
  }

}

class API {

  constructor(
    path: string = 'https://pokeapi.co/api/v2'
  ) {
    this.path = path;
  }

  private path: string;

  protected axiosClient() {
    const axiosClient = axios.create({
      baseURL: this.path
    });
    return axiosClient;
  }

}

class CRUD extends API {

  constructor(
    pathToPokemon: string = '/pokemon/pikachu'
  ) {
    super();
    this.pathToPokemon = pathToPokemon;
  }

  private pathToPokemon: string;

  public async getRequest() {
    try {
      const resp = await this.axiosClient().get( this.pathToPokemon );
      const parsing = new Parsing();
      const clearData = parsing.parsingData( resp );
      return clearData
    } catch( error ) {
      return [];
    }
  }

}

class Parsing {

  private clearData: any;

  public parsingData( dataToClear: any ) {
    const respToClear = dataToClear;
    this.clearData = {
      name: respToClear.name,
      img: respToClear.sprites.other.dream_world.front_default,
      height: respToClear.height,
      weight: respToClear.weight,
      type: respToClear.types[0].type.name,
      hp: respToClear.stats[0].base_stat
    };
    return this.clearData;
  }

}