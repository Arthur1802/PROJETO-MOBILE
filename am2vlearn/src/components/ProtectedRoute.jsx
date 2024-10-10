import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/contexts/authContext';

const ProtectedRoute = ({ element }) => {
    const { userLoggedin } = useAuth();
    if (!userLoggedin) {
        alert('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />;
    }

    return element;
}

export default ProtectedRoute;