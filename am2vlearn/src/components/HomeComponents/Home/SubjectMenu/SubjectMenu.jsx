import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Notify } from '../../../../components/Notifications/Notify'
import NotificationContainer from '../../../../components/Notifications/NotificationContainer.jsx'
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
import { capitalize } from '../../../../utils/functions.js'

const SubjectMenu = () => {
    const theme = localStorage.getItem('theme')
    const navigate = useNavigate()

    const html_logo = theme === 'light' ? htmlLogoLight : htmlLogoDark
    const css_logo = theme === 'light' ? cssLogoLight : cssLogoDark
    const js_logo = theme === 'light' ? jsLogoLight : jsLogoDark
    const grouped_logos = theme === 'light' ? groupedLogosLight : groupedLogosDark

    const [subject, setSubject] = useState('')
    // const [questoesConcluidas, setQuestoesConcluidas] = useState(localStorage.getItem(`questoesConcluidas${capitalize(subject)}`))

    // useEffect(() => {
    //     const handleStorageChange = () => {
    //         setQuestoesConcluidas(localStorage.getItem(`questoesConcluidas${capitalize(subject)}`))
    //     }

    //     window.addEventListener('gamePlayed', handleStorageChange)

    //     return () => {
    //         window.removeEventListener('gamePlayed', handleStorageChange)
    //     }
    // }, [subject])

    const [usuario, setUsuario] = useState(null)
    const daoUsuario = useMemo(() => new UsuarioDAO(), [])

    const handleSubject = (selectedSubject) => {
        setSubject(selectedSubject)
        navigate(`/game${selectedSubject === 'grouped_logos' ? 'all' : selectedSubject}`, { state: { subject: selectedSubject } })
    }

    // Carregar informações do usuário ao montar o componente
    useEffect(() => {
        const fetchUsuario = async () => {
            const uid = localStorage.getItem('userUID')
            if (uid) {
                const fetchedUsuario = await daoUsuario.obterUsuarioPeloUID(uid)
                if (fetchedUsuario) {
                    setUsuario(fetchedUsuario)
                }
            }
        }
        fetchUsuario()
    }, [daoUsuario])

    const [numQuestoes, setNumQuestoes] = useState({})
    const daoModulo = useMemo(() => new ModuloDAO(), [])

    useEffect(() => {
        const fetchModulos = async () => {
            const modulosNomes = ['html', 'css', 'js', 'todos']
            const newNumQuestoes = {}
            for (const nome of modulosNomes) {
                try{
                    const fetchedModulo = await daoModulo.obterModuloPeloNome(nome)
                    console.log(fetchedModulo.getQuestoes().length)
                    newNumQuestoes[nome] = fetchedModulo.getQuestoes().length
                } catch (erro) {
                    Notify(`Ocorreu um erro ao tentar obter o módulo ${nome}. Tente novamente!\n${erro}`, 'error', 5000, true)
                }
            }
            setNumQuestoes(newNumQuestoes)
        }
    
        fetchModulos()
    }, [daoModulo])
    console.log(numQuestoes)
    

    // const [progressos, setProgressos] = useState({
    //     html: 0,
    //     css: 0,
    //     js: 0,
    //     todos: 0,
    // })

    // useEffect(() => {
    //     if (subject && numQuestoes[subject] > 0) {
    //         const progress = (questoesConcluidas / numQuestoes[subject]) * 100;
    //         setProgressos((prev) => ({
    //             ...prev,
    //             [subject]: progress,
    //         }));
    //     } else {
    //         setProgressos((prev) => ({
    //             ...prev,
    //             [subject]: 0,
    //         }));
    //     }
    // }, [subject, questoesConcluidas, numQuestoes])

    // useEffect(() => {
    //     const salvarProgresso = async () => {
    //         if (usuario && progressos[subject] != null) {
    //             try {
    //                 usuario.setPrct(subject, progressos[subject])
    //                 await daoUsuario.alterar(usuario)
    //                 Notify('Suas informações foram alteradas com sucesso!', 'success', 5000, true)
    //             } catch (erro) {
    //                 Notify(`Ocorreu um erro ao tentar alterar suas informações. Tente novamente!\n${erro}`, 'error', 5000, true)
    //             }
    //         }
    //     }

    //     salvarProgresso()
    // }, [progressos, subject, usuario, daoUsuario])

    return (
        <div className = "SubjectMenu">
            <NotificationContainer autoClose = {5000} hideProgressBar = {false} />
            <div className = "btn-container">
                {['html', 'css', 'js', 'html, css e js'].map((subj) => (
                    <div key = {subj} className = "menu-btn-wrapper">
                        <button
                            className = "menu-btn poppins-semibold"
                            onClick = {() => handleSubject(subj === 'html, css e js' ? 'grouped_logos' : subj)}
                            value = {subj}
                        >
                            <img
                                src = {subj === 'html' ? html_logo : subj === 'css' ? css_logo : subj === 'js' ? js_logo : grouped_logos}
                                alt = {subj.toUpperCase()}
                            />
                            {subj.toUpperCase()}
                        </button>
                        <div className = "progress poppins-medium">
                            {/* {progressos[subj === 'html, css e js' ? 'todos' : subj]}% */}
                            0%
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SubjectMenu