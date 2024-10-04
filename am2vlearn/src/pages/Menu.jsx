import React from 'react'
import sm_logo from '../assets/logo/sm_logo_light.svg'

import SubjectMenu from '../pages/SubjectMenu'

const Menu = () => {
    return (
        <div>
            <img className = "sm_logo" src = {sm_logo} alt = "Logo"></img>
            <h1>Escolha a matéria</h1>
            <div>
                <SubjectMenu />
            </div>
        </div>
    )
}

export default Menu