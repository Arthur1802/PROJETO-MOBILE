import React from 'react'
import './ErrorModal.css'

const ErrorModal = ({ error }) => {

    return (
        <div class = "modal" tabindex = "-1">
            <div class = "modal-dialog">
                <div class = "modal-content">
                    <div class = "modal-header">
                        <h5 class = "modal-title">Erro</h5>
                        <button type = "button" class = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button>
                    </div>
                    <div class = "modal-body">
                        <p>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal