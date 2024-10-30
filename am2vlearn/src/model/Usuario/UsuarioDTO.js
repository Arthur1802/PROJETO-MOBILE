export default class UsuarioDTO {
    constructor(usr) {
        this.email = usr.getEmail()
        this.nome = usr.getNome()
        this.uid = usr.getUid()
        this.funcao = usr.getFuncao()
        this.modulos = usr.getModulos()
    }

    getEmail() {
        return this.email
    }

    getNome() {
        return this.nome
    }

    getUid() {
        return this.uid
    }

    getFuncao() {
        return this.funcao
    }

    getModulos() {
        return this.modulos
    }

    toString() {
        let texto = "Email: " + this.email + "\n"
        texto += "Nome: " + this.nome + "\n"
        texto += "UID: " + this.uid + "\n"
        texto += "Modulos: " + this.modulos + "\n"
        texto += "Função: " + this.funcao + "\n"

        return texto
    }
}