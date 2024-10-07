import React from 'react'
import './styles/App.css' 
// import { isAuthenticated } from './utils/auth.js';
// import { isAuthenticated } from './utils/authentication.js';
// import { Navigate, Outlet } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SubjectMenu from './pages/SubjectMenu'
import AppRoutes from './routes'

const App = () => {
    // const isLoggedIn = isAuthenticated()

    return (
        <div className = "App">
            {/* {isLoggedIn === true ? (
                <Outlet />
            ) : (
                <Navigate to = "/welcome" replace />
            )} */}
            <>
                <AppRoutes/>
            </>
        </div>
    )
}

export default App
