import { Route, Routes} from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage/HomePage")); 
const AuthPage = lazy(() => import("pages/AuthPage/AuthPage"));
const WelcomePage = lazy(() => import("pages/WelcomePage/WelcomePage")); 

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/:id" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />}/>
        </Routes> 
    )
};

export default App; 
