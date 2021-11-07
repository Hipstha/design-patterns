// super class
class Transport { }

// Type of Transport
class Car implements Transport { }

class Truck implements Transport { }

// Type of energy
class ElectricCar implements Car { }

class CombustibleCar implements Car { }

class ElectrickTruck implements Truck { }

class CombustibleTruck implements Truck { }

// AutoPilot?
class AutoPilotElectricCar implements ElectricCar { }

class AutoPilotCombustibleCar implements CombustibleCar { }

class AutoPilotEletricTruck implements ElectrickTruck { }

class AutoPilotCombustibleTruck implements CombustibleTruck { }