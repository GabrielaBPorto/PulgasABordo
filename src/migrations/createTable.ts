const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./myDatabase.db', (err: Error | null) => {
  if (err) {
    console.error("Erro ao conectar com o banco de dados:", err);
    return;
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabela estoque_feira
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS estoque_feira (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    valor REAL NOT NULL,
    codigo TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    data_insercao TEXT NOT NULL
  );
`;

db.run(createTableSQL, (err: Error | null) => {
  if (err) {
    console.error("Erro ao criar tabela:", err);
    return;
  }
  console.log("Tabela estoque_feira criada com sucesso.");
});

// Fechar o banco de dados
db.close((err: Error | null) => {
  if (err) {
    console.error("Erro ao fechar o banco de dados:", err);
    return;
  }
  console.log('Banco de dados fechado.');
});
