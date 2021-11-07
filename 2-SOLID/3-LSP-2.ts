interface IFly {
  fly(): void;
}

interface ISwim {
  swim(): void;
}

interface ICuack {
  cuack(): void;
}

class Duck2 implements IFly, ISwim, ICuack {
  public fly() { }
  public swim() { }
  public cuack() { }
}

class RubberDuck2 implements ISwim, ICuack {
  public swim() { }
  public cuack() { }
}

class DuckProcesser2 {
  public makeDucksFly( ducks: IFly[] ) {
    for( let duck of ducks ) {
      duck.fly();
    }
  }
}