import { getEmailUsuario, getSenhaUsuario } from '../database/db_consulta.js'
import { setUsuario } from '../database/db_insercao.js'

let errors = {}
let userAuthenticated = false
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const Login = async (email, senha) => {
    errors = {} // Resetar erros a cada tentativa
    try {
        if (!emailRegex.test(email)) {
            errors.email = 'Email inválido'
            return errors
        }

        const emailEncontrado = await getEmailUsuario(email)
        if (email !== emailEncontrado) {
            errors.email = 'Email não encontrado'
            return errors
        }

        if (senha.length < 8) {
            errors.senha = 'Senha deve ter pelo menos 8 caracteres'
            return errors
        }

        const senhaCorreta = await getSenhaUsuario(email)
        if (senha !== senhaCorreta) {
            errors.senha = 'Senha incorreta'
            return errors
        }

        userAuthenticated = true
        return errors
    } catch (err) {
        console.error('Erro ao realizar login:', err)
        errors.general = 'Erro no sistema, tente novamente mais tarde'
        return errors
    }
}

export const SignIn = async (nome, email, senha) => {
    errors = {} // Resetar erros a cada tentativa
    try {
        if (!emailRegex.test(email)) {
            errors.email = 'Email inválido'
            return errors
        }

        const emailEncontrado = await getEmailUsuario(email)
        if (emailEncontrado) {
            errors.email = 'Email já está em uso'
            return errors
        }

        if (senha.length < 8) {
            errors.senha = 'Senha deve ter pelo menos 8 caracteres'
            return errors
        }

        const usuarioCriado = await setUsuario(nome, email, senha)
        if (!usuarioCriado) {
            errors.signin = 'Erro ao criar conta'
            return errors
        }

        return errors
    } catch (err) {
        console.error('Erro ao criar conta:', err)
        errors.general = 'Erro no sistema, tente novamente mais tarde'
        return errors
    }
}

export const isAuthenticated = () => {
    return userAuthenticated
}