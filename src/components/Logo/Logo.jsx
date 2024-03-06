import React from 'react';
import style from './Logo.module.css'
import { Link } from 'react-router-dom';

const Logo = () => {
    const linkStyles = {
    textDecoration: 'underline'
  };
    return (
        <span className={style.logo}>
                ©
                <Link to="/"  style={linkStyles}> TaskPro </Link>
                2024
        </span>  
    )
}
export default Logo;