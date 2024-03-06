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

const App = () => {
    return (
        <>
            <Link to="/">Welcome</Link>
            <Link to="/home" style={{ marginRight:15, marginLeft:15, }}>Home</Link>
                       
            <Routes>
                <Route path="/" element={<WelcomePage />} />                
                <Route path="/auth" element={<AuthPage />} >
                    <Route path="register" element={<RegisterForm/>} /> 
                    <Route path="login" element={<LoginForm/>} />                     
                </Route>                
                <Route path="/home" element={<HomePage />}/>
            </Routes>   
        </>  
    )
};

export default App; 
