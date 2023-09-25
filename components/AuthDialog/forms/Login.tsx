import { Button, TextField } from '@material-ui/core';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  return (
    <div>
      <form>
        <TextField className="mb-20" size="small" label="Почта" variant="outlined" fullWidth required />
        <TextField
          className="mb-20"
          size="small"
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <div className="d-flex align-center justify-between">
          <Button color="primary" variant="contained">
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
