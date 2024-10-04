const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message)
    }
    
    console.log('Conectado ao banco de dados SQLite.')
})

const createTable = `CREATE TABLE questoes IF NOT EXISTS (
                     id INTEGER PRIMARY KEY AUTOINCREMENT,
                     modulo TEXT NOT NULL,
                     pergunta TEXT NOT NULL,
                     alternativas TEXT NOT NULL,
                     gabarito TEXT NOT NULL
                     )`

db.run(createTable, (err) => {
    if (err) {
        console.error(err.message)
    }

    console.log('Tabela criada com sucesso.')
})