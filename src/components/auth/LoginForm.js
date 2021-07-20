import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../../helpers/validation/AuthValidInput';
import css from './Auth.module.scss';

export default function Login() {
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
          {({ touched, errors, isSubmitting }) => (
            <Form className={css.registerFormLogin}>
              <button className={css.Google} type="button">
                Google
              </button>

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
        <p className={css.deskriptionText}>Francis Bacon</p>
      </div>
    </div>
  );
}
