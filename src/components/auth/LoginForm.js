import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../../helpers/validation/AuthValidInput';
import css from './Auth.module.scss';
import { GoogleLogin } from 'react-google-login';
import api from '../../services/api';
require('dotenv').config();

export default function Login() {
  const handleLogin = async credentials => {
    const password = credentials.googleId;
    const email = credentials.Ts.Et;
    const name = credentials.Ts.Me;
    const token = credentials.tokenId;
    console.log(credentials);
    const data = await api.loginGoogle({ email, password, name, token });
    await dispatch(authOps.register({ name, email, password }));

    dispatch(authOps.login({ email, password }));
  };

  const dispatch = useDispatch();
  // const onSubmit = async () => {
  //   const data = await api.loginGoogle();
  //   const { email, password } = data;
  //   dispatch(authOps.login({ email, password }));
  // };

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
              {/* <button onClick={onSubmit} className={css.Google} type="button">
                Google
              </button> */}

              <GoogleLogin
                clientId="845032362218-gc7ptsskpdk7s2tld7jmc0kg7a0uo0g4.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
              />

              <label className={css.inputTitle}>
                Email <span className={css.required}>*</span>
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
                Password <span className={css.required}>*</span>
              </label>
              <Field
                autoComplete="on"
                type="password"
                name="password"
                placeholder="Password"
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
                Login
              </button>

              <NavLink className={css.registerFormTextLinc} to="/register">
                Register
              </NavLink>
            </Form>
          )}
        </Formik>
      </div>
      <div className={css.deskriptionWraperLogin}>
        <h1 className={css.titleLogin}>
          Books are the ships of thoughts,<br></br> wandering through the waves{' '}
          <br></br>
          of time.
        </h1>
        <div className={css.deskriptionTextWrapper}>
          <p className={css.deskriptionText}>Francis Bacon</p>
        </div>
      </div>
    </div>
  );
}
