import { Dialog, Grid, Typography } from "@material-ui/core";
import React from "react";
import { createInventorie } from "../../../../domain/services/Inventories.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../ui/Buttons";
import { InputSelect } from "../../ui/Inputs";
import { useStylesInventories } from "./style";

const Inventories = ({ data, error, render, dataCategories }) => {
  const classes = useStylesInventories();
  const { dialog, onChangeDialog } = useDialog(false);
  const { form, onChange, onReset } = useForm({
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
    categoryId: "",
  });

  React.useEffect(() => {
    onReset();
  }, [dialog]);

  const handleCreateInventorie = () => {
    createInventorie({
      form,
      handleOpen: onChangeDialog,
    });
  };

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Inventarios:</Typography>
        <ButtonPrimary
          text="Crear inventario"
          width={200}
          onClick={onChangeDialog}
        />
      </div>
      <Grid container spacing={3}>
        {!data && !error && <Typography>Cargando</Typography>}
        {data && data.data.length === 0 && (
          <Typography>No hay inventarios</Typography>
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
          <Typography className={classes.title}>Crear Inventario</Typography>
          <InputSelect
            label="Nombre de la categoria"
            name="categoryId"
            value={form.categoryId}
            handleChange={onChange}
            data={dataCategories?.data}
            id
          />
          <ButtonPrimary
            text="Crear Inventario"
            onClick={handleCreateInventorie}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Inventories;
