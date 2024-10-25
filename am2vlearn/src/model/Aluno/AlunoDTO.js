// Um Data Transfer Object é um objeto com a representação de um objeto Model, mas sem permitir
// que aqueles que possuem o DTO possam alterar o estado do objeto. É a forma como o controlador
// passará os dados para o Viewer de tal forma que este não possa promover a mudanças nos 
// atributos do objeto.
export default class AlunoDTO {

    #matricula
    #cpf
    #nome
    #email
    #telefone
    #curso

    constructor(aluno) {
        this.#matricula = aluno.getMatricula()
        this.#cpf = aluno.getCpf()
        this.#nome = aluno.getNome()
        this.#email = aluno.getEmail()
        this.#telefone = aluno.getTelefone()
        this.#curso = aluno.getCurso()
    }

    getMatricula() {
        return this.#matricula
    }

    getCpf() {
        return this.#cpf
    }

    getNome() {
        return this.#nome
    }

    getEmail() {
        return this.#email
    }

    getTelefone() {
        return this.#telefone
    }

    async getCurso() {
        return await this.#curso
    }

    toJSON() {
        return '{ ' +
                    '"nome" : "' + this.#nome + '",' +
                    '"email" : "' + this.#email + '",' +
                    '"curso" : "' + this.#curso.getSigla() + '"' +
                '}'
    }
}