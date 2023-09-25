import { Button, TextField } from '@material-ui/core';

interface RegisterFormProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenRegister, onOpenLogin }) => {
  return (
    <div>
      <form>
        <TextField className="mb-20" size="small" label="Имя и фамилия" variant="outlined" fullWidth required />
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
            Зарегистрироваться
          </Button>
          <Button onClick={onOpenLogin} color="primary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};
