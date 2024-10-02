import React from 'react'

import download_icon from '../assets/icons/download_icon.svg'
import play_icon from '../assets/icons/play_icon.svg'
import imgSrc from '../assets/icons/html_dark.svg'

import '../styles/pages/DownloadContent.css'

const DownloadContent = ({ option }) => {
    // let imgSrc
    // let tema = 'dark'

    // switch (option) {
    //     case 'html': 
    //         imgSrc = require(`../assets/icons/html-${tema}.png`)
    //         break
    //     case 'css':
    //         imgSrc = require(`../assets/icons/css-${tema}.png`)
    //         break
    //     case 'js':
    //         imgSrc = require(`../assets/icons/js-${tema}.png`)
    //         break
    //     case 'all':
    //         imgSrc = require(`../assets/icons/grouped_logos_${tema}.png`)
    //         break
    // }

    return (
        <div className='download-content-panel'>
            <div className="content">
                <img
                    className='content-logo'
                    src = {imgSrc}
                    alt = "Content"
                />
                <button className='download-content-button poppins-semibold'>
                    BAIXAR MATERIAL DE APOIO
                    <img src = {download_icon} alt = "" />
                </button>
                <button className='start-button poppins-semibold'>
                    COMEÇAR
                    <img
                        src = {play_icon}
                        alt = ""
                    />
                </button>
            </div>
        </div>
    )
}

export default DownloadContent