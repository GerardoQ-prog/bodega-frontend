import { Dialog, IconButton, Typography } from "@material-ui/core";
import { TableRow, TableCell, Button } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import {
  deleteProduct,
  updateProduct,
} from "../../../../domain/services/Products.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { http } from "../../../http/http";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { InputNumber, InputPrice } from "../../ui/Inputs";
import { useStylesRow } from "./style";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import {
  deleteProductBySale,
  updateProductBySale,
} from "../../../../domain/services/Sales.service";
import { updateListProductsByInventorie } from "../../../../domain/services/Inventories.service";

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

  const handleDeleteProduct = () => {
    deleteProduct({
      id: item.id,
      shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
    });
  };

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/category/${item.categoryId}`,
    http.get
  );

  React.useEffect(() => {
    onReset();
  }, [dialog]);

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
            color="secondary"
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
            onClick={handleDeleteProduct}
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

export const RowSale = ({ selectProducts, setSelectProducts, ...item }) => {
  const classes = useStylesRow();
  const { dialog, onChangeDialog } = useDialog(false);
  const { form, onChange, onReset } = useForm({
    quantity: item.quantity,
  });

  React.useEffect(() => {
    onReset();
  }, [dialog]);

  const handleUpdateQuantity = () => {
    updateProductBySale({
      idProduct: item.productId,
      newQuantity: form.quantity,
      selectProducts,
      setSelectProducts,
      onChangeDialog,
    });
  };

  const handleDeleteProduct = () => {
    deleteProductBySale({
      idProduct: item.productId,
      selectProducts,
      setSelectProducts,
    });
  };

  return (
    <>
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
          <IconButton
            className={classes.btnActionEdit}
            variant="contained"
            color="Secondary"
            onClick={onChangeDialog}
          >
            <EditOutlinedIcon />
          </IconButton>
        </TableCell>
        <TableCell align="left" className={classes.cell}>
          <IconButton
            className={classes.btnActionEdit}
            variant="contained"
            color="primary"
            onClick={handleDeleteProduct}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>{item.name}</Typography>
          <InputNumber
            label="Cantidad"
            name="quantity"
            value={form.quantity}
            handleChange={onChange}
          />
          <ButtonPrimary
            text="Editar Cantidad"
            onClick={handleUpdateQuantity}
          />
          <ButtonSecondary text="Cancelar" onClick={onChangeDialog} />
        </div>
      </Dialog>
    </>
  );
};

export const RowInventorie = ({
  dataInventorie,
  selectProducts,
  setSelectProducts,
  inventorieId,
  ...item
}) => {
  const classes = useStylesRow();
  const [total, setTotal] = React.useState(
    dataInventorie?.data?.status === 1
      ? item.quantityCurrent
      : item.quantityReal - item.quantityCurrent
  );

  const { form, onChange, onReset } = useForm({
    inventorieId: inventorieId,
    productId: item.productId,
    quantityReal: 0,
  });

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/product/${item.productId}`,
    http.get
  );

  React.useEffect(() => {
    if (dataInventorie?.data?.status === 1) {
      setTotal(form.quantityReal - item.quantityCurrent);
    } else {
      setTotal(item.quantityReal - item.quantityCurrent);
    }
  }, [form]);

  const handleQuantityProduct = () => {
    updateListProductsByInventorie({
      selectProducts,
      newQuantity: form.quantityReal,
      product: form,
      setSelectProducts,
      idProduct: item.productId,
    });
  };

  return (
    <TableRow>
      <TableCell align="left" className={classes.cell}>
        {data?.data?.name}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        s/{data?.data?.price}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {item.quantityCurrent}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {dataInventorie?.data?.status === 1 ? (
          <div style={{ width: "100px" }}>
            <InputNumber
              name="quantityReal"
              value={form.quantityReal}
              handleChange={onChange}
            />
          </div>
        ) : (
          item.quantityReal
        )}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {total}
      </TableCell>
      <TableCell align="left" className={classes.cell}>
        {dataInventorie?.data?.status === 1 && (
          <ButtonSecondary text="Guardar" onClick={handleQuantityProduct} />
        )}
      </TableCell>
    </TableRow>
  );
};
