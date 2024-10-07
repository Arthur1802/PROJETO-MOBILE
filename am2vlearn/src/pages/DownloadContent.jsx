import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import download_icon from '../assets/icons/download.svg'
import arrow_left from '../assets/icons/arrow-left.svg'
import play_icon from '../assets/icons/play_icon.svg'
import '../styles/pages/DownloadContent.css'

const DownloadContent = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { subject } = location.state || {} // Caso o state não exista, retorna undefined
    const tema = 'light'

    let imgSrc = require(`../assets/icons/${subject}_${tema}.svg`)

    let logo = require(`../assets/logo/sm_logo_${tema}.svg`)

    console.log('Página para baixar conteúdo')

    return (
        <div className = "DownloadContent">
            <Link className = "backBtn" to = "/">
                <img
                    className = "icons"
                    src = {arrow_left}
                    alt = ""
                ></img>
            </Link>
            <img
                src = {logo}
                alt = "Logo"
            />

            <img
                className = "content-img"
                src = {imgSrc}
                alt = "Content"
            />
            
            <button className = 'download-content-btns download-content-btn poppins-semibold'>
                <a href = "https://drive.google.com/file/d/1w3lQSJ6WEXFPlsKCpXSb5YgeUJuPa73K/view?usp=sharing">BAIXAR MATERIAL DE APOIO</a>
                <img
                    src = {download_icon}
                    alt = ""
                />
            </button>
            
            <button className = 'download-content-btns start-btn poppins-semibold'>
                COMEÇAR
                <img
                    src = {play_icon}
                    alt = ""
                    onClick = {() => navigate(`/game${subject === 'grouped_logos' ? 'all' : subject}`)}
                />
            </button>
        </div>
    )
}

export default DownloadContent
