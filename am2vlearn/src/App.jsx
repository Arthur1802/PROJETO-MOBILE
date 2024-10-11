import React from 'react'
import './styles/App.css'
import { AuthProvider } from './utils/contexts/authContext'
import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <AuthProvider>
            <div className = "App">
                <AppRoutes />
            </div>
        </AuthProvider>
    )
}

export default App