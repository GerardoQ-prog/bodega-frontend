import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonPrimary } from "../../ui/Buttons";
import { useStylesSales } from "./style";

const Sales = ({ data, error, render }) => {
  const classes = useStylesSales();
  const router = useHistory();

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Ventas:</Typography>
        <ButtonPrimary
          text="Crear venta"
          onClick={() => router.push("/sales-new")}
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
    </div>
  );
};

export default Sales;
