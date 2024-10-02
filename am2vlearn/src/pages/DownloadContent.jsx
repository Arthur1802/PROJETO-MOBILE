import React from 'react'

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
    }

    return (
        <div>
            <img
                src = {imgSrc}
                alt = "Content"
            />
            <button>
                BAIXAR MATERIAL DE APOIO
                <img src = {download_icon} alt = "" />
            </button>
            <button>
                <img
                    src = {download_icon}
                    alt = ""
                />
            </button>
        </div>
    )
}

export default DownloadContent