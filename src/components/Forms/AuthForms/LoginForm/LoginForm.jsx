import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Schema from '../Schemas/Schemas';

import { logIn } from '../../../../redux/auth/operation';
import { selectIsLoadingLogin } from '../../../../redux/auth/selectors';
import ActiveAuth from 'components/AuthNav/AuthNav';
import sprite from '../../../../assets/images/sprite.svg';

import style from '../../../AuthNav/AuthNav.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingLogin);
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.box}>
      <ActiveAuth />
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
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
                  {showPassword ? (
                    <svg
                      width={18}
                      height={18}
                      className={style.icon}
                      onClick={handleTogglePassword}
                    >
                      <use href={`${sprite}#password-eye-18`} />
                    </svg>
                  ) : (
                    <svg
                      width={18}
                      height={18}
                      className={style.icon}
                      onClick={handleTogglePassword}
                    >
                      <use href={`${sprite}#icon-eye-off-1`} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <button
              className={style.button}
              type="submit"
              disabled={isSubmitting || isLoading}
            >
              {isLoading ? 'Loading...' : 'Log In Now'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
