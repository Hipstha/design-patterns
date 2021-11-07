class SoftwareDesigner {
  public designSoftware() {
    // design software
  }
}

class Programmer {
  public writeCode() {
    // write code
  }
}

class Tester {
  public testSoftware() {
    // test software
  }
}

class Company {
  public createSoftware() {

    const designer = new SoftwareDesigner();
    designer.designSoftware();

    const programmer = new Programmer();
    programmer.writeCode();

    const tester = new Tester();
    tester.testSoftware();

  }
}