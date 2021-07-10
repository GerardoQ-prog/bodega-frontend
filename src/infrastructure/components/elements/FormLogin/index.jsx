import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { Login } from "../../../../domain/models/Auth";
import { authService } from "../../../../domain/services/Auth.service";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../ui/Buttons";
import { InputText } from "../../ui/Inputs";
import { useStylesFormLogin } from "./styles";

const FormLogin = () => {
  const classes = useStylesFormLogin();
  const { form, onChange, onReset } = useForm(Login);
  const router = useHistory();
  const handleLogin = () => {
    authService.signIn({ form });
  };

  return (
    <div className={classes.global}>
      <div className={classes.container}>
        <Typography className={classes.title}>Iniciar Sesión</Typography>
        <InputText
          label="Correo electrónico"
          value={form.email}
          handleChange={onChange}
          name="email"
        />
        <br />
        <InputText
          label="Contraseña"
          value={form.password}
          handleChange={onChange}
          name="password"
          type="password"
        />
        <br />
        <ButtonPrimary text="INGRESAR" onClick={handleLogin} />
        <Typography
          className={classes.link}
          onClick={() => router.push("/register")}
        >
          Registrate
        </Typography>
      </div>
    </div>
  );
};

export default FormLogin;
