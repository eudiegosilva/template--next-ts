import * as yup from 'yup';

const loginValidationSchema = yup
  .object({
    email: yup
      .string()
      .email('Must be a valid email.')
      .required('Email is required!'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters.')
      .required('Password is required!')
  })
  .required();

export { loginValidationSchema };
