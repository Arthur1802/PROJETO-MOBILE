const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

function getQuestoesPorModulo(modulo, callback) {
    db.all('SELECT * FROM questoes WHERE modulo = ?', [modulo], (err, rows) => {
        if (err) {
            return callback(err)
        }
        
        if (rows.length > 0) {
            const alternativas = rows[0].alternativas.split(',')
            callback(null, rows, alternativas)
        } else {
            callback(null, [], [])
        }
    })
}

// Example usage
getQuestoesPorModulo('some_modulo', (err, questoes, alternativas) => {
    if (err) {
        console.error(err)
    } else {
        console.log(questoes, alternativas)
    }
})