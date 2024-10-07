const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

export const getEmailUsuario = (email) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT email FROM usuarios WHERE email = ?', [email], (err, row) => {
            if (err) {
                resolve('') // ou reject(err) caso queira tratar o erro externamente
            }
            
            else {
                resolve(row ? row.email : '')
            }
        })
    })
}

export const getSenhaUsuario = (email) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT senha FROM usuarios WHERE email = ?', [email], (err, row) => {
            if (err) {
                resolve('') // ou reject(err) caso queira tratar o erro externamente
            } else {
                resolve(row ? row.senha : '')
            }
        })
    })
}

export const getQuestoesPorModulo = (modulo) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM questoes WHERE modulo = ?', [modulo], (err, rows) => {
            if (err) {
                resolve('') // ou reject(err)
            } else {
                resolve(rows.length > 0 ? rows : '')
            }
        })
    })
}