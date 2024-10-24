export default class Usuario {
    #uid
    #email
    #funcao

    constructor(email, uid, funcao) {
        this.setEmail(email)
        this.setUid(uid)
        if (funcao === undefined || funcao === null) {
            this.setFuncao('INABILITADO')
        }
        else {
            this.setFuncao(funcao)
        }
    }

    getEmail() {
        return this.#email
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