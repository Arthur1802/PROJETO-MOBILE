import { useState } from 'react'
import Home from '../../components/HomeComponents/Home/Home'
import Profile from '../../components/HomeComponents/Profile/Profile'
import Settings from '../../components/HomeComponents/Settings/Settings'
import Nav from '../../components/Nav/Nav'
import logoLight from '../../assets/logo/sm_logo_light.svg'
import logoDark from '../../assets/logo/sm_logo_dark.svg'
import './Main.css'

const Main = () => {
    const [section, setSection] = useState('home')
    const theme = localStorage.getItem('theme') || 'light'
    const logo = theme === 'light' ? logoLight : logoDark

    return (
        <div className = "main-container" data-aos = "fade-up">
            <img src = {logo} alt = "Logo" />

            {section === "home" && (<Home />)}
            {section === "profile" && (<Profile />)}
            {section === "settings" && (<Settings />)}

            <Nav setSection = {setSection}/>
            
        </div>
    )
}

export default Main