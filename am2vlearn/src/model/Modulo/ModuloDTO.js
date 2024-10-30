export default class ModuloDTO {
    constructor(mdl) {
        this.nome = mdl.getNome()
        this.questoes = mdl.getQuestoes()
    }

    getNome() {
        return this.nome
    }

    getQuestoes() {
        return this.questoes
    }

    toString() {
        let texto = "Modulo: " + this.nome + "\n"
        texto += "Questoes: " + this.questoes + "\n"

        return texto
    }
}