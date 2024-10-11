import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/contexts/authContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { userLoggedin } = useAuth();
    if (!userLoggedin) {
        toast.error('Você precisa estar logado para acessar esta página!')
        return <Navigate to = "/" replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute;