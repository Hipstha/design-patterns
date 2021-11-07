export class Parsing {

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