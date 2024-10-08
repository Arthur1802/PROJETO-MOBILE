import React from 'react'
import back_icon from '../../assets/icons/arrow-left.svg'
import './BackBtn.css'

const BackBtn = () => {
    const handleBack = () => {
        window.history.back()
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