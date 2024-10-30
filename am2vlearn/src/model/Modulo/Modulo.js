import ModelError from "../ModelError.js"

export default class Modulo {

    #nome
    #questoes

    constructor(nome, questoes) {
        this.setNome(nome)
        this.setQuestoes(questoes)
    }

    setNome(nome) {
        if (!nome) {
            throw new ModelError("Nome inválido: " + nome)
        }
        
        this.#nome = nome
    }

    getNome() {
        return this.#nome
    }

    getQuestoes() {
        return this.#questoes
    }

    setQuestoes(questoes) {
        if (!Modulo.validarQuestoes(questoes)) {
            throw new ModelError("Função inválida: " + questoes)
        }
        
        this.#questoes = questoes
    }

    static validarQuestoes(questoes) {
        if (questoes != 'ADMIN' && questoes != "ALUNO" && questoes != 'PROFESSOR' && questoes != "INABILITADO")
            return false
        return true
    }

    mostrar() {
        let texto = "Modulo: " + this.#nome + "\n"
        texto += "Função: " + this.#questoes + "\n"

        alert(texto)
        alert(JSON.stringify(this))
    }
}