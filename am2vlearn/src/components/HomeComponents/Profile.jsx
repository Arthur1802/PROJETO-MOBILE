import { useState } from "react"
import { Usuario } from '../../model/Usuario/Usuario'

const Profile = () => {
    const [mostrarSenha, setMostrarSenha] = useState(false)
    
    const [user, setUser] = useState({
        nome: Usuario.getNome(),
        sobrenome: Usuario.getSobrenome(),
        email: Usuario.getEmail(),
        senha: Usuario.getSenha()
    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className = "settings-section">
            <input 
                type = "text" 
                placeholder = "Redefinir nome" 
                name = "nome" 
                value = {user.nome} 
                onChange = {handleInputChange} 
            />
            <input 
                type = "text" 
                placeholder = "Redefinir sobrenome" 
                name = "sobrenome" 
                value = {user.sobrenome} 
                onChange = {handleInputChange} 
            />
            <input 
                type = "email" 
                placeholder = "Redefinir e-mail" 
                name = "email" 
                value = {user.email} 
                onChange = {handleInputChange} 
            />
            <div className = "inp-senha-cont">
                <input 
                    type = {mostrarSenha ? "text" : "password"} 
                    placeholder = "Redefinir senha" 
                    name = "senha" 
                    value = {user.senha} 
                    onChange = {handleInputChange} 
                />
                <button onClick = {() => setMostrarSenha(!mostrarSenha)}>
                    <i className = {`fa-solid ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
            </div>
        </div>
    )
}

export default Profile