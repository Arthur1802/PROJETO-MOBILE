import { useState } from 'react'
import logo from '../../../am2vlearn/src/assets/logo/sm_logo_light.svg'
import Home from './components/Home'
import DownloadContent from './components/DownloadContent'
import Settings from './components/Settings'
import Profile from './components/Profile'
import './App.css'

const App = () => {
    const [section, setSection] = useState(null)

    const showHome = () => {
        setSection('home')
    }

    const showSettings = () => {
        setSection('settings')
    }

    const showDownloadContent = () => {
        setSection('downloadContent')
    }

    const showProfile = () => {
        setSection('profile')
    }

    return (
        <div className = "App">
            <div className = "top-bar">
                <img
                    src = {logo}
                    alt = "logo"
                    className = "logo"
                />
                <button onClick = {showProfile}><i className = "fa-solid fa-user"></i></button>
            </div>
            <div className = "section-container">
                {section === "home" && <Home />}
                {section === "settings" && <Settings />}
                {section === "downloadContent" && <DownloadContent />}
                {section === "profile" && <Profile />}
                {section === null && <h1>Empty section</h1>}
            </div>
            <nav>
                <button onClick = {showHome}><i className = "fa-solid fa-house"></i></button>
                <button onClick = {showDownloadContent}><i className = "fa-solid fa-file-arrow-down"></i></button>
                <button onClick = {showSettings}><i className = "fa-solid fa-gear"></i></button>
            </nav>
        </div>
    )
}

export default App