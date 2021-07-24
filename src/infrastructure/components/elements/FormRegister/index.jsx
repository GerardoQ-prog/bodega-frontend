import { Dialog, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../../../../domain/services/Auth.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../ui/Buttons";
import { InputName, InputNumber, InputText } from "../../ui/Inputs";
import { useStylesFormRegister } from "./style";

const FormRegister = () => {
  const classes = useStylesFormRegister();
  const router = useHistory();

  const { form, onChange } = useForm({
    firstname: "",
    lastname: "",
    phone: "",
    dni: "",
    email: "",
    password: "",
    name: "",
    address: "",
    ruc: "",
  });

  const { dialog, onChangeDialog } = useDialog(false);

  const handleRegister = () => {
    authService.signUp({ form, onChangeDialog });
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Registro</Typography>
      <Grid container>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputName
            label="Nombres completos"
            name="firstname"
            value={form.firstname}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputName
            label="Apellidos completos"
            name="lastname"
            value={form.lastname}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputNumber
            label="DNI"
            name="dni"
            value={form.dni}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputNumber
            label="Celular"
            name="phone"
            value={form.phone}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputText
            label="Email"
            name="email"
            value={form.email}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputText
            label="Contraseña"
            name="password"
            value={form.password}
            handleChange={onChange}
            type={"password"}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputName
            label="Nombre de bodega"
            name="name"
            value={form.name}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputText
            label="Dirección"
            name="address"
            value={form.address}
            handleChange={onChange}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.grid}>
          <InputNumber
            label="RUC"
            name="ruc"
            value={form.ruc}
            handleChange={onChange}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className={classes.grid}
          style={{ display: "flex", alignItems: "flex-end" }}
        >
          <ButtonPrimary text="Registrar" onClick={handleRegister} />
        </Grid>
      </Grid>
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>
            Usuario registrado correctamente
          </Typography>
          <ButtonPrimary
            text="Iniciar sesión"
            onClick={() => router.push("/")}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default FormRegister;
