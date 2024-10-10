import React from 'react'
import './styles/App.css' 
import { AuthProvider } from './utils/contexts/authContext'
// import { isAuthenticated } from './utils/auth.js';
// import { isAuthenticated } from './utils/authentication.js';
// import { Navigate, Outlet } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SubjectMenu from './pages/SubjectMenu'
import AppRoutes from './AppRoutes'

const App = () => {
    // const isLoggedIn = isAuthenticated()

    return (
        <AuthProvider>
            <div className = "App">
                <>
                    <AppRoutes/>
                </>
            </div>
        </AuthProvider>
    )
}

export default App
