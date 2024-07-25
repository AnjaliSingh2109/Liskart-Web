import * as Yup from 'yup';
// We can use zod also Its a standard package for validation
export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});
