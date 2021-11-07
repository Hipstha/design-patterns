class Duck {
  public fly() { }
  public swim() { }
  public cuack() { }
}

class RubberDuck extends Duck {
  public fly() {
    throw new Error();
  }
  public swim() {
    console.log('Can swim');
  }
  public cuack() {
    console.log('Cuak');
  }
}

class DuckProcesser {
  public makeDucksFly( ducks: Duck[] ) {
    for( let duck of ducks ) {
      try {
        duck.fly();
      } catch( error ) {
        console.log('RubberDuck cannot fly');
      }
    }
  }
}