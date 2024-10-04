import React from 'react'
import '../styles/pages/SubjectMenu.css'

const SubjectMenu = ({ handleSubject, tema }) => {

    tema = 'light'

    let logo = require(`../assets/logo/sm_logo_${tema}.svg`)

    let html_logo = require(`../assets/icons/html_${tema}.svg`)
    let css_logo = require(`../assets/icons/css_${tema}.svg`)
    let js_logo = require(`../assets/icons/js_${tema}.svg`)
    let grouped_logos = require(`../assets/icons/grouped_logos_${tema}.svg`)

    return (
        <div className = "SubjectMenu">
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