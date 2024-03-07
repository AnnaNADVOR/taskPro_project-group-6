import style from '../../../AuthNav/AuthNav.module.css';
import sprite from '../../../../assets/images/sprite.svg';
import Schema from '../Schemas/Schemas'
import { useState } from 'react';
/* // useEffect
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { isLoggedIn } from '../../../redux/auth/selectors'; */
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};
export default function LoginForm() {
  /*   const dispatch = useDispatch();
  const isLogin = useSelector(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) navigate('/home', { replace: true });
  }, [isLogin, navigate]); */
const [showPassword, setShowPassword] = useState(false);
const handleTogglePassword = () => {
      setShowPassword(!showPassword);};
const handleForSubmit = async (values, { resetForm }) => {
    // await dispatch(login(values));
    resetForm();
  };

return (
 <Formik
        initialValues={initialValues}
        validationSchema={Schema}
    onSubmit={handleForSubmit}
      >
 <Form className={style.form}>
    <div className={style.inputBox}>
        <div className={style.wrap}>
            <ErrorMessage
                name="email"
                render={message => (
                <p className={style.errorMessage}>{message}</p>
                )}
            />
        <Field
                className={style.input}
                type="text"
                name="email"
                placeholder="Enter your email"
        />
        </div>
        <div className={style.wrap}>
            <ErrorMessage
                name="password"
                render={message => (
                <p className={style.errorMessage}>{message}</p>
                )}
            />
        <Field
                className={style.input}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
            />
        <div className={style.wrapper}>
                <svg 
                  width={18}
                  height={18}
                  className={style.icon}
                  onClick={handleTogglePassword}
                >
                  <use href={`${sprite}#password-eye-18`} />
                </svg>
        </div>
        </div>
    </div>
          <button className={style.button} type="submit">
          Log In Now
        </button>
        </Form>
      </Formik>
    );
  }
