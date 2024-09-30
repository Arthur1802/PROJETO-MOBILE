import React from 'react'
import './styles/App.css' 
// import useLocalStorage from 'use-local-storage-state'
import { isAuthenticated } from './utils/auth.js';
import { Navigate, Outlet } from 'react-router-dom';
// import AlternaTema from './components/AlternaTema'

const App = () => {
    const isLoggedIn = false

    // const preferencia = window.matchMedia('(prefers-color-scheme: escuro)').matches // Adicionar o tema preferido
    // const [tema, setTema] = useLocalStorage('tema', preferencia) // Adicionar o useLocalStorage (npm install use-local-storage)


    return (
        // <div data-theme = {tema ? 'escuro' : 'claro'}>
        <div>
            {/* <AlternaTema
                isChecked = {tema}
                hendleChange = {() => setTema(!tema)}
            /> */}
            {/* {isLoggedIn ? (
                <Outlet />
            ) : (
                <Navigate to = "/welcome" replace />
            )} */}
            <Navigate to = "/welcome" replace />
        </div>
    )
}

export default App
