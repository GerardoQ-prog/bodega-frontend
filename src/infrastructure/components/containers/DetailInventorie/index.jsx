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
import {
  updateProductsByInventorie,
  updateStatusByInventorie,
} from "../../../../domain/services/Inventories.service";
import { dateToSale } from "../../../helpers/utils/date";
import useDialog from "../../../hooks/useDialog";
import { ButtonPrimary } from "../../ui/Buttons";
import { useStylesDetailInventorie } from "./style";

const DetailInventorie = ({
  data,
  dataInventorie,
  render,
  selectProducts,
  setSelectProducts,
  inventorieId,
}) => {
  const classes = useStylesDetailInventorie();
  const router = useHistory();
  const { dialog, onChangeDialog } = useDialog(false);

  const handleSaveInventorie = () => {
    updateProductsByInventorie({
      products: selectProducts,
      handleOpen: onChangeDialog,
    });
    updateStatusByInventorie({
      inventorieId,
    });
  };

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>
          Fecha de inventario: {dateToSale(data?.data[0].createdAt)}
        </Typography>
        <Typography className={classes.title}>
          Estado:{" "}
          {data
            ? dataInventorie?.data?.status === 1
              ? "Iniciado"
              : "Terminado"
            : ""}
        </Typography>
        {dataInventorie?.data?.status === 1 && (
          <ButtonPrimary
            text="Guardar inventario"
            width={200}
            onClick={handleSaveInventorie}
          />
        )}
      </div>
      <br />
      <br />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.header}>
                Nombre
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Precio
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Cantidad Actual
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Cantidad Real
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Total
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Acción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.data.length === 0 && (
              <Typography>No hay productos</Typography>
            )}
            {data &&
              data.data.length > 0 &&
              data.data.map((item, index) => {
                return <Fragment key={index}>{render(item, index)}</Fragment>;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>
            Inventario registrado
          </Typography>
          <ButtonPrimary
            text="Ver inventarios"
            onClick={() => router.push("/inventories")}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default DetailInventorie;
