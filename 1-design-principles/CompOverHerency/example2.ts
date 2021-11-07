// Type of transport
class Transport2 {
  // By default, doesn't have autopilot and works with combustion
  constructor( 
    driver: any = new Human(),  
    engine: any = new CombustionEngine() 
  ) {
    this.driver = driver;
    this.engine = engine;
  }

  public driver: Driver;
  public engine: Engine;
}

// Type of driver (Autopilot?)
interface Driver {
  navigate: Function
}

class Robot implements Driver { 
  public navigate() {
    // with AutoPilot
  }
}

class Human implements Driver {
  public navigate() {
    // Without Autopilot
  }
}

// Type of energy
interface Engine {
  move: Function
}

class CombustionEngine implements Engine {
  public move() { 
    // with Gasoline
  }
}

class ElecticEngine implements Engine {
  public move() { 
    // Electric
  }
}

// Car, Combustion, No AutoPilot
const normalCar = new Transport2();
// Car, Electric, No AutoPilot
const normalElectricCar = new Transport2( new Human(), new ElectricCar() );
// Car, Combustion, AutoPilot
const AutoPilotCar = new Transport2( new Robot(), new CombustionEngine() );
// Car, Electric, AutoPilot
const AutoPilotCarElectric = new Transport2( new Robot(), new ElectricCar() );

// Truck, Combustion, No AutoPilot
const normalTruck = new Transport2();
// Truck, Electric, No AutoPilot
const normalElectricTruck = new Transport2( new Human(), new ElectricCar() );
// Truck, Combustion, AutoPilot
const AutoPilotTruck = new Transport2( new Robot(), new CombustionEngine() );
// Truck, Electric, AutoPilot
const AutoPilotTruckElectric = new Transport2( new Robot(), new ElectricCar() );