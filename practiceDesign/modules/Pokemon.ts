import { CRUD } from '../crud/CRUD';

export class Pokemon {

  private pokemon: any;

  public async getPokemon() {
    const crud = new CRUD();
    this.pokemon = crud.getRequest(); 
    return this.pokemon;
  }

}