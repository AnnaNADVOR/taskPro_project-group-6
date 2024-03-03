import { Link } from "react-router-dom";

const AuthPage = () => {
    return (
        <div>
            <Link to="register">Register</Link>
            <Link style={{ marginRight:15, marginLeft:15, }}to="login">Login</Link>
            <span>
                ©
                <Link to="/">TaskPro</Link>
                2024
            </span>
        </div>
    )
}

export default AuthPage;
