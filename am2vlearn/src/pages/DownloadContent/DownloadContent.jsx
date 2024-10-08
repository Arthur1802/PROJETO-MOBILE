import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import download_icon from '../../assets/icons/download.svg'
import play_icon from '../../assets/icons/play_icon.svg'
import './DownloadContent.css'
import BackBtn from '../../components/BackBtn/BackBtn'

const DownloadContent = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { subject } = location.state || {} // Caso o state não exista, retorna undefined
    const tema = 'light'

    let imgSrc = require(`../../assets/icons/${subject}_${tema}.svg`)

    let logo = require(`../../assets/logo/sm_logo_${tema}.svg`)

    console.log('Página para baixar conteúdo')

    return (
        <div className = "DownloadContent">
            <BackBtn />
            <img
                src = {logo}
                alt = "Logo"
            />

            <img
                className = "content-img"
                src = {imgSrc}
                alt = "Content"
            />
            
            <a href = {`/content/${subject}.pdf`} download className = 'download-content-btns download-content-btn poppins-semibold'>
                BAIXAR MATERIAL DE APOIO
                <img
                    src = {download_icon}
                    alt = ""
                />
            </a>
            
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
