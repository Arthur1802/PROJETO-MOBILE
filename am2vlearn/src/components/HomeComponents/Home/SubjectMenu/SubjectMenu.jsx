import { useState, useEffect, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import UsuarioDAO from '../../../../model/Usuario/UsuarioDAO'
import ModuloDAO from '../../../../model/Modulo/ModuloDAO'
import htmlLogoLight from '../../../../assets/icons/light/html_light.svg'
import cssLogoLight from '../../../../assets/icons/light/css_light.svg'
import jsLogoLight from '../../../../assets/icons/light/js_light.svg'
import groupedLogosLight from '../../../../assets/icons/light/grouped_logos_light.svg'
import htmlLogoDark from '../../../../assets/icons/dark/html_dark.svg'
import cssLogoDark from '../../../../assets/icons/dark/css_dark.svg'
import jsLogoDark from '../../../../assets/icons/dark/js_dark.svg'
import groupedLogosDark from '../../../../assets/icons/dark/grouped_logos_dark.svg'
import './SubjectMenu.css'

const SubjectMenu = () => {
    const theme = localStorage.getItem('theme')

    let html_logo = theme === 'light' ? htmlLogoLight : htmlLogoDark
    let css_logo = theme === 'light' ? cssLogoLight : cssLogoDark
    let js_logo = theme === 'light' ? jsLogoLight : jsLogoDark
    let grouped_logos = theme === 'light' ? groupedLogosLight : groupedLogosDark
    
    const [subject, setSubject] = useState('')

    const [questoesConcluidas, setQuestoesConcluidas] = useState({
        html: 0,
        css: 0,
        js: 0,
        todos: 0
    })

    const handleSubject = (subject) => {
        setSubject(subject)
    }

    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (subject) {
            {<Navigate to = {`/downloadcontent`} subject = {subject} setQuestoesConcluidas = {setQuestoesConcluidas} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} />}
        }
    }, [subject, isPlaying])

    const [usuario, setUsuario] = useState(null)
    const daoUsuario = useMemo(() => new UsuarioDAO(), [])

    useEffect(() => {
        const fetchUsuario = async () => {
            const uid = localStorage.getItem('userUID')
            const fetchedUsuario = await daoUsuario.obterUsuarioPeloUID(uid)

            if (fetchedUsuario) {
                setUsuario(fetchedUsuario)
            }
        }

        fetchUsuario()
    }, [daoUsuario])

    const [modulo, setModulo] = useState(null)
    const daoModulo = useMemo(() => new ModuloDAO(), [])

    useEffect(() => {
        const fetchModulo = async (nome) => {
            const fetchedModulo = await daoModulo.obterModuloPeloNome(nome)

            if (fetchedModulo) {
                setModulo(fetchedModulo)
                setNumQuestoes(prev => ({...prev, [nome]: fetchedModulo.questoes.length}))
            }
        }

        fetchModulo('html')
        fetchModulo('css')
        fetchModulo('js')
        fetchModulo('todos')
    }, [daoModulo])

    const [numQuestoes, setNumQuestoes] = useState({
        html: modulo.questoes.length(),
        css: modulo.questoes.length(),
        js: modulo.questoes.length(),
        todos: modulo.questoes.length(),
    })

    const [progressos, setProgressos] = useState({
        html: 0,
        css: 0,
        js: 0,
        todos: 0
    })

    useEffect(() => {
        setProgressos({
            {subject}: questoesConcluidas[subject] / numQuestoes[subject] * 100,
        })
    }, [isPlaying, subject, questoesConcluidas, numQuestoes])

    const salvarProgresso = async () => {
        if (usuario) {
            try {
                usuario.setPrct()
                await daoUsuario.alterar(usuario)
                Notify('Suas informações foram alteradas com sucesso!', 'success', 5000, true)
            } catch (erro) {
                Notify(`Ocorreu um erro ao tentar alterar suas informações. Tente novamente!\n${erro}`, 'error', 5000, true)
            }
        }
    }

    return (
        
        <div className = "S</div>ubjectMenu">
            <div className = "btn-container">
                <div className = "menu-btn-wrapper">
                    <button 
                        className = "menu-btn poppins-semibold" 
                        onClick = {(e) => handleSubject(e.target.value)} 
                        value = 'html'
                    >
                        <img 
                            src = {html_logo} 
                            alt = "HTML" 
                        />
                        HTML
                    </button>

                    <div className = "progress poppins-medium">
                        {`${usuario.getPrct('html')}%`}
                    </div>
                </div>

                <div className = "menu-btn-wrapper">
                    <button 
                        className = "menu-btn poppins-semibold" 
                        onClick = {(e) => handleSubject(e.target.value)} 
                        value = 'css'
                    >
                        <img
                            src = {css_logo} 
                            alt = "CSS" 
                        />
                        CSS
                    </button>

                    <div className = "progress poppins-medium">
                        {usuario.getPrct('css')}
                    </div>
                </div>
                
                <div className = "menu-btn-wrapper">
                    <button 
                        className = "menu-btn poppins-semibold" 
                        onClick = {(e) => handleSubject(e.target.value)} 
                        value = 'js'
                    >
                        <img
                            src = {js_logo} 
                            alt = "JS" 
                        />
                        JS
                    </button>

                    <div className = "progress poppins-medium">
                        {usuario.getPrct('js')}
                    </div>
                </div>

                <div className = "menu-btn-wrapper">
                    <button
                        className = "menu-btn poppins-semibold" 
                        onClick = {(e) => handleSubject(e.target.value)} 
                        value = 'grouped_logos'
                    >
                        <img
                            src = {grouped_logos}
                            alt = "TODOS" 
                        />
                        HTML, CSS E JS
                    </button>

                    <div className = "progress poppins-medium">
                        {usuario.getPrct('todos')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectMenu
