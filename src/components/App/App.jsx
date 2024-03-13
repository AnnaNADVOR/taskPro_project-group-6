import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SharedLayout from 'components/SharedLayuout/SharedLayout';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from '../../redux/auth/operation';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const ScreensPage = lazy(() => import('../ScreensPage/Screens.page'));
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Suspense>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={
              <RestrictedRoute component={AuthPage} redirectTo="/home" />
            }
          />
          <Route path="/home" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute component={HomePage} redirectTo="/auth/login" />
              }
            />
            <Route
              path="/home/:boardTitle"
              element={
                <PrivateRoute
                  component={ScreensPage}
                  redirectTo="/auth/login"
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Toaster
          position="top-center"
          containerStyle={{
            top: 60,
            left: 110,
            bottom: 20,
            right: 110,
          }}
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          toastOptions={{
            success: {
              icon: '🎉',
              style: {
                background: 'var(--toastbgsuccess)',
                color: 'var(--toasttext)',
                border: '2px solid var(--toasbordersuccess)',
                padding: '16px',
                duration: '500',
              },
            },
            error: {
              icon: '❌',
              style: {
                background: 'var(--toastbgerror)',
                color: 'var(--toasttexterr)',
                border: 'var(--toastbordererror)',
                padding: '16px',
                duration: '500',
              },
            },
          }}
        />
      </Suspense>
    )
  );
};

export default App;
