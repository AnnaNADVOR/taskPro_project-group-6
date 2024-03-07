import { Link, Route, Routes} from "react-router-dom";
// import { lazy } from "react";
// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
// const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage")); 
import WelcomePage from "pages/WelcomePage/WelcomePage";
import HomePage from "pages/HomePage/HomePage";
import AuthPage from "pages/AuthPage/AuthPage";
import RegisterForm from "components/Forms/AuthForms/RegisterForm/RegisterForm";
import LoginForm from "components/Forms/AuthForms/LoginForm/LoginForm";
import ScreensPage from "components/ScreensPage/Screens.page";
import SharedLayout from "components/SharedLayuout/SharedLayout";
import { Suspense } from "react";

const App = () => {
    return (
        <>
            <Link to="/">Welcome</Link>
            <Link to="/home" style={{ marginRight:15, marginLeft:15, }}>Home</Link>
            <Suspense>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/auth" element={<AuthPage />} >
                        <Route path="register" element={<RegisterForm/>} /> 
                        <Route path="login" element={<LoginForm/>} />                     
                    </Route>  
                    <Route path="/home" element={<SharedLayout />} >
                        <Route index element={<HomePage/>} />
                        <Route path="/home/rte" element={<ScreensPage />} />
                    </Route>            
                </Routes>
            </Suspense>
        </>  
    )
};

export default App; 
