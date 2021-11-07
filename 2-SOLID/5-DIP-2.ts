interface Database {
  insert: () => void;
  read: () => void;
  update: () => void;
  delete: () => void;
}

// High level class
class DBConfig2 {

  constructor( database: Database = new MySQLDatabase() ) {
    this.database = database;
  }

  public database: Database;

  public open( data: any ) {}
  public save() { }

}

// Low Level Class
class MySQLDataBase implements Database {
  public insert() { }
  public read() { }
  public update() { }
  public delete() { }
}

class MongoDataBase implements Database {
  public insert() { }
  public read() { }
  public update() { }
  public delete() { }
}

// Switch SQL to Mongo
const db = new DBConfig2( new MongoDataBase() );