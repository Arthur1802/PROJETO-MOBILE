import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth.js';

const ProtectedRoute = ({ element }) => {
    if (!isAuthenticated()) {
        return <Navigate to = "/welcome" replace />;
    }

    return element;
}

export default ProtectedRoute;