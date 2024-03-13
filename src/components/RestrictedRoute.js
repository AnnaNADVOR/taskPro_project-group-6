import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

function RestrictedRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}

export { RestrictedRoute };
