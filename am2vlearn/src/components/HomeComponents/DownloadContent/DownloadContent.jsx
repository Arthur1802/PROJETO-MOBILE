import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import download_icon from '../../../assets/icons/download.svg'
import logoLight from '../../../assets/logo/sm_logo_light.svg'
import logoDark from '../../../assets/logo/sm_logo_dark.svg'
import play_icon from '../../../assets/icons/play_icon.svg'
import BackBtn from '../../BackBtn/BackBtn'
import './DownloadContent.css'

const DownloadContent = ({ selectedSubject, setQuestoesConcluidas, isPlaying, setIsPlaying }) => {

    const theme = localStorage.getItem('theme')

    let contentImg = theme === 'light' ?  logoLight : logoDark

    console.log('Página para baixar conteúdo')

    const startGame = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }

        {<Navigate to = {`/game${selectedSubject === 'grouped_logos' ? 'all' : selectedSubject}`} subject = {selectedSubject} setQuestoesConcluidas = {setQuestoesConcluidas} />}
    }

    return (
        <div className = "DownloadContent">

            <BackBtn />

            <img
                className = "content-img"
                src = {contentImg}
                alt = "Content"
            />
            
            <a href = {`/content/${selectedSubject}.pdf`} download className = 'download-content-btns download-content-btn poppins-semibold'>
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
                    onClick = {() => startGame()}
                />
            </button>
        </div>
    )
}
DownloadContent.propTypes = {
    selectedSubject: PropTypes.string.isRequired,
    setQuestoesConcluidas: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    setIsPlaying: PropTypes.func.isRequired
}

export default DownloadContent