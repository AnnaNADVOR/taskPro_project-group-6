import { useState } from 'react';
import { register } from '../../../../redux/auth/operation';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Schema from '../Schemas/Schemas';
import ActiveAuth from 'components/AuthNav/AuthNav';
import { selectIsLoadingRegister } from '../../../../redux/auth/selectors';
import sprite from '../../../../assets/images/sprite.svg';

import style from '../../../AuthNav/AuthNav.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const isLoading = useSelector(selectIsLoadingRegister);

  return (
    <div className={style.box}>
      <ActiveAuth />
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.form} autoComplete="off">
            <div className={style.inputBox}>
              <div className={style.wrap}>
                <ErrorMessage
                  name="name"
                  render={message => (
                    <p className={style.errorMessage}>{message}</p>
                  )}
                />
                <Field
                  className={style.input}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
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
              {isLoading ? 'Loading...' : 'Register Now'}{' '}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
