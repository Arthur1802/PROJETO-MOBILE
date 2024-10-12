import { useState } from 'react'
import logo from '../../assets/logo/sm_logo_light.svg'
import Home from '../../components/HomeComponents/Home'
import Profile from '../../components/HomeComponents/Profile'
import DownloadContent from '../../components/HomeComponents/DownloadContent'
import Settings from '../../components/HomeComponents/Settings'

const Main = () => {
    const [selectedSection, setSelectedSection] = useState('home')

    return (
        <div className = "Main" data-aos = "fade-up">
            <nav className = "nav-top">
                <img src = {logo} alt = "Logo" className = "logo" />
                <button onClick = {setSelectedSection("profile")}><i className = "fa-solid fa-user"></i></button>
            </nav> 

            {selectedSection === "home" && (<Home />)}
            {selectedSection === "profile" && (<Profile />)}
            {selectedSection === "downloadcontent" && (<DownloadContent />)}
            {selectedSection === "settings" && (<Settings />)}

            <nav className = "nav-bottom">
                <button onClick = {setSelectedSection("home")}><i className = "fa-solid fa-house"></i></button>
                <button onClick = {setSelectedSection("downloadcontent")}><i className = "fa-solid fa-file-arrow-down"></i></button>
                <button onClick = {setSelectedSection("settings")}><i className = "fa-solid fa-gear"></i></button>
            </nav>
            
        </div>
    )
}

export default Main