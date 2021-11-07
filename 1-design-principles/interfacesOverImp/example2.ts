interface Employee {
  doWork: Function
}

class GraphicDesigner implements Employee {
  public doWork() {
    // Design UI
  }
}

class SoftwareDesigner2 implements Employee {
  public doWork() {
    // Design Software
  }
}

class Programmer2 implements Employee {
  public doWork() {
    // Write Code
  }
}

class Tester2 implements Employee {
  public doWork() {
    // Test code
  }
}

class Company2 {

  public createSoftware() {

    const employees = [
      new GraphicDesigner, new SoftwareDesigner2, new Programmer2, new Tester2
    ];

    employees.forEach(employee => {
      employee.doWork();
    });

  }
}