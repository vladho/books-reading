// import { useDispatch } from "react-redux";
// import { authOps } from "../../redux/auth";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { regSchema } from "./utilsAuth/AuthValidInput";
import css from "./Auth.module.scss";
// import useDeviceSizes from "./utilsAuth/useDeviceSize";

export default function Register() {
  // const dispatch = useDispatch();

  // const { isTabletDevice, isDesktopDevice } = useDeviceSizes();

  return (
    <div className={css.formWraper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={regSchema}
        onSubmit={(values) => {
          const { email, password } = values;

          // dispatch(authOps.register({ email, password }));
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form className={css.registerForm}>
            <button className={css.Google} type="submit">
              Google
            </button>
            <label className={css.inputTitle}>
              Name <span>*</span>
            </label>
            <Field
              type="name"
              name="name"
              placeholder="..."
              className={`${css.registerFormInput} ${
                touched.name && errors.name ? ` ${css.isinvalid}` : ""
              }`}
            />
            <ErrorMessage
              className={css.errorMessageEmail}
              name="email"
              component="div"
            />
            <label className={css.inputTitle}>
              Email <span>*</span>
            </label>
            <Field
              type="email"
              name="email"
              placeholder="your@email.com"
              className={`${css.registerFormInput} ${
                touched.email && errors.email ? ` ${css.isinvalid}` : ""
              }`}
            />
            <ErrorMessage
              className={css.errorMessageEmail}
              name="email"
              component="div"
            />
            <label className={css.inputTitle}>
              Password <span>*</span>
            </label>
            <Field
              autoComplete="on"
              type="password"
              name="password"
              placeholder="..."
              className={`${css.registerFormInput} ${
                touched.password && errors.password ? ` ${css.isinvalid}` : ""
              }`}
            />
            <ErrorMessage
              className={css.errorMessagePassword}
              name="password"
              component="div"
            />
            <label className={css.inputTitle}>
              Confirm password <span>*</span>
            </label>
            <Field
              autoComplete="on"
              type="password"
              name="confirmPassword"
              placeholder="..."
              className={`${css.registerFormInput} ${
                touched.password && errors.password ? ` ${css.isinvalid}` : ""
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
              Already have an account? {"  "}
              <NavLink className={css.registerFormText} to="/login" exact>
                Log in
              </NavLink>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
