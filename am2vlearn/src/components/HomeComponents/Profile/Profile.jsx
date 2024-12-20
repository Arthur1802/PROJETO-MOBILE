import { useEffect, useMemo, useState } from "react"
import { Slide, ToastContainer, toast } from 'react-toastify'
import UsuarioDAO from '../../../model/Usuario/UsuarioDAO'
import './Profile.css'

const Profile = () => {
    const [usuario, setUsuario] = useState(null)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const daoUsuario = useMemo(() => new UsuarioDAO(), [])

    useEffect(() => {
        const fetchUsuario = async () => {
            const uid = localStorage.getItem('userUID')
            const fetchedUsuario = await daoUsuario.obterUsuarioPeloUID(uid)

            if (fetchedUsuario) {
                setUsuario(fetchedUsuario)
                setEmail(fetchedUsuario.getEmail())
                setNome(fetchedUsuario.getNome())
            }
        }

        fetchUsuario()
    }, [daoUsuario])

    const [novoNome, setNovoNome] = useState('')
    const [novoEmail, setNovoEmail] = useState('')

    const salvarAlteracoes = async () => {
        if (usuario) {
            try {
                usuario.setEmail(novoEmail)
                usuario.setNome(novoNome)

                await daoUsuario.alterar(usuario)
                notify('success', 'Suas informações foram alteradas com sucesso!')
            } catch (erro) {
                notify('error', `Ocorreu um erro ao tentar alterar suas informações. Tente novamente!\n${erro}`)
            }
        }
    }

    const alterarSenha = () => {
        notify('info', 'Essa funcionalidade ainda não está disponível. Em breve, você poderá alterar sua senha!')
    }

    const notify = (type, message) => {
        toast[type](message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide
        })
    }

    return (
        <div className = "profile-container" data-aos = "fade-up">
            <ToastContainer
                position = "top-center"
                autoClose = {5000}
                hideProgressBar
                newestOnTop = {false}
                closeOnClick = {false}
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover
                theme = "dark"
                transition = {Slide}
            />
            <form>
                <input 
                    type = "text" 
                    placeholder = "Redefinir nome" 
                    name = "nome" 
                    value = {nome} 
                    onChange = {(e) => setNovoNome(e.target.value)} 
                />
                <input 
                    type = "email" 
                    placeholder = "Redefinir e-mail" 
                    name = "email" 
                    value = {email} 
                    onChange = {(e) => setNovoEmail(e.target.value)} 
                />

                <a href = "">Alterar senha?<i className = "fa-solid fa-up-right-from-square"></i></a>

                <button className = "azul-claro" onClick = {() => salvarAlteracoes()}>SALVAR</button>
            </form>
        </div>
    )
}

export default Profile