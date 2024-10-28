import { AppRoutes } from './AppRoutes'
import { useEffect } from 'react'
import './App.css'

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className = "App" data-aos = "fade-up">
            <AppRoutes />
        </div>
    )
}

export default App