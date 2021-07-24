import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { dateToSale } from "../../../helpers/utils/date";
import { useStylesDetailSale } from "./style";

const DetailSale = ({ data, error, render, saleId }) => {
  const classes = useStylesDetailSale();

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>N° de venta {saleId}</Typography>
        <Typography className={classes.title}>
          {data ? dateToSale(data.data[0]?.createdAt) : ""}
        </Typography>
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
      <Typography className={classes.title}>
        Precio Total de venta : s/{data ? data.data[0]?.priceTotal : ""}
      </Typography>
    </div>
  );
};

export default DetailSale;
