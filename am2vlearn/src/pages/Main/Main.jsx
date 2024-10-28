import { useState } from 'react'
import logo from '../../assets/logo/sm_logo_light.svg'
import Home from '../../components/HomeComponents/Home/Home'
import Profile from '../../components/HomeComponents/Profile'
import DownloadContent from '../../components/HomeComponents/DownloadContent'
import Settings from '../../components/HomeComponents/Settings'
import './Main.css'

const Main = () => {
    const [selectedSection, setSelectedSection] = useState('home')

    return (
        <div className = "main-container" data-aos = "fade-up">
            <nav className = "nav-top">
                <img src = {logo} alt = "Logo" />
                <button value = "profile" onClick = {(e) => setSelectedSection(e.target.value)}><i className = "fa-solid fa-user"></i></button>
            </nav> 

            {selectedSection === "home" && (<Home />)}
            {selectedSection === "profile" && (<Profile />)}
            {selectedSection === "downloadcontent" && (<DownloadContent />)}
            {selectedSection === "settings" && (<Settings />)}

            <nav className = "nav-bottom">
                <button value = "home" onClick = {(e) => setSelectedSection(e.target.value)}><i className = "fa-solid fa-house"></i></button>
                <button value = "downloadcontent" onClick = {(e) => setSelectedSection(e.target.value)}><i className = "fa-solid fa-file-arrow-down"></i></button>
                <button value = "settings" onClick = {(e) => setSelectedSection(e.target.value)}><i className = "fa-solid fa-gear"></i></button>
            </nav>
            
        </div>
    )
}

export default Main