import ModelError from "../ModelError.js";

export default class Modulo {

    #nome;
    #questoes;

    constructor(nome, questoes) {
        this.setNome(nome);
        this.setQuestoes(questoes);
    }

    setNome(nome) {
        if (!nome || typeof nome !== 'string') {
            throw new ModelError("Nome inválido: " + nome);
        }
        
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setQuestoes(questoes) {
        this.#questoes = questoes;
    }

    getQuestoes() {
        return this.#questoes;
    }

    mostrar() {
        let texto = "Modulo: " + this.#nome + "\n";
        texto += "Questões: " + JSON.stringify(this.#questoes, null, 2) + "\n";

        alert(texto);
    }
}