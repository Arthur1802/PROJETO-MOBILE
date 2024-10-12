class Usuario {
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
        this.nome = nome
    }

    setSobrenome(sobrenome) {
        this.sobrenome = sobrenome 
    }

    setEmail(email) {
        this.email = email
    }

    setSenha(senha) {
        this.senha = senha
    }
}

export default Usuario