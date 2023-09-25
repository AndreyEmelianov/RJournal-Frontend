import * as yup from 'yup';

export const LoginFormSchema = yup
  .object({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязательный'),
  })
  .required();
