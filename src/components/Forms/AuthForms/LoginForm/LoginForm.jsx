import style from '../../../AuthNav/AuthNav.module.css';
import sprite from '../../../../assets/images/sprite.svg';
import Schema from '../Schemas/Schemas'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../../redux/auth/operation';
//import { useAuth } from '../../AuthForms/hooks/useAuth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import ActiveAuth from 'components/AuthNav/AuthNav';
import { selectIsLoadingLogin } from '../../../../redux/auth/selectors';


const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingLogin);


  const handleSubmit = (values, { resetForm}) => {
        dispatch(logIn(values));
        resetForm();
    };
const initialValues = {
  email: '',
  password: '',
};

const [showPassword, setShowPassword] = useState(false);
const handleTogglePassword = () => {
      setShowPassword(!showPassword);};
  

  return (
   <div className={style.box}>
  <ActiveAuth/>
 <Formik
       initialValues={initialValues} validationSchema={Schema} onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
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
          <button className={style.button} type="submit" disabled={isSubmitting || isLoading}>
         {isLoading ? 'Loading...' : 'Log In Now'}
        </button>
          </Form>
           )}
        </Formik>
 
     </div>
    );
  }
export default LoginForm;