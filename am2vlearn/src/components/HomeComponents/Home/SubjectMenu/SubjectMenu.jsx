import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import htmlLogoLight from '../../../../assets/icons/light/html_light.svg'
import cssLogoLight from '../../../../assets/icons/light/css_light.svg'
import jsLogoLight from '../../../../assets/icons/light/js_light.svg'
import groupedLogosLight from '../../../../assets/icons/light/grouped_logos_light.svg'
import htmlLogoDark from '../../../../assets/icons/dark/html_dark.svg'
import cssLogoDark from '../../../../assets/icons/dark/css_dark.svg'
import jsLogoDark from '../../../../assets/icons/dark/js_dark.svg'
import groupedLogosDark from '../../../../assets/icons/dark/grouped_logos_dark.svg'
import './SubjectMenu.css'

// import ChangeCounter from '../../../ChangeCounter'

// import { useCounterContext } from '../../../../hooks/useCounterHtmlContext'

const SubjectMenu = () => {

    // const { counter } = useCounterContext()

    const theme = localStorage.getItem('theme')
    const navigate = useNavigate()
    
    const [subject, setSubject] = useState('')
    console.log(`Subject: ${subject}`)

    const handleSubject = (subject) => {
        setSubject(subject)
        console.log(`Subject: ${subject}`)
    }

    useEffect(() => {
        if (subject) {
            navigate(`/downloadcontent`, { state: { subject } })
        }
    }, [subject, navigate])

    let html_logo = theme === 'light' ? htmlLogoLight : htmlLogoDark
    let css_logo = theme === 'light' ? cssLogoLight : cssLogoDark
    let js_logo = theme === 'light' ? jsLogoLight : jsLogoDark
    let grouped_logos = theme === 'light' ? groupedLogosLight : groupedLogosDark

    return (
        
        <div className = "S</div>ubjectMenu">
            {/* {`${counter}%`}
            <ChangeCounter /> */}

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
                        {/* {counter} */}
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
                        {/* {counter} */}
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
                        {/* {counter} */}
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
                        {/* {counter} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectMenu
