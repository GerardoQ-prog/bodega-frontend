import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { createSale } from "../../../../domain/services/Sales.service";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { useStylesVoucher } from "./style";
import useDialog from "../../../hooks/useDialog";

const Voucher = ({ selectProducts = [], render }) => {
  const classes = useStylesVoucher();
  const router = useHistory();

  const numberSale = parseInt(
    Math.random() * (999999999 - 111111111) + 111111111
  );
  const totalPrice = parseFloat(
    selectProducts.reduce(
      (accumulator, item) => accumulator + item.priceTotal,
      0
    )
  );

  const [message, setMessage] = React.useState("");
  const { dialog, onChangeDialog } = useDialog();

  const handleCreateSale = () => {
    createSale({
      data: {
        sales: selectProducts.map((item) => ({
          ...item,
          dateSale: new Date(),
          saleId: numberSale,
          priceTotal: totalPrice,
        })),
      },
      setMessage,
      onChangeDialog,
    });
  };

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
              selectProducts.map((item, index) => {
                return <Fragment key={index}>{render(item)}</Fragment>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Total : </Typography>
        <Typography className={classes.title}>s/{totalPrice}</Typography>
      </div>
      <ButtonPrimary text="Realizar venta" onClick={handleCreateSale} />
      <ButtonSecondary
        text="Cancelar venta"
        onClick={() => router.push("/sales")}
      />
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>{message}</Typography>
          <ButtonPrimary
            text="Ver ventas"
            onClick={() => router.push("/sales")}
          />
          <ButtonSecondary text="Imprimir" />
        </div>
      </Dialog>
    </div>
  );
};

export default Voucher;
