import { AppRoutes } from './AppRoutes'
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        window.scrollTo(0, 0)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    useEffect(() => {
        const handleStorageChange = () => {
            const newTheme = localStorage.getItem('theme')
            if (newTheme) {
                setTheme(newTheme)
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    return (
        <div className = "App" data-aos = "fade-up" data-theme = {theme}>
            <AppRoutes />
        </div>
    )
}

export default App