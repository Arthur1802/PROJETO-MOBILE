import React from 'react'
import back_icon from '../../assets/icons/arrow-left.svg'
import './BackBtn.css'
import { useNavigate } from 'react-router-dom'

const BackBtn = ({ link }) => {
    const navigate = useNavigate()

    const handleBack = () => {
        if (link !== '') {
            navigate(link)        
        } 
        else {
            window.history.back()
        }
    }

    return (
        <div>
            <button className = 'back-btn poppins-semibold' onClick = {handleBack}>
                <img src = {back_icon} alt = "" className = "icons"></img>
            </button>
        </div>
    )
}

export default BackBtn