document.getElementById('seletor_modulo').addEventListener('change', () => {
    const option = document.getElementById('seletor_modulo').value
    
    const logo = document.getElementsByClassName('logo')[0]
    
    if (option !== '') {    
        logo.src = `../am2vlearn/src/assets/icons/${option}_light.svg`
        logo.alt = option
    }

    else {
        logo.src = '../am2vlearn/src/assets/logo/sm_logo_light.svg'
        logo.alt = 'Empty'
    }
    
    const gameBoard = document.getElementById('game-board')
    
    if (option !== '') {
        gameBoard.style.backgroundColor = `var(--${option}-cor)`
    } 

    else if (option === 'grouped_logos') {
        gameBoard.style.backgroundColor = '#03bb85'
    }
    
    else {
        gameBoard.style.backgroundColor = 'grey'
    }
})

document.getElementById('btn_salvar').addEventListener('click', () => {

    const modulo = document.querySelector('select').value
    const questao = document.getElementById('questao').value
    const codigo = document.getElementById('codigo').value
    const respostaCorreta = document.getElementById('resposta').value
    const alternativasInput = document.getElementById('alternativas').value

    const alternativas = alternativasInput.split(',').map(alternativa => alternativa.trim())

    const novaQuestao = {
        modulo: modulo,
        questao: questao,
        codigo: codigo,
        alternativas: alternativas,
        resposta_correta: respostaCorreta
    }

    adicionarQuestaoAoJson(novaQuestao)
})

function adicionarQuestaoAoJson(novaQuestao) {
    const fs = require('fs')
    const nomeArquivo = 'questions.json'

    let dados = { questoes: [] }

    if (fs.existsSync(nomeArquivo)) {
        dados = JSON.parse(fs.readFileSync(nomeArquivo, 'UTF-8'))
    }

    novaQuestao.id = dados.questoes.length + 1

    dados.questoes.push(novaQuestao)

    fs.writeFileSync(nomeArquivo, JSON.stringify(dados, null, 4))

    console.log(`Nova questão adicionada: ${novaQuestao.questao}`)
}

document.getElementById('btn_limpar').addEventListener('click', () => {
    document.getElementById('pergunta').textContent = ''
    document.getElementById('codigo').textContent = ''
    document.getElementById('resposta').textContent = ''
    document.querySelectorAll('alternativas').textContent = ''

    console.log('Campos limpos')
})