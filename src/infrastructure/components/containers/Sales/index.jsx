import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonPrimary } from "../../ui/Buttons";
import { useStylesSales } from "./style";

const Sales = () => {
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
    </div>
  );
};

export default Sales;
