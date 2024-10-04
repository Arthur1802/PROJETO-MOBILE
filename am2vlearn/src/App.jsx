import React from 'react'
import './styles/App.css' 
// import { isAuthenticated } from './utils/auth.js';
// import { Navigate, Outlet } from 'react-router-dom';
import SubjectMenu from './pages/SubjectMenu'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    // const isLoggedIn = false

    return (
        <div className = "App">
            {/* {isLoggedIn ? (
                <Outlet />
            ) : (
                <Navigate to = "/welcome" replace />
            )} */}
            <SubjectMenu />
        </div>
    )
}

export default App
