
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export default function WelcomePage() {
  return (
  
      <Suspense>
        <Outlet />
      </Suspense>

  );
}
