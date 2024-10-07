const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

export const setUsuario = (nome, email, senha) => {
    db.run('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
        if (err) {
            console.log(err)
            return false
        }

        return true
    })
}

export const setQuestao = (modulo, questao, codigo, alternativas, resposta_correta) => {
    db.run('INSERT INTO questoes (modulo, questao, codigo, alternativas, resposta_correta) VALUES (?, ?, ?, ?, ?)', [modulo, questao, codigo, alternativas, resposta_correta], (err) => {
        if (err) {
            console.log(err)
            return false
        }

        return true
    })
}