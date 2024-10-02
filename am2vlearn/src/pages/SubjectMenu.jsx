import React from 'react'
import '../styles/pages/SubjectMenu.css'
import html_logo from '../assets/icons/html_dark.svg'
import css_logo from '../assets/icons/css_dark.svg'
import js_logo from '../assets/icons/js_dark.svg'
import grouped_logos from '../assets/icons/grouped_logo_light.svg'

const SubjectMenu = () => {
    return (
        <div className = "SubjectMenu">
            <h1>ESCOLHA A MATÉRIA</h1>
            <button className = "menu-btn poppins-semibold"><img src = {html_logo} alt = "HTML" />HTML</button>
            <button className = "menu-btn poppins-semibold"><img src = {css_logo} alt = "CSS" />CSS</button>
            <button className = "menu-btn poppins-semibold"><img src = {js_logo} alt = "JS" />JS</button>
            <button className = "menu-btn poppins-semibold"><img src = {grouped_logos} alt = "TODOS" />HTML, CSS E JS</button>
        </div>
    )
}

export default SubjectMenu