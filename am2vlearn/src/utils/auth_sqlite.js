import axios from 'axios'

let errors = {}
let userAuthenticated = false
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const Login = async (email, senha) => {
    if (emailRegex.test(email)) {
        if (senha.length >= 8) {
            try {
                const res = await axios.post('http://localhost:3001/login', email, senha)
                userAuthenticated = res.data.validation
            }

            catch (err) {
                console.log(err)
                errors.login = "Erro ao fazer login"
                return errors
            }
        }

        else {
            errors.senha = "Senha deve ter no mínimo 8 caracteres";
            return errors;
        }
    }
    
    else {
        errors.email = "Email inválido"
        return errors
    }
}

export const Signin = async (nome, email, senha) => {
    if (emailRegex.test(email)) {
        if (senha.length >= 8) {
            try {
                const res = await axios.post('http://localhost:3001/signin', nome, email, senha)
                if (res.data.error) {
                    errors.email = res.data.error
                    return errors
                }

                userAuthenticated = res.data.validation
            }

            catch (err) {
                console.log(err)
                errors.signin = "Erro ao fazer login"
                return errors
            }
        }

        else {
            errors.senha = "Senha deve ter no mínimo 8 caracteres";
            return errors;
        }
    }
    
    else {
        errors.email = "Email inválido"
        return errors
    }
}

export const Proceed = () => {
    userAuthenticated = true
}

export const isAuthenticated = () => {
    return userAuthenticated
}