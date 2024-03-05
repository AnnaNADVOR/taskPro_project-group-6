import Welcome from '../../components/Welcome/Welcome';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function WelcomePage() {
  return (
  
      <Suspense fallback={<Loader />}>
        <Welcome/> 
        <Outlet />
      </Suspense>
  
  );
}

