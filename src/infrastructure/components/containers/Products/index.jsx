import { Dialog } from "@material-ui/core";
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
import { createProducts } from "../../../../domain/services/Products.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { OptionsProducts } from "../../elements/Options";
import { ButtonPrimary } from "../../ui/Buttons";
import {
  InputName,
  InputNumber,
  InputPrice,
  InputSelect,
  InputText,
} from "../../ui/Inputs";
import { useStylesProducts } from "./style";

const Products = ({
  data,
  error,
  render,
  dataCategories,
  setProducts,
  productsCurrent,
}) => {
  const classes = useStylesProducts();
  const { dialog, onChangeDialog } = useDialog(false);
  const { form, onChange, onReset } = useForm({
    name: "",
    price: "",
    quantity: "",
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
    categoryId: "",
  });

  const handleCreateProduct = () => {
    createProducts({
      form,
      handleOpen: onChangeDialog,
      id: JSON.parse(sessionStorage.getItem("infoShop")).id,
    });
  };

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Productos:</Typography>
        <ButtonPrimary
          text="Crear producto"
          onClick={onChangeDialog}
          width={200}
        />
      </div>
      <OptionsProducts
        dataCategories={dataCategories}
        setProducts={setProducts}
        data={productsCurrent}
        products={data?.data}
      />
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.header}>
                Nombre
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Categoria
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Estado
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Cantidad
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Precio
              </TableCell>
              <TableCell align="left" className={classes.header}>
                Acciones
              </TableCell>
              <TableCell align="left" className={classes.header}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.data.length === 0 && (
              <Typography>No hay productos</Typography>
            )}
            {data &&
              data.data.length > 0 &&
              data.data.map((item, key) => {
                return <>{render(item, key)}</>;
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={dialog} onClose={onChangeDialog}>
        <div className={classes.contentModal}>
          <Typography className={classes.title}>Crear Producto</Typography>
          <InputText
            label="Nombre"
            name="name"
            value={form.name}
            handleChange={onChange}
          />
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
          <InputSelect
            label="Nombre de la categoria"
            name="categoryId"
            value={form.categoryId}
            handleChange={onChange}
            data={dataCategories?.data}
            id
          />
          <ButtonPrimary text="Crear Producto" onClick={handleCreateProduct} />
        </div>
      </Dialog>
    </div>
  );
};

export default Products;
