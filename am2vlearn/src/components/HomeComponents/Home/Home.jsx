import { useEffect, useMemo, useState } from 'react'
import UsuarioDAO from '../../../model/Usuario/UsuarioDAO'
import './Home.css'
import SubjectMenu from './SubjectMenu/SubjectMenu'

const Home = () => {
    const [nome, setNome] = useState('')
    const daoUsuario = useMemo(() => new UsuarioDAO(), [])

    useEffect(() => {
        const fetchUsuario = async () => {
            const uid = localStorage.getItem('userUID')

            const fetchedUsuario = await daoUsuario.obterUsuarioPeloUID(uid)

            if (fetchedUsuario) {
                setNome(fetchedUsuario.getNome())
            }
        }

        fetchUsuario()
    }, [daoUsuario])

    return (
        <div className = "home-container" data-aos = "fade-up">
            <h1>Bem-vindo(a), {nome}</h1>

            <SubjectMenu />
        </div>
    )
}

export default Home