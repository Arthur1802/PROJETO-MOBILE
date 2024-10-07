const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

export const getEmailUsuario = (email) => {
    db.get('SELECT email FROM usuarios WHERE email = ?', [email], (err, row) => {
        if (err) {
            return ''
        }
        
        return row.email
    })
}

export const getSenhaUsuario = (email) => {
    db.get('SELECT senha FROM usuarios WHERE email = ?', [email], (err, row) => {
        if (err) {
            return ''
        }
        
        return row.senha
    })
}

export const getQuestoesPorModulo = (modulo) => {
    let questoes = {}
    db.all('SELECT * FROM questoes WHERE modulo = ?', [modulo], (err, rows) => {
        if (err) {
            return ''
        }
        
        if (rows.length > 0) {
            questoes = rows

            return questoes
        }
        
        else {
            return ''
        }
    })
}

// Example usage
// getQuestoesPorModulo('some_modulo', (err, questoes, alternativas) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(questoes, alternativas)
//     }
// })