import { AppRoutes } from './AppRoutes'
import { useEffect } from 'react'
import './App.css'

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const theme = useEffect(() => {
        localStorage.getItem('theme')
    }, [])

    return (
        <div className = "App" data-aos = "fade-up" data-theme = {theme}>
            <AppRoutes />
        </div>
    )
}

export default App