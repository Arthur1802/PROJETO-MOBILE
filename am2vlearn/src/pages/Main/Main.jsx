import { useState } from 'react'
import logo from '../../assets/logo/sm_logo_light.svg'
import Home from '../../components/HomeComponents/Home/Home'
import Profile from '../../components/HomeComponents/Profile/Profile'
import DownloadContent from '../../components/HomeComponents/DownloadContent/DownloadContent'
import Settings from '../../components/HomeComponents/Settings/Settings'
import './Main.css'
import Nav from '../../components/Nav/Nav'

const Main = () => {
    const [section, setSection] = useState('home')

    return (
        <div className = "main-container" data-aos = "fade-up">
            <div className = "nav-top">
                <img src = {logo} alt = "Logo" />
                <button onClick = {() => setSection('profile')}><i className = "fa-solid fa-user"></i></button>
            </div> 

            {section === "home" && (<Home />)}
            {section === "profile" && (<Profile />)}
            {section === "downloadcontent" && (<DownloadContent />)}
            {section === "settings" && (<Settings />)}

            <Nav setSection = {setSection}/>
            
        </div>
    )
}

export default Main