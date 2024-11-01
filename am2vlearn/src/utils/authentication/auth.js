// auth.js
import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { getDatabase, ref, query, get, set } from 'firebase/database'
import { redirect } from 'react-router-dom'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getGoogleProvider = () => new GoogleAuthProvider()

const db = getDatabase()

if (localStorage.getItem('userLoggedIn') === null) {
    localStorage.setItem('userLoggedIn', false)
}

export const Login = async (email, senha) => {
    if (!emailRegex.test(email)) {
        return { errors: { email: "Email inválido" } }
    }

    if (senha.length < 8) {
        return { errors: { senha: "Senha deve ter no mínimo 8 caracteres" } }
    }

    try {
        const credencial = await signInWithEmailAndPassword(auth, email, senha)
        const user = credencial.user


        const dbRefUsuario = ref(db, `usuarios/${user.uid}`)
        const dataSnapshot = await get(query(dbRefUsuario))

        if (dataSnapshot.exists()) {
            localStorage.setItem('userLoggedIn', true)
            localStorage.setItem('userUID', user.uid)

            if (!user.emailVerified) {
                return { warning: { login: "Email não verificado. Verifique sua caixa de entrada." } }
            }

            return { success: { login: "Login efetuado com sucesso!" } }
        } else {
            return { errors: { login: "Usuário não registrado. Crie uma conta e tente novamente." } }
        }
    } catch (erro) {
        console.error(erro)
        return { errors: { login: `Erro ao fazer login\n${erro.message}` } }
    }
}

export const LoginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, getGoogleProvider())
        const user = result.user

        const snapshot = await get(ref(db, `usuarios/${user.uid}`))
        if (snapshot.exists()) {
            localStorage.setItem('userLoggedIn', true)
            localStorage.setItem('userUID', user.uid)

            if (!user.emailVerified) {
                return { warning: { loginWithGoogle: "Email não verificado. Verifique sua caixa de entrada." } }
            }

            return { success: { loginWithGoogle: "Login efetuado com Google com sucesso." } }
        } else {
            return { errors: { loginWithGoogle: "Usuário não registrado. Crie uma conta e tente novamente." } }
        }
    } catch (erro) {
        console.error(erro)
        return { errors: { loginWithGoogle: `Erro ao fazer login com Google\n${erro.message}` } }
    }
}

export const Signin = async (nome, email, senha) => {
    if (!nome) {
        return { errors: { nome: "Nome é obrigatório" } }
    }

    if (!emailRegex.test(email)) {
        return { errors: { email: "Email inválido" } }
    }

    if (senha.length < 8) {
        return { errors: { senha: "Senha deve ter no mínimo 8 caracteres" } }
    }

    try {
        const credencial = await createUserWithEmailAndPassword(auth, email, senha)
        const user = credencial.user


        const dbRefUsuario = ref(db, `usuarios/${user.uid}`)
        const objUsuario = {
            uid: user.uid,
            nome: nome,
            email: user.email,
            funcao: "ALUNO",
            modulos: {
                html: { nome: "html", progresso: 0 },
                css: { nome: "css", progresso: 0 },
                js: { nome: "js", progresso: 0 },
                todos: { nome: "todos", progresso: 0 }
            }
        }

        await set(dbRefUsuario, objUsuario)
        await sendEmailVerification(user)

        console.log("Conta criada com sucesso. Email de verificação enviado")
        return { success: { signin: "Conta criada com sucesso. Email de verificação enviado." } }
    } catch (erro) {
        console.error(erro)
        return { errors: { signin: `Erro ao criar conta\n${erro.message}` } }
    }
}

export const SigninWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, getGoogleProvider())
        const user = result.user

        const snapshot = await get(ref(db, `usuarios/${user.uid}`))

        if (!snapshot.exists()) {
            const dbRefUsuario = ref(db, `usuarios/${user.uid}`)
            const objUsuario = {
                uid: user.uid,
                nome: user.displayName.split(' ')[0],
                email: user.email,
                funcao: "ALUNO",
                modulos: {
                    html: { nome: "html", progresso: 0 },
                    css: { nome: "css", progresso: 0 },
                    js: { nome: "js", progresso: 0 },
                    todos: { nome: "todos", progresso: 0 }
                }
            }

            await set(dbRefUsuario, objUsuario)
            await sendEmailVerification(user)

            console.log("Conta criada com Google com sucesso.")
            return { success: { signin: "Conta criada com Google com sucesso." } }
        } else {
            console.log("Usuário já registrado.")
            return { success: { signin: "Usuário já registrado." } }
        }
    } catch (erro) {
        console.error(erro)
        return { errors: { signinWithGoogle: `Erro ao criar conta com Google\n${erro.message}` } }
    }
}

export const LogOut = async () => {
    try {
        await auth.signOut()
        localStorage.setItem('userLoggedIn', false)
        localStorage.removeItem('userUID')
        return redirect('/')
    } catch (err) {
        console.error(err)
    }
}

export const isLoggedIn = () => {
    return JSON.parse(localStorage.getItem('userLoggedIn') || 'false')
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../../service-worker.js', { scope: '/' })
        .then(function (reg) {
            console.log('Registro do Service Worker bem-sucedido. O escopo de uso é ' + reg.scope)
        }).catch(function (error) {
            console.log('Falha no registro do Service Worker: ' + error)
        })
}