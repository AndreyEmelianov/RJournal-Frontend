import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginFormSchema } from '../../../utils/schemas/loginValidation';
import { Button, TextField } from '@material-ui/core';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  console.log(form.formState.errors);

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          {...form.register('email')}
          name="email"
          className="mb-20"
          size="small"
          label="Почта"
          variant="outlined"
          error={!!form.formState.errors.email?.message}
          helperText={form.formState.errors.email?.message}
          fullWidth
          required
        />
        <TextField
          {...form.register('password')}
          className="mb-20"
          size="small"
          label="Пароль"
          type="password"
          name="password"
          variant="outlined"
          error={!!form.formState.errors.password?.message}
          helperText={form.formState.errors.password?.message}
          fullWidth
          required
        />
        <div className="d-flex align-center justify-between">
          <Button type="submit" color="primary" variant="contained">
            Войти
          </Button>
          <Button onClick={onOpenRegister} color="primary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
};
