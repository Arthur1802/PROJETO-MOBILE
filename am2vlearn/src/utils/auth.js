import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


let errors = {}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const Login = async (email, senha) => {
    if (emailRegex.test(email)) {
        if (senha.length >= 8) {
            try {
                const res = await auth.signInWithEmailAndPassword(email, senha)
                return res
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

export const LoginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
        if (res.user) {
            return res.user
        }
    }

    catch (err) {
        console.log(err)
        errors.login = "Erro ao fazer login"
        return errors
    }
}

export const Signin = async (nome, email, senha) => {
    if (nome) {
        if (emailRegex.test(email)) {
            if (senha.length >= 8) {
                try {
                    let user = await createUserWithEmailAndPassword(auth, email, senha)
                    if (user) {

                    }
                }

                catch (err) {
                    console.log(err)
                    errors.signin = "Erro ao criar conta"
                    return errors
                }
            }

            else {
                errors.senha = "Senha deve ter no mínimo 8 caracteres"
                return errors
            }
        }

        else {
            errors.email = "Email inválido"
            return errors
        }
    }

    else {
        errors.nome = "Favor informar seu nome"
        return errors
    }
}

export const SignInWtihGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)

        if (res.user) {
            return res.user
        }
    }

    catch (err) {
        console.log(err)
        errors.signin = "Erro ao criar conta"
        return errors
    }
}

export const LogOut = async () => {
    try {
        await auth.signOut()
    }

    catch (err) {
        console.log(err)
    }
}