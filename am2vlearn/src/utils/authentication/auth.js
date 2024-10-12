import { auth } from '../firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getGoogleProvider = () => {
    return new GoogleAuthProvider()
}

export const Login = async (email, senha) => {
    let errors = {}
    if (emailRegex.test(email)) {
        if (senha.length >= 8) {
            try {
                await signInWithEmailAndPassword(auth, email, senha)
                return errors
            }
            
            catch (err) {
                console.log(err)
                errors.login = err.message || "Erro ao fazer login"
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
    let errors = {}
    try {
        const provider = getGoogleProvider()
        const res = await signInWithPopup(auth, provider)
        if (res.user) {
            return errors
        }
    }
    
    catch (err) {
        console.log(err)
        errors.login = err.message || "Erro ao fazer login"
        return errors
    }
}

export const Signin = async (nome, email, senha) => {
    let errors = {}
    if (nome) {
        if (emailRegex.test(email)) {
            if (senha.length >= 8) {
                try {
                    let user = await createUserWithEmailAndPassword(auth, email, senha)
                    if (user) {
                        await user.user.updateProfile({
                            displayName: nome
                        })
                        return errors
                    }
                }

                catch (err) {
                    console.log(err)
                    errors.signin = err.message || "Erro ao criar conta"
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
    let errors = {}
    try {
        const provider = getGoogleProvider()
        const res = await signInWithPopup(auth, provider)

        if (res.user) {
            return errors
        }
    }

    catch (err) {
        console.log(err)
        errors.signin = err.message || "Erro ao criar conta"
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