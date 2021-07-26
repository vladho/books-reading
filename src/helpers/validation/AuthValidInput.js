import * as Yup from 'yup';

export const regSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Enter more than 2 characters').required(),
  email: Yup.string().required().email('Please enter a valid address'),
  password: Yup.string().min(5, 'Enter more than 5 characters').required(),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().email('Please enter a valid address'),
  password: Yup.string().min(5, 'Enter more than 5 characters').required(),
});
