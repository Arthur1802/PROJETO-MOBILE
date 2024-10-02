import React from 'react'
import download_icon from '../assets/icons/download.svg'
import play_icon from '../assets/icons/play_icon.svg'
import '../styles/pages/DownloadContent.css'

const DownloadContent = ({ option, tema }) => {
    option = 'html'
    tema = 'light'

    let imgSrc = require(`../assets/icons/${option}_${tema}.svg`)

    let logo = require(`../assets/logo/sm_logo_${tema}.svg`)

    return (
        <div className = "DownloadContent">
            {/* <BackBtn /> */}
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
                BAIXAR MATERIAL DE APOIO
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
                />
            </button>
        </div>
    )
}

export default DownloadContent