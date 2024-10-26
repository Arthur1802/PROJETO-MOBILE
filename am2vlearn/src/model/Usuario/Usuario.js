export default class Usuario {
    #uid
    #nome
    #sobrenome
    #email
    #senha
    #funcao

    constructor(nome, sobrenome, email, senha, uid, funcao) {
        this.setNome(nome)
        this.setSobrenome(sobrenome)
        this.setEmail(email)
        this.setSenha(senha)
        this.setUid(uid)
        if (funcao === undefined || funcao === null) {
            this.setFuncao('INABILITADO')
        }
        else {
            this.setFuncao(funcao)
        }
    }

    getNome() {
        return this.#nome
    }

    getSobrenome() {
        return this.#sobrenome
    }

    getEmail() {
        return this.#email
    }

    getSenha() {
        return this.#senha
    }

    getUid() {
        return this.#uid
    }

    getFuncao() {
        return this.#funcao
    }

    setEmail(email) {
        if (!Usuario.validarEmail(email)) {
            throw new Error('Email inválido: ' + email)
        }

        this.#email = email
    }

    setUid(uid) {
        if (!Usuario.validarUid(uid)) {
            throw new Error('UID inválido: ' + uid)
        }

        this.#uid = uid
    }

    setFuncao(funcao) {
        if (!Usuario.validarFuncao(funcao)) {
            throw new Error('Função inválida: ' + funcao)
        }

        this.#funcao = funcao
    }

    static validarEmail(email) {
        if (email == null || email == "" || email == undefined)
            return false;

        const padraoEmail = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}/;
        if (!padraoEmail.test(email))
            return false;
        return true;
    }

    static validarUid(uid) {
        if (uid) {
            return false
        }

        return true;
    }

    static validarFuncao(funcao) {
        if (funcao != 'ADMIN' && funcao != "ALUNO" && funcao != 'PROFESSOR' && funcao != "INABILITADO")
            return false;
        return true;
    }
}