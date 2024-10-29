import { useNavigate } from "react-router-dom"
import "./Settings.css"
import { useEffect, useState } from "react"

const Settings = () => {
    const navigate = useNavigate()

    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useState(localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light'))

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleThemeToggle = () => {
        const selectedTheme = document.querySelector('.theme-toggler').value

        if (selectedTheme === "system") {
            setTheme(systemPrefersDark ? "dark" : "light")
        } else {
            setTheme(selectedTheme.toLowerCase())
        }
    }

    return (
        <div className = "settings-container" data-aos = "fade-up">
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
                    <select className = "theme-toggler" onChange = {handleThemeToggle}>
                        <option value = {'light'}>Light</option>
                        <option value = {'dark'}>Dark</option>
                        <option value = {'system'}>System</option>
                    </select>
                </li>
                <li className = "clickable" onClick = {() => navigate('/contact')}>Contact<i className = "fa-solid fa-up-right-from-square"></i></li>
                <li className = "clickable" onClick = {() => navigate('/termsofuse')}>Terms of use<i className = "fa-solid fa-up-right-from-square"></i></li>
            </ul>

            <footer className = "poppins-regular">
                <p className = "copyright">Copyright © 2024 AM2VLearn</p>
                <p className = "credits">
                    Made by:
                    <a href = "https://github.com/Arthur1802" target = "_blank">Arthur Quinellato</a>
                    <a href = "https://github.com/Petrakis20" target = "_blank">Matheus Petrakis</a>
                    {/* <a href = "https://github.com/viniciusfranfer" target = "_blank">Vinicius França</a> */}
                    <a href = "https://github.com/vitoriomuniz26" target = "_blank">Vitório Muniz</a>
                </p>
            </footer>
        </div>
    )
}

export default Settings