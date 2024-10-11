import React from 'react';
import '../styles/components/AlternaTema.css';

const AlternaTema = ({ handleChange, isChecked }) => {
    return (
        <div className = 'toggle-container'>
            <input
                type = 'checkbox'
                id = 'check'
                className = 'toggle'
                onChange = {handleChange}
                checked = {isChecked}
            />
            <label htmlFor = 'check'>{isChecked ? 'Modo claro' : 'Modo escuro'}</label>
        </div>
    );
}

export default AlternaTema;