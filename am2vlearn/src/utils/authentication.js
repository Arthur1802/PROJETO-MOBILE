import { getEmailUsuario, getSenhaUsuario } from '../database/db_consulta.js'
import { setUsuario } from '../database/db_insercao.js';

let errors = {};
let userAuthenticated = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const Login = (email, senha) => {
    if (emailRegex.test(email)) {
        if (email === getEmailUsuario(email)) {
            if (senha.length >= 8) {
                if (senha === getSenhaUsuario(email)) {
                    userAuthenticated = true
                    return errors
                }

                else {
                    errors.senha = 'Senha incorreta'
                }
            }

            else {
                errors.senha = 'Senha deve ter pelo menos 8 caracteres'
            }
        }

        else {
            errors.email = 'Email não encontrado'
        }
    }
    
    else {
        errors.email = 'Email inválido'
    }

    return errors
}

export const SignIn = (nome, email, senha) => {
    if (emailRegex.test(email)) {
        if (getEmailUsuario(email) === '') {
            if (senha.length >= 8) {
                if (!setUsuario(nome, email, senha)) {
                    errors.signin = 'Erro ao criar conta'
                }

                return errors
            }

            else {
                errors.senha = 'Senha deve ter pelo menos 8 caracteres'
            }
        }
    }

    else {
        errors.email = 'Email inválido'
    }
}

export const isAuthenticated = () => {
    return userAuthenticated
}