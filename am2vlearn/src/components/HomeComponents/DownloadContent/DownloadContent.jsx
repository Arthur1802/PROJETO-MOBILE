import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import download_icon from '../../../assets/icons/download.svg'
import play_icon from '../../../assets/icons/play_icon.svg'
import BackBtn from '../../BackBtn/BackBtn'
import './DownloadContent.css'

import { useCounterHtmlContext } from '../../../hooks/useCounterHtmlContext'

const DownloadContent = ({ selectedSubject, setQuestoesConcluidas, isPlaying, setIsPlaying }) => {

    const { counter } = useCounterHtmlContext()

    const theme = localStorage.getItem('theme')

    let contentImg = import(`../../../assets/icons/${selectedSubject}_${theme}.svg`)

    console.log('Página para baixar conteúdo')

    const startGame = () => {
        if (!isPlaying) {
            setIsPlaying(true)
        }

        {<Navigate to = {`/game${selectedSubject === 'grouped_logos' ? 'all' : selectedSubject}`} subject = {selectedSubject} setQuestoesConcluidas = {setQuestoesConcluidas} />}
    }

    return (
        <div className = "DownloadContent">

            {`${counter}%`}
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