import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { useStylesVoucher } from "./style";

const Voucher = ({ selectProducts = [], render }) => {
  const classes = useStylesVoucher();
  const numberSale = parseInt(
    Math.random() * (999999999 - 111111111) + 111111111
  );

  const totalPrice = parseFloat(
    selectProducts.reduce(
      (accumulator, item) => accumulator + item.priceTotal,
      0
    )
  );

  return (
    <div className={classes.contentCard}>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>N°Venta</Typography>
        <Typography className={classes.title}>{numberSale}</Typography>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.header}>
                Nombre
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Cantidad
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Precio unitario
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Precio total
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Acciones
              </TableCell>
              <TableCell align="left" className={classes.header}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectProducts &&
              selectProducts.length > 0 &&
              selectProducts.map((item, key) => {
                return <>{render(item, key)}</>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Total : </Typography>
        <Typography className={classes.title}>s/{totalPrice}</Typography>
      </div>
      <ButtonPrimary text="Realizar venta" />
      <ButtonSecondary text="Cancelar venta" />
    </div>
  );
};

export default Voucher;
