import React, { useContext } from 'react';

import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../../helpers/validation/AuthValidInput';
import css from './Auth.module.scss';

import { LangContext } from '../App/App';

export default function Login() {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  return (
    <div className={css.mainWraper}>
      <div className={css.formWraperLogin}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={values => {
            const { email, password } = values;

            dispatch(authOps.login({ email, password }));
          }}
        >
          {({ touched, errors }) => (
            <Form className={css.registerFormLogin}>
              <a href="https://books-reading-backend.herokuapp.com/api/auth/google">
                <button className={css.Google} type="button">
                  {language.loginPage.google}
                </button>
              </a>

              <label className={css.inputTitle}>
                {language.loginPage.email}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                autoComplete="on"
                type="email"
                name="email"
                placeholder="your@email.com"
                className={`${css.registerFormInput} ${
                  touched.email && errors.email ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className={css.errorMessageEmailLogin}
              />

              <label className={css.inputTitle}>
                {language.loginPage.password}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                autoComplete="on"
                type="password"
                name="password"
                placeholder={language.loginPage.password}
                className={`${css.registerFormInput}  ${
                  touched.password && errors.password ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className={css.errorMessagePasswordLogin}
              />

              <button className={css.registerPageButton} type="submit">
                {language.loginPage.button}
              </button>

              <NavLink className={css.registerFormTextLinc} to="/register">
                {language.loginPage.link}
              </NavLink>
            </Form>
          )}
        </Formik>
      </div>
      <div className={css.deskriptionWraperLogin}>
        <h1 className={css.titleLogin}>{language.loginPage.cite}</h1>
        <div className={css.deskriptionTextWrapper}>
          <p className={css.deskriptionText}>{language.loginPage.author}</p>
        </div>
      </div>
    </div>
  );
}
