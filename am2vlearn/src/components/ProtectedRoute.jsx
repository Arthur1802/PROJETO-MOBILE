import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authentication.js';

const ProtectedRoute = ({ element }) => {
    if (!isAuthenticated()) {
        alert('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />;
    }

    return element;
}

export default ProtectedRoute;