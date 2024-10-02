import React from 'react'
import download_icon from '../assets/icons/download.svg'

const DownloadContent = ({ option }) => {
    let imgSrc
    let tema = 'dark'

    switch (option) {
        case 'html': 
            imgSrc = require(`../assets/icons/html-${tema}.png`)
            break
        case 'css':
            imgSrc = require(`../assets/icons/css-${tema}.png`)
            break
        case 'js':
            imgSrc = require(`../assets/icons/js-${tema}.png`)
            break
        case 'all':
            imgSrc = require(`../assets/icons/grouped_logos_${tema}.png`)
            break
        default:
            imgSrc = ''
    }

    return (
        <div>
            <img
                src = {imgSrc}
                alt = "Content"
            />
            <button>
                BAIXAR MATERIAL DE APOIO
            </button>
            <button>
                <img
                    src = {download_icon}
                    alt = "Download Content"
                />
            </button>
        </div>
    )
}

export default DownloadContent