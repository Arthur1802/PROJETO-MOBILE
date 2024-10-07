import React, { useState } from 'react'
import '../styles/components/Modal.css'

const EditorDeCodigo = ({ id, formatarCodigo }) => {
    const [codigo, setCodigo] = useState('')

    return (
        <div id = {id} className = "modal" tabIndex = "-1">
            <div className = "modal-dialog">
                <div className = "modal-content radius-5">
                    <div className = "d-flex justify-content-center py-3 px-4">
                        <h5 className = "modal-title">Editor de código</h5>
                        {/* <button type = "button" className = "btn-close" data-bs-dismiss = "modal" aria-label = "Close"></button> */}
                    </div>
                    <div className = "modal-body">
                        <textarea
                            id = "codigo"
                            placeholder = "Escreva o código aqui"
                            value = {codigo}
                            onChange = {(e) => setCodigo(e.target.value)}
                        ></textarea>
                    </div>
                    <div className = "modal-footer">
                        <button type = "button" className = "btn" data-bs-dismiss = "modal" onClick = {formatarCodigo(codigo)}>SALVAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorDeCodigo