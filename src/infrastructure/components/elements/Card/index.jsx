import { Dialog, Typography } from "@material-ui/core";
import React from "react";
import { addProductToSale } from "../../../../domain/services/Sales.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { InputName, InputNumber } from "../../ui/Inputs";
import { useStylesCard } from "./style";

export const CardCategory = ({ ...item }) => {
  const classes = useStylesCard();
  return (
    <div className={classes.contentCard}>
      <Typography className={classes.title}>{item.name}</Typography>
    </div>
  );
};

export const CardProduct = ({ setSelectProducts, selectProducts, ...item }) => {
  const classes = useStylesCard();
  const { dialog, onChangeDialog } = useDialog(false);
  const { form: formProduct, onChange: onChangeProduct } = useForm({
    quantity: "",
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
  });

  const handleAddProduct = () => {
    addProductToSale({
      selectProducts,
      setSelectProducts,
      product: {
        quantityCurrent:
          parseInt(item.quantity) - parseInt(formProduct.quantity),
        quantity: formProduct.quantity,
        priceUnit: item.price,
        priceTotal: parseFloat(item.price) * parseInt(formProduct.quantity),
        productId: item.id,
        shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
        name: item.name,
      },
    });
  };

  return (
    <div className={classes.contentCard}>
      <Typography className={classes.title}>{item.name}</Typography>
      <Typography className={classes.title}>Precio: s/{item.price}</Typography>
      <Typography className={classes.title}>
        Cantidad disponible: {item.quantity} unidades
      </Typography>
      <div className={classes.containerBtn}>
        <ButtonSecondary text="Agregar" width={100} onClick={onChangeDialog} />
      </div>
      <Dialog open={dialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>{item.name}</Typography>
          <InputNumber
            label="Cantidad"
            name="quantity"
            value={formProduct.quantity}
            handleChange={onChangeProduct}
          />
          <ButtonPrimary text="Agregar producto" onClick={handleAddProduct} />
          <ButtonSecondary text="Cancelar" onClick={onChangeDialog} />
        </div>
      </Dialog>
    </div>
  );
};
