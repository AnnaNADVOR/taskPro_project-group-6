import { Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
// const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage")); 
import WelcomePage from "pages/WelcomePage/WelcomePage";
import HomePage from "pages/HomePage/HomePage";
import AuthPage from "pages/AuthPage/AuthPage";
import ScreensPage from "components/ScreensPage/Screens.page";
import SharedLayout from "components/SharedLayuout/SharedLayout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/auth/:id" element={<AuthPage />} />
                <Route path="/home" element={<SharedLayout />} >
                    <Route index element={<HomePage/>} />
                    <Route path="/home/rte" element={<ScreensPage />} />
                </Route>            
            </Routes>          
        </>  
    )
};

export default App; 
