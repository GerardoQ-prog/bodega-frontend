import { Dialog, Grid, Typography } from "@material-ui/core";
import React from "react";
import { createCategories } from "../../../../domain/services/Categories.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../ui/Buttons";
import { InputName } from "../../ui/Inputs";
import { useStylesCategories } from "./style";

const Categories = ({ data, render, error }) => {
  const classes = useStylesCategories();
  const { dialog, onChangeDialog } = useDialog(false);
  const { form, onChange, onReset } = useForm({
    name: "",
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
  });

  const handleCreateCategory = () => {
    createCategories({ form, id: 1, handleOpen: onChangeDialog });
  };

  React.useEffect(() => {
    if (!dialog) {
      onReset();
    }
  }, [dialog]);

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Categorias:</Typography>
        <ButtonPrimary
          text="Crear categoria"
          onClick={onChangeDialog}
          width={200}
        />
      </div>
      <Grid container spacing={3}>
        {!data && !error && <Typography>Cargando</Typography>}
        {data && data.data.length === 0 && (
          <Typography>No hay categorias</Typography>
        )}
        {data &&
          data.data.length > 0 &&
          data.data.map((item, index) => {
            return (
              <Grid item md={4} sm={6} xs={12} key={index}>
                {render(item)}
              </Grid>
            );
          })}
      </Grid>
      <Dialog open={dialog} onClose={onChangeDialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>Crear Categoria</Typography>
          <InputName
            label="Nombre de la categoria"
            name="name"
            value={form.name}
            handleChange={onChange}
          />
          <ButtonPrimary
            text="Crear categoria"
            onClick={handleCreateCategory}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Categories;
