const express = require('express')
const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const PORT = 3001

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use(express.json({ limit: '10mb' }))

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err)
    }
    
    else {
        console.log('Conectado ao banco de dados')
    }
})

app.post('/login', (req, res) => {
    const { credencial, senha } = req.body

    db.all(`SELECT * FROM usuarios WHERE (email = ${credencial} OR nome = ${credencial}) AND password = ${senha}`, (err, rows) => {
        if (err) {
            throw err
        }

        if (rows.length > 0) {
            res.send({validation: true})
        }

        else {
            res.send({validation: false})
        }
        
    })
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))