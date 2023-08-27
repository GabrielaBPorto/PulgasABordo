import sqlite3 from 'sqlite3';


const db = new sqlite3.Database('./myDatabase.db', (err: Error | null) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

export default db;
