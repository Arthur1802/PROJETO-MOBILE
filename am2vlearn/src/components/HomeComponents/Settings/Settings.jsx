import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { LogOut } from "../../../utils/authentication/auth"
import { Notify } from "../../Notifications/Notify"
import NotificationContainer from "../../Notifications/NotificationContainer"
import "./Settings.css"

const Settings = () => {
    const navigate = useNavigate()
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light'))

    useEffect(() => {
        localStorage.setItem('theme', theme)
        window.dispatchEvent(new Event('storage'))
    }, [theme])

    const handleThemeToggle = (event) => {
        const selectedTheme = event.target.value

        if (selectedTheme === "system") {
            setTheme(systemPrefersDark ? "dark" : "light")
        } else {
            setTheme(selectedTheme.toLowerCase())
        }
    }

    const handleLogOut = () => {
        try {
            LogOut()
            Notify('Your are being logged out', 'info', 1000, false)
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (erro) {
            console.error(erro)
        }
    }

    return (
        <div className = "settings-container" data-aos = "fade-up">
            <NotificationContainer
                autoClose = {5000}
                hideProgressBar = {false}
            />
            <h1 className = "poppins-semibold">Settings</h1>
            <ul>
                <li>
                    Language
                    <select>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>Portuguese</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </li>
                <li>
                    Theme
                    <select value = {theme} className = "theme-toggler" onChange = {handleThemeToggle}>
                        <option value = {'light'}>Light</option>
                        <option value = {'dark'}>Dark</option>
                        <option value = {'system'}>System</option>
                    </select>
                </li>
                <li className = "clickable" onClick = {() => navigate('/contact')}>Contact<i className = "fa-solid fa-up-right-from-square"></i></li>
                <li className = "clickable" onClick = {() => handleLogOut()}>Log Out<i className = "fa-solid fa-right-from-bracket"></i></li>
            </ul>

            <footer className = "poppins-regular">
                <span className = "copyright">Copyright © 2024 AM2VLearn</span>
                <span className = "credits">
                    Made by:
                    <a href = "https://github.com/Arthur1802" target = "_blank">Arthur Quinellato <i className = "fa-solid fa-up-right-from-square"></i></a>
                    <a href = "https://github.com/Petrakis20" target = "_blank">Matheus Petrakis <i className = "fa-solid fa-up-right-from-square"></i></a>
                    <a href = "https://github.com/vitoriomuniz26" target = "_blank">Vitório Muniz <i className = "fa-solid fa-up-right-from-square"></i></a>
                </span>
            </footer>
        </div>
    )
}

export default Settings