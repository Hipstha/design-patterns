import { API } from '../config/API';
import { Parsing } from '../helpers/Parsing';

export class CRUD extends API {

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