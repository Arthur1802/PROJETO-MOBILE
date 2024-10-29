import { useState } from 'react'
import logo from '../../assets/logo/sm_logo_light.svg'
import Home from '../../components/HomeComponents/Home/Home'
import Profile from '../../components/HomeComponents/Profile/Profile'
import Settings from '../../components/HomeComponents/Settings/Settings'
import './Main.css'
import Nav from '../../components/Nav/Nav'

const Main = () => {
    const [section, setSection] = useState('home')

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