import { useEffect, useRef } from "react"
import { Slide, ToastContainer } from "react-toastify"

const NotificationContainer = (autoClose, hideProgressBar) => {
    const theme = useRef(localStorage.getItem('theme'))
    useEffect(() => {
        const handleStorageChange = () => {
            theme.current = localStorage.getItem('theme')
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    return (
        <div>
            <ToastContainer
                position = "top-center"
                autoClose = {autoClose}
                hideProgressBar = {hideProgressBar}
                newestOnTop = {false}
                closeOnClick = {false}
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover
                theme = {theme.current}
                transition = {Slide}
            />
        </div>
    )
}

export default NotificationContainer