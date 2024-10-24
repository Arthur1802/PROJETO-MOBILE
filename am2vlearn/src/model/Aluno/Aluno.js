export default class Aluno {
    static padraoNome = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    static padraoSobrenome = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    static padraoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/
    static padraoSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    constructor(nome, sobrenome, email, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.email = email
        this.senha = senha
    }

    getNome() {
        return this.nome
    }

    getEmail() {
        return this.email
    }

    setNome(nome) {
        if (!Aluno.validarNome(nome)) {
            throw new Error('Nome inválido: ' + nome)
        }

        this.nome = nome
    }

    setSobrenome(sobrenome) {
        if (!Aluno.validarSobrenome(sobrenome)) {
            throw new Error('Sobrenome inválido: ' + sobrenome)
        }
        
        this.sobrenome = sobrenome
    }

    setEmail(email) {
        if (!Aluno.validarEmail(this.email)) {
            throw new Error('Email inválido: ' + email)
        }

        this.email = email
    }

    setSenha(senha) {
        if (!Aluno.validarSenha(this.senha)) {
            throw new Error('Senha inválida: ' + senha)
        }

        this.senha = senha
    }

    static validarNome(nome) {
        if(nome == null || nome == "" || nome == undefined) {
            return false
        }
        
        if (nome.length > 40) {
            return false
        }

        if (!Aluno.padraoNome.test(nome)) {
            return false
        }
        
        return true
    }

    static validarSobrenome(sobrenome) {
        if(sobrenome == null || sobrenome == "" || sobrenome == undefined) {
            return false
        }
        
        if (sobrenome.length > 40) {
            return false
        }

        if (!Aluno.padraoSobrenome.test(sobrenome)) {
            return false
        }
        
        return true
    }

    static validarEmail(email) {
        if(email == null || email == "" || email == undefined) {
            return false
        }
        
        if (!Aluno.padraoEmail.test(email)) {
            return false
        }
        
        return true
    }

    static validarSenha(senha) {
        if(senha == null || senha == "" || senha == undefined) {
            return false
        }
        
        if (!Aluno.padraoSenha.test(senha)) {
            return false
        }
        
        return true
    }
}