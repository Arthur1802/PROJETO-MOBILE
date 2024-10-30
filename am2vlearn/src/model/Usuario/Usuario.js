import ModelError from "../ModelError.js"

export default class Usuario {

    #email
    #nome
    #uid
    #funcao
    #modulos

    constructor(email, nome, uid, funcao, modulos) {
        this.setEmail(email)
        this.setNome(nome)
        this.setUid(uid)
        this.setFuncao(funcao)
        this.setModulos(modulos)
    }

    getEmail() {
        return this.#email
    }

    setEmail(email) {
        if (!Usuario.validarEmail(email))
            throw new ModelError("Email inválido: " + email)
        this.#email = email
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

    getUid() {
        return this.#uid
    }

    setUid(uid) {
        if (!Usuario.validarUid(uid)) {
            throw new ModelError("UID inválido: " + uid)
        }

        this.#uid = uid
    }

    getFuncao() {
        return this.#funcao
    }

    setFuncao(funcao) {
        if (!Usuario.validarFuncao(funcao)) {
            throw new ModelError("Função inválida: " + funcao)
        }
        
        this.#funcao = funcao
    }

    getModulos() {
        return this.#modulos
    } 

    setModulos(modulos) {
        this.#modulos = modulos
    }

    getPrct(modulo) {
        if (!this.#modulos) {
            return 0
        }

        let mod = this.#modulos
        if (!mod) {
            return 0
        }

        return mod[modulo]['progresso']
    }

    setPrct(modulo, prct) {
        if (!this.#modulos) {
            return
        }

        let mod = this.#modulos.find(mod => mod.getNome() == modulo)
        if (!mod) {
            return
        }

        mod['modulos'][modulo]['progresso'] = prct
    }

    static validarEmail(email) {
        if (email == null || email == "" || email == undefined) {
            return false
        }

        const padraoEmail = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}/
        
        if (!padraoEmail.test(email)) {
            return false
        }
        
        return true
    }

    static validarUid(uid) {
        if (!uid) {
            return false
        }

        return true
    }

    static validarFuncao(funcao) {
        if (funcao != 'ADMIN' && funcao != "ALUNO")
            return false
        return true
    }

    mostrar() {
        let texto = "Email: " + this.#email + "\n"
        texto += "UID: " + this.#uid + "\n"
        texto += "Nome: " + this.#nome + "\n"
        texto += "Modulos: " + JSON.stringify(this.#modulos, null, 2) + "\n"
        texto += "Função: " + this.#funcao + "\n"

        alert(texto)
        alert(JSON.stringify(this))
    }
}