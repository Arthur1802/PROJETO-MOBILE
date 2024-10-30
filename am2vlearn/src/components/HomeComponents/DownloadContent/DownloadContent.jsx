import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import download_icon from '../../../assets/icons/download.svg'
import logoLight from '../../../assets/logo/sm_logo_light.svg'
import logoDark from '../../../assets/logo/sm_logo_dark.svg'
import play_icon from '../../../assets/icons/play_icon.svg'
import BackBtn from '../../BackBtn/BackBtn'
import './DownloadContent.css'

const DownloadContent = () => {
    const theme = localStorage.getItem('theme')
    const navigate = useNavigate()

    const selectedSubject = window.history.state.subject

    const contentImg = theme === 'light' ? logoLight : logoDark

    const startGame = () => {
        navigate(`/game${selectedSubject === 'grouped_logos' ? 'all' : selectedSubject}`, {
            state: { subject: selectedSubject }
        })
    }

    return (
        <div className = "DownloadContent">
            <BackBtn />

            <img
                className = "content-img"
                src = {contentImg}
                alt = "Content"
            />

            <a
                href = {`/content/${selectedSubject}.pdf`}
                download
                className = "download-content-btns download-content-btn poppins-semibold"
            >
                BAIXAR MATERIAL DE APOIO
                <img
                    src = {download_icon}
                    alt = ""
                />
            </a>

            <button
                className = "download-content-btns start-btn poppins-semibold"
                onClick = {startGame}
            >
                COMEÇAR
                <img
                    src = {play_icon}
                    alt = ""
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