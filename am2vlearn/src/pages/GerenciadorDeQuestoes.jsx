import React, { useState, useEffect } from 'react'
import './GerenciadorDeQuestoes.css'

const GerenciadorDeQuestoes = ({ tema }) => {
    tema = 'light'

    const [pergunta, setPergunta] = useState('')
    const [codigo, setCodigo] = useState('')
    const [alternativas, setAlternativas] = useState(['', '', '', ''])
    const [resposta, setResposta] = useState('')
    const [modulo, setModulo] = useState('')

    useEffect(() => {
        const logo = document.querySelector('.logo')
        const gameBoard = document.getElementById('game-board')

        if (modulo === 'grouped_logos') {
            gameBoard.style.backgroundColor = '#03bb85'
        } else if (modulo !== '') {
            gameBoard.style.backgroundColor = `var(--${modulo}-cor)`
            logo.src = `../assets/icons/${modulo}_${tema}.svg`
            logo.alt = modulo
        } else {
            logo.src = `../assets/logo/sm_logo_${tema}.svg`
            logo.alt = 'Empty'
            gameBoard.style.backgroundColor = 'grey'
        }
    }, [modulo, tema])

    const handleClear = () => {
        setPergunta('')
        setCodigo('')
        setAlternativas(['', '', '', ''])
        setResposta('')
        console.log('Campos limpos')
    }

    const handleAlternativaChange = (index, value) => {
        const newAlternativas = [...alternativas]
        newAlternativas[index] = value
        setAlternativas(newAlternativas)
    }

    const handleSalvar = () => {
        const novaQuestao = {
            modulo,
            questao: pergunta,
            codigo,
            alternativas,
            resposta_correta: resposta,
        }

        adicionarQuestaoAoJson(novaQuestao)
    }

    const adicionarQuestaoAoJson = (novaQuestao) => {
        let dados = JSON.parse(localStorage.getItem('questoes') || '{"questoes":[]}')

        novaQuestao.id = dados.questoes.length + 1
        dados.questoes.push(novaQuestao)

        localStorage.setItem('questoes', JSON.stringify(dados, null, 4))

        console.log(`Nova questão adicionada: ${novaQuestao.questao}`)
    }

    return (
        <div className = "game-display">
            <img
                className = "logo"
                src = {`../assets/logo/sm_logo_${tema}.svg`}
                alt = "Empty"
            />
            <select
                id = "seletor_modulo"
                value = {modulo}
                onChange = {(e) => setModulo(e.target.value)}
            >
                <option value = "">ESCOLHA O MÓDULO</option>
                <option value = "html">HTML</option>
                <option value = "css">CSS</option>
                <option value = "js">JAVASCRIPT</option>
                <option value = "grouped_logos">HTML, CSS E JAVASCRIPT</option>
            </select>
            <div className = "game-board" id = "game-board">
                <input
                    type = "text"
                    id = "pergunta"
                    placeholder = "Escreva a pergunta aqui"
                    value = {pergunta}
                    onChange = {(e) => setPergunta(e.target.value)}
                />
                <div className = "game-example">
                    <textarea
                        id = "codigo"
                        placeholder = "Escreva o código aqui"
                        value = {codigo}
                        onChange = {(e) => setCodigo(e.target.value)}
                    />
                </div>
                <div className = "btns">
                    {alternativas.map((alt, index) => (
                        <input
                            key = {index}
                            className = "alternativas"
                            type = "text"
                            placeholder = {`Alternativa ${index + 1}`}
                            value = {alt}
                            onChange = {(e) => handleAlternativaChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <input
                    type = "text"
                    id = "resposta"
                    placeholder = "Resposta"
                    value = {resposta}
                    onChange = {(e) => setResposta(e.target.value)}
                />
            </div>
            <button id = "btn_salvar" onClick = {handleSalvar}>SALVAR</button>
            <button id = "btn_limpar" onClick = {handleClear}>LIMPAR</button>
        </div>
    );
};

export default GerenciadorDeQuestoes;