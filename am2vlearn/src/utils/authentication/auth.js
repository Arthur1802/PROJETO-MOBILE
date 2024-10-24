import { auth } from '../firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { getDatabase, ref, query, get, set } from 'firebase/database'
import { redirect } from 'react-router-dom'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getGoogleProvider = () => {
    return new GoogleAuthProvider()
}

const db = getDatabase()

export const Login = async (email, senha) => {
    let errors = {}
    if (!emailRegex.test(email)) {
        errors.email = "Email inválido"
        return errors
    }
    
    if (senha.length < 8) {
        errors.senha = "Senha deve ter no mínimo 8 caracteres"
        return errors
    }
    
    await signInWithEmailAndPassword(auth, email, senha)
    .then((credencial) => {
        let user = credencial.user

        if (!user.emailVerified) {
            errors.emailVerification = "Favor verificar seu email"
            return errors
        }

        let dbRefUsuario = ref(db, `usuarios/${user.uid}`)

        let consulta = query(dbRefUsuario)
        get(consulta)
        .then((dataSnapshot) => {
            let usuario = dataSnapshot.val()
            
            if (dataSnapshot.exists() && usuario.funcao != "INABILITADO") {
                return errors
            }

            else {
                errors.login = "Usuário inabilitado"
                return errors
            }
        })
        .catch((erro) => {
            console.error(erro)
            errors.login = `Erro ao fazer login\n${erro.message}`
            return errors
        })
    })
    .catch((erro) => {
        console.error(erro)
        errors.login = `Erro ao fazer login\n${erro.message}`
        return errors
    })
 
    return errors
}

export const LoginWithGoogle = async () => {
    let errors = {}

    try {
        let result = await signInWithPopup(auth, getGoogleProvider());
        let user = result.user;

        let snapshot = await get(ref(db, `usuarios/${user.uid}`));
        if (snapshot.exists() && snapshot.val().funcao != "INABILITADO") {
            return;
        } else {
            errors.LoginWithGoogle = "Usuário inabilitado. Habilitando usuário...";

            await set(ref(db, `usuarios/${user.uid}`), { 
                uid: user.uid, 
                email: user.email, 
                funcao: "HABILITADO" 
            });

            return errors;
        }
    } catch (erro) {
        console.error(erro);
        errors.LoginWithGoogle = `Erro ao fazer login com Google\n${erro.message}`;
        return errors;
    }
}
    
export const Signin = async (nome, email, senha) => {
    let errors = {}
    
    if (!nome) {
        errors.nome = "Favor informar seu nome"
        return errors
    }
     
    if (!emailRegex.test(email)) {
        errors.email = "Email inválido"
        return errors
    }
    
    if (senha.length < 8) {
        errors.senha = "Senha deve ter no mínimo 8 caracteres"
        return errors
    }

    await createUserWithEmailAndPassword(auth, email, senha)
    .then(async (credencial) => {
        let usr = credencial.user

        await sendEmailVerification(usr)

        let dbRefUsuario = ref(db, `usuarios/${usr.uid}`)

        let objUsuario = {
            uid: usr.uid,
            email: usr.email,
            funcao: "INABILITADO"
        }

        set(dbRefUsuario, objUsuario).then(() => {})

        console.log("Conta criada com sucesso.\nEmail de verificação enviado")
    })
    .catch((erro) => {
        console.error(erro)
        errors.signin = `Erro ao criar conta\n${erro.message}`
        return errors
    })
}

export const SignInWtihGoogle = async () => {
    
}

export const LogOut = async () => {
    try {
        await auth.signOut()
        return redirect('/')
    }

    catch (err) {
        console.error(err)
        return
    }
}