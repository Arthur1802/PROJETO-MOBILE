import React, { useState } from 'react'
import logo from '../assets/logo/sm_logo_light.svg'
import { Link } from 'react-router-dom'
// import Menu from '../components/Menu'

const Home = () => {
    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
        <div className = "Home">
            <nav className = "nav-top">
                <img src = {logo} alt = "Logo" className = "logo" />
                <button><i className = "fa-solid fa-user"></i></button>
            </nav> 

            {/* <Menu /> */}

            <section className = "home">

            </section>

            <section className = "profile">
                <table>
                    <tr>
                        <td>
                            {/* <img
                                src = {user_img}
                                alt = "User Image"
                                className = "user-img"
                            /> */}
                            <div className = "user-img">Picture here</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type = "text"
                                // placeholder = {user_name}
                                placeholder = "USER NAME"
                                name = "user_name"
                                // value = {user_name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type = "text"
                                // placeholder = {user_name}
                                placeholder = "USER NAME"
                                name = "user_name"
                                // value = {user_name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type = "email"
                                // placeholder = {user_email}
                                placeholder = "USER EMAIL"
                                name = "user_email"
                                // value = {user_email}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className = "inp-senha-cont">
                                <input
                                    type = "password"
                                    // placeholder = {user_password}
                                    placeholder = "USER PASSWORD"
                                    name = "user_password"
                                    // value = {user_password}
                                />
                                <button><i className = {`fa-solid ${mostrarSenha ? "fa-eye-slash" : "fa-eye"}`} onClick = {setMostrarSenha(!mostrarSenha)}></i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>SAVE</button>
                        </td>
                    </tr>
                </table>
            </section>

            <section className = "settings">
                <button data-bs-toggle = "modal" data-bs-target = "#idiomas">Idioma</button>
                <button>LOGOUT</button>
                <Link to = "/termosecondicoes">Termos e condições</Link>
            </section>

            <nav className = "nav-bottom">
                <button><i className = "fa-solid fa-house"></i></button>
                <button><i className = "fa-solid fa-file-arrow-down"></i></button>
                <button><i className = "fa-solid fa-gear"></i></button>
            </nav>
            
        </div>
    )
}

export default Home