import { Dialog, Typography } from "@material-ui/core";
import { TableRow, TableCell, Button } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import { updateProduct } from "../../../../domain/services/Products.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { http } from "../../../http/http";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { InputNumber, InputPrice } from "../../ui/Inputs";
import { useStylesRow } from "./style";

export const RowProduct = ({ ...item }) => {
  const quantity = item.quantity;
  const classes = useStylesRow({ quantity });
  const { dialog, onChangeDialog } = useDialog(false);
  const { form, onChange, onReset } = useForm({
    price: item.price,
    quantity: item.quantity,
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
    productId: item.id,
  });

  const handleUpdateProduct = () => {
    updateProduct({ form, handleOpen: onChangeDialog });
  };

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/category/${item.categoryId}`,
    http.get
  );

  return (
    <>
      <TableRow>
        <TableCell align="left" className={classes.cell}>
          {item.name}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {data?.data.name}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          <Typography className={classes.quantity}>
            {quantity > 0 ? "Activo" : "Sin stock"}
          </Typography>
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          {item.quantity}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          s/{item.price}
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          <Button
            className={classes.btnActionEdit}
            variant="contained"
            color="Secondary"
            onClick={onChangeDialog}
          >
            Editar
          </Button>
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          <Button
            className={classes.btnActionEdit}
            variant="contained"
            color="primary"
          >
            Eliminar
          </Button>
        </TableCell>
      </TableRow>
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>{item.name}</Typography>
          <InputPrice
            label="Precio"
            name="price"
            value={form.price}
            handleChange={onChange}
          />
          <InputNumber
            label="Cantidad"
            name="quantity"
            value={form.quantity}
            handleChange={onChange}
          />
          <ButtonPrimary text="Editar" onClick={handleUpdateProduct} />
          <ButtonSecondary
            text="Cancelar"
            onClick={() => {
              onReset();
              onChangeDialog();
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export const RowSale = ({ ...item }) => {
  const classes = useStylesRow();

  return (
    <TableRow>
      <TableCell align="left" className={classes.cell}>
        {item.name}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {item.quantity}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        s/{item.priceUnit}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        s/{item.priceTotal}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        <Button
          className={classes.btnActionEdit}
          variant="contained"
          color="Secondary"
        >
          Editar
        </Button>
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        <Button
          className={classes.btnActionEdit}
          variant="contained"
          color="primary"
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};
