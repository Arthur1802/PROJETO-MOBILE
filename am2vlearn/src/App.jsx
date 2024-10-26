import AppRoutes from './AppRoutes'
import { useEffect } from 'react'
import './styles/App.css'
// import { AuthProvider } from './utils/contexts/auhContext'

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