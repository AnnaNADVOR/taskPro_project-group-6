import { Route, Routes } from "react-router-dom";
import WelcomePage from "pages/WelcomePage/WelcomePage";
import SharedLayout from "components/SharedLayuout/SharedLayout";
import { refreshUser } from "../../redux/auth/operation";
import { useAuth } from "hooks/useAuth";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const ScreensPage = lazy(()=>import("../ScreensPage/Screens.page"))

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth(); 
    useEffect(() => {
    dispatch(refreshUser())
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
          </Routes>
        </Suspense>
      )
    );
};

export default App; 