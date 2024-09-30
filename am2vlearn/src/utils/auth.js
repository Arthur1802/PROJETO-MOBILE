import app from './firebase.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, browserSessionPersistence, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js'

//----------------------------------------------------------------------//

export const Login = (values) => {
    // Criar JSON de erros
    let errors = {}

    // Recuperando o que está preenchido no input inpEmail
    let email = values.email
    
    if (email === null || email === '') {
        errors.email = 'Email não preenchida'
        return errors
    }
  // Recuperando o que está preenchido no input tfSenha
  let senha = values.senha
  
    if (senha === null || senha === '') {
        errors.senha = 'senha não preenchida'
        return errors
    }
    // Recuperando o objeto gerenciador de autenticação do Firebase
    const auth = getAuth(app)
    auth.setPersistence(browserSessionPersistence)

    // Recuperando as credenciais do usuário
    signInWithEmailAndPassword(auth, email, senha).then( (credencial) => {
        let errors = {}

        let usr = credencial.user
        
        if (!usr.emailVerified) {
            errors.email = 'Email não não verificado. Veja sua caixa e confirme sua conta.'
            return errors;
        }
        // Verificar se o usuário já está na entrada de usuários do firebase
        const dbRef = getDatabase(app).ref()

        dbRef.child('usuarios')
        .child(usr.uid)
        .get()
        .then((snapshot) => {
            if (snapshot.exists() && snapshot.val().funcao !== 'INABILITADO') {
                isAuthenticated(true)
            }
            
            else {
                errors.inabilitado = 'Sua conta ainda não foi liberada por um administrador.'
                dbRef
                .child('usuarios')
                .child(usr.uid)
                .set({ uid: usr.uid, email: usr.email, funcao: 'INABILITADO' })
                .then((msg) => console.log(msg))
            }
        })
    })
    .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        errors.contaNaoCriada = 'Conta ainda não criada.'
        console.log('#------->' + errorMessage + ' ' + errorCode)
        return errors
    })
}

export const Signin = (values) => {
    let errors = {}

    // Recuperando o que está preenchido no input inpNome
    let nome = values.nome
    
    if (nome === null || nome === '') {
        errors.nome = 'Nome não preenchido'
        return errors
    }
    
    // Recuperando o que está preenchido no input inpEmail
    let email = values.email
    
    if (email === null || email === '') {
        errors.email = 'E-mail não preenchido'
        return errors
    }
    
    // Recuperando o que está preenchido no input inpSenha
    let senha = values.senha
    
    if (senha === null || senha === '') {
        errors.senha = 'Senha não preenchida'
        return errors
    }
    
    // Recuperando o que está preenchido no input inpConfirmacao
    let confirmacao = values.confirmacao
    
    if (confirmacao === null || confirmacao === '') {
        errors.confirmacao = 'Confirmação de senha não preenchida'
        return errors
    }
    
    // Verificando se inpSenha é igual ao inpConfirmacao
    if (confirmacao !== senha ) {
        errors.confirmacao = 'A senha e a sua confirmação possuem valores diferentes'
        return errors
    }

    let recaptchaResponse = window.grecaptcha.getResponse(window.recaptchaWidgetId)

    // Recuperando o objeto gerenciador de autenticação do Firebase
    createUserWithEmailAndPassword(app, email, senha).then(async (credencial) => {
        // Credencial gerada
        let user = credencial.user
        // Envio para o usuário um email de verificação
        await user.sendEmailVerification()     
        // Recupero a referência para o módulo realtime database do firebase
        const dbRef = getDatabase(app).ref()
        
        // Escrevo uma entrada dentro de 'usuarios' para o novo usuário
        dbRef.child('usuarios')
        .child(user.uid)
        .set({ uid: user.uid, email: user.email, funcao: 'INABILITADO' })
        .then((msg) => console.log(msg))
        alert('Conta criada. Verifique sua caixa de email para confirmação da conta')
        
        // Retorno para o início
        window.history.go(-1)
    }).catch((error) => {
        let errorCode = error.code
        let errorMessage = error.message
        
        window.recaptchaVerifier.render().then(function(widgetId) {
            window.grecaptcha.reset(widgetId)
        })
        
        error.falhaNaCriacao = 'Erro na criação da conta: '
        console.log('#------->' + errorMessage + ' ' + errorCode)
        return errors
    })
}

export const GoogleAuthentication = () => {
    let errors = {}
    
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log(user)
    }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log('#------->' + errorMessage + ' ' + errorCode)
        errors.google = 'Erro na autenticação com o Google'
        return errors
    })
}

//----------------------------------------------------------------------//

export const isAuthenticated = () => {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return true
        } else {
            return false
        }
    })
}