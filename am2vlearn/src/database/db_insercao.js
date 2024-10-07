const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

export const setUsuario = (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err) => {
            if (err) {
                console.log(err)
                reject(false)
            }
            
            else {
                resolve(true)
            }
        })
    })
}

export const setQuestao = (modulo, questao, codigo, alternativas, resposta_correta) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO questoes (modulo, questao, codigo, alternativas, resposta_correta) VALUES (?, ?, ?, ?, ?)', [modulo, questao, codigo, alternativas, resposta_correta], (err) => {
            if (err) {
                console.log(err)
                reject(false)
            }
            
            else {
                resolve(true)
            }
        })
    })
}