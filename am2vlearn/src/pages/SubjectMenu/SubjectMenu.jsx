import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubjectMenu.css'
import BackBtn from '../../components/BackBtn/BackBtn'

const SubjectMenu = () => {
    const tema = 'light'
    const navigate = useNavigate()
    
    const [subject, setSubject] = useState('')
    console.log(`Subject: ${subject}`)

    const handleSubject = (subject) => {
        setSubject(subject)
        console.log(`Subject: ${subject}`)
    }

    if (subject !== undefined)
        navigate(`/downloadcontent`, { state: { subject } })


    let logo = `src/assets/logo/sm_logo_${tema}.svg`

    let html_logo = `src/assets/icons/html_${tema}.svg`
    let css_logo = `src/assets/icons/css_${tema}.svg`
    let js_logo = `src/assets/icons/js_${tema}.svg`
    let grouped_logos = `src/assets/icons/grouped_logos_${tema}.svg`

    return (
        <div className = "SubjectMenu">
            <BackBtn />
            <img
                className = "logo"
                src = {logo}
                alt = "Logo"
            />

            <h1>ESCOLHA A MATÉRIA</h1>
            
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
        </div>
    )
}

export default SubjectMenu