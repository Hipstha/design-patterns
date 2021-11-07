// High level class
class DBConfig {
  constructor( database: MySQLDatabase = new MySQLDatabase() ) {
    this.database = database;
  }

  private database: MySQLDatabase;

  public open( data: string ) { }
  public save() {}
}

// Low Level class
class MySQLDatabase {
  public insert() { }
  public read() {}
  public update() { }
  public delete() { }
}

// what happen if in a future we will need to use MongoDB?