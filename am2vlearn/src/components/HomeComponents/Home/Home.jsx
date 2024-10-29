import { useEffect, useMemo, useState } from 'react'
import UsuarioDAO from '../../../model/Usuario/UsuarioDAO'
import SubjectMenu from './SubjectMenu/SubjectMenu'
import FadeLoader from 'react-spinners/FadeLoader'
import { toast, ToastContainer, Slide } from 'react-toastify'
import './Home.css'

const Home = () => {
    const [nome, setNome] = useState('')
    const daoUsuario = useMemo(() => new UsuarioDAO(), [])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsuario = async () => {
            const uid = localStorage.getItem('userUID')

            try {
                const fetchedUsuario = await daoUsuario.obterUsuarioPeloUID(uid)
                setNome(fetchedUsuario.getNome())
                setIsLoading(false)
            } catch (erro) {
                notify(erro, 'error')
            }
        }

        fetchUsuario()
    }, [daoUsuario, nome])

    const notify = (message, type) => {
        toast[type](message, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            transition: Slide
        })
    }

    return (
        <div className = "home-container" data-aos = "fade-up">
            <ToastContainer
                position = "top-center"
                autoClose = {5000}
                hideProgressBar = {false}
                newestOnTop = {false}
                closeOnClick
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover = {false}
            />
            <h1>
                {isLoading ? (
                    <FadeLoader color = "#a9a9a9" loading = {true} size = {1} />
                ) : (
                    `Olá, ${nome}!`
                )}
            </h1>

            <SubjectMenu />
        </div>
    )
}

export default Home