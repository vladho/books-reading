import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { regSchema } from '../../helpers/validation/AuthValidInput';
import css from './Auth.module.scss';
import useDeviceSizes from './utilsAuth/useDeviceSize';
import { LangContext } from '../App/App';

export default function Register() {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const { isMobileDevice } = useDeviceSizes();

  return (
    <div className={css.mainWraper}>
      <div className={css.formWraper}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={regSchema}
          onSubmit={values => {
            const { name, email, password } = values;

            dispatch(authOps.register({ name, email, password }));
          }}
        >
          {({ touched, errors }) => (
            <Form className={css.registerForm}>
              <a href="https://books-reading-backend.herokuapp.com/api/auth/google">
                <button className={css.Google} type="button">
                  {language.registrationPage.google}
                </button>
              </a>
              <label className={css.inputTitle}>
                {language.registrationPage.name}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                type="name"
                name="name"
                placeholder="..."
                className={`${css.registerFormInput} ${
                  touched.name && errors.name ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                className={css.errorMessageName}
                name="name"
                component="div"
              />
              <label className={css.inputTitle}>
                {language.registrationPage.email}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                type="email"
                name="email"
                placeholder="your@email.com"
                className={`${css.registerFormInput} ${
                  touched.email && errors.email ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                className={css.errorMessageEmail}
                name="email"
                component="div"
              />
              <label className={css.inputTitle}>
                {language.registrationPage.password}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                autoComplete="on"
                type="password"
                name="password"
                placeholder="..."
                className={`${css.registerFormInput} ${
                  touched.password && errors.password ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                className={css.errorMessagePassword}
                name="password"
                component="div"
              />
              <label className={css.inputTitle}>
                {language.registrationPage.confirmPassword}{' '}
                <span className={css.required}>*</span>
              </label>
              <Field
                autoComplete="on"
                type="password"
                name="confirmPassword"
                placeholder="..."
                className={`${css.registerFormInput} ${
                  touched.password && errors.password ? ` ${css.isinvalid}` : ''
                }`}
              />
              <ErrorMessage
                className={css.errorMessageConfirmPassword}
                name="confirmPassword"
                component="div"
              />
              <button className={css.registerPageButton} type="submit">
                {language.registrationPage.button}
              </button>

              <p className={css.registerFormText}>
                {language.registrationPage.linkQuestion} {'  '}
                <NavLink className={css.registerFormTextLinc} to="/login" exact>
                  {language.registrationPage.link}
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      {!isMobileDevice && (
        <div>
          <h1 className={css.title}>{language.registrationPage.infoTitle}</h1>
          <div className={css.deskriptionWraper}>
            <h2 className={css.secondaryTitle}>
              {language.registrationPage.infoSubtitle1}
            </h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                {language.registrationPage.subTitle1_text1}
              </li>
              <li className={css.listItem}>
                {language.registrationPage.subTitle1_text2}{' '}
              </li>
              <li className={css.listItem}>
                {language.registrationPage.subTitle1_text3}
              </li>
            </ul>
            <h2 className={css.secondaryTitle}>
              {language.registrationPage.infoSubtitle2}
            </h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                {language.registrationPage.subTitle2_text1}
              </li>
              <li className={css.listItem}>
                {language.registrationPage.subTitle2_text2}
              </li>
              <li className={css.listItem}>
                {language.registrationPage.subTitle2_text3}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
