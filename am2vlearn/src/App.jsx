import { AuthProvider } from './utils/contexts/authContext'
import AppRoutes from './AppRoutes'
import './styles/App.css'
import { useEffect } from 'react'

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <AuthProvider>
            <div className = "App" data-aos = "fade-up">
                <AppRoutes />
            </div>
        </AuthProvider>
    )
}

export default App