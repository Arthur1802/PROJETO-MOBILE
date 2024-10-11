import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/contexts/authContext';

const ProtectedRoute = ({ children }) => {
    const { userLoggedin } = useAuth();
    if (!userLoggedin) {
        alert('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />;
    }

    return children;
}

export default ProtectedRoute;