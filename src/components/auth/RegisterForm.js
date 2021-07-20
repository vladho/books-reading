import { useDispatch } from 'react-redux';
import { authOps } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { regSchema } from '../../helpers/validation/AuthValidInput';
import css from './Auth.module.scss';
import useDeviceSizes from './utilsAuth/useDeviceSize';

export default function Register() {
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
            const { email, password } = values;

            dispatch(authOps.register({ email, password }));
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className={css.registerForm}>
              <button className={css.Google} type="submit">
                Google
              </button>
              <label className={css.inputTitle}>
                Name <span className={css.required}>*</span>
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
                Email <span className={css.required}>*</span>
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
                Password <span className={css.required}>*</span>
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
                Confirm password <span className={css.required}>*</span>
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
                Register
              </button>

              <p className={css.registerFormText}>
                Already have an account? {'  '}
                <NavLink className={css.registerFormTextLinc} to="/login" exact>
                  Log in
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      {!isMobileDevice && (
        <div>
          <h1 className={css.title}>Books Reading</h1>
          <div className={css.deskriptionWraper}>
            <h2 className={css.secondaryTitle}>Will help you to</h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                Create your goal faster and proceed to read
              </li>
              <li className={css.listItem}>
                Divide process proportionally for each day{' '}
              </li>
              <li className={css.listItem}>Track your success</li>
            </ul>
            <h2 className={css.secondaryTitle}>You may also</h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                Pose your own independent point of view
              </li>
              <li className={css.listItem}>
                Improve your professional skills according to new knowledge
              </li>
              <li className={css.listItem}>
                Become an interesting interlocutor
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
