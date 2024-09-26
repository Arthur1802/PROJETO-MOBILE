import React from 'react' // Adicionar o { useState }

import './styles/App.css' 

import useLocalStorage from 'use-local-storage-state'

import { isAuthenticated } from './utils/auth.js';
import { Navigate, Outlet } from 'react-router-dom';

import AlternaTema from './components/AlternaTema'

const App = () => {
    const isLoggedIn = isAuthenticated()

    const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches // Adicionar o tema preferido
    const [tema, setTema] = useLocalStorage('tema', preferencia) // Adicionar o useLocalStorage (npm install use-local-storage)


    return (
        <div data-theme = {tema ? 'escuro' : 'claro'}>
            <AlternaTema
                isChecked = {tema}
                hendleChange = {() => setTema(!tema)}
            />
            {!isLoggedIn ? (
                <Navigate to = "/welcome" replace />
            ) : (
                <Outlet />
            )}
        </div>
    )
}

export default App