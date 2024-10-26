import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../utils/authentication/auth'

const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
        toast.error('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />
    }

    return children
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute