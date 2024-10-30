import { Slide, toast } from "react-toastify"

let theme
const handleStorageChange = () => {
    theme = localStorage.getItem('theme')
}
window.addEventListener('storage', handleStorageChange())

export const Notify = (type, message, autoClose = 5000, hideProgressBar = false) => {
    const sendToContainer = (type, message) => {
        toast[type](message, {
            position: "top-center",
            autoClose: autoClose,
            hideProgressBar: hideProgressBar,
            closeOnClick: false,
            draggable: true,
            progress: undefined,
            theme: theme,
            transition: Slide
        })
    }

    switch (type) {
        case 'success':
            sendToContainer('success', message)
            break
        case 'error':
            sendToContainer('error', message)
            break
        case 'info':
            sendToContainer('info', message)
            break
        case 'warn':
            sendToContainer('warn', message)
            break
        default:
            break
    }
}