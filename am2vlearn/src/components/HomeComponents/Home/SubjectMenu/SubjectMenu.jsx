import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubjectMenu.css'

// import ChangeCounter from '../../../ChangeCounter'

// import { useCounterContext } from '../../../../hooks/useCounterHtmlContext'

const SubjectMenu = () => {

    // const { counter } = useCounterContext()

    const tema = 'light'
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

    let html_logo = `src/assets/icons/html_${tema}.svg`
    let css_logo = `src/assets/icons/css_${tema}.svg`
    let js_logo = `src/assets/icons/js_${tema}.svg`
    let grouped_logos = `src/assets/icons/grouped_logos_${tema}.svg`

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
