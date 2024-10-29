import { useNavigate, useLocation } from 'react-router-dom'
import download_icon from '../../../assets/icons/download.svg'
import play_icon from '../../../assets/icons/play_icon.svg'
import './DownloadContent.css'
import BackBtn from '../../BackBtn/BackBtn'

import { useCounterHtmlContext } from '../../../hooks/useCounterHtmlContext'

const DownloadContent = () => {

    const { counter } = useCounterHtmlContext()

    const navigate = useNavigate()
    const location = useLocation()
    const { subject } = location.state || {}
    const tema = 'light'

    let imgSrc = `src/assets/icons/${subject}_${tema}.svg`

    console.log('Página para baixar conteúdo')

    return (
        <div className = "DownloadContent">

            {`${counter}%`}
            <BackBtn />

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