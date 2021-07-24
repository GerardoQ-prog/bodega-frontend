import { Button, Dialog, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useSWR from "swr";
import { addProductToSale } from "../../../../domain/services/Sales.service";
import { dateToSale } from "../../../helpers/utils/date";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { http } from "../../../http/http";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { InputName, InputNumber } from "../../ui/Inputs";
import { useStylesCard } from "./style";
import { Bar } from "react-chartjs-2";
import {
  filterProductsStockZero,
  orderProductsBySales,
} from "../../../../domain/services/Products.service";

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
  const {
    form: formProduct,
    onChange: onChangeProduct,
    onReset,
  } = useForm({
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
      onChangeDialog,
    });
  };

  React.useEffect(() => {
    if (!dialog) {
      onReset();
    }
  }, [dialog]);

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
          <Typography className={classes.titleModal}>{item.name}</Typography>
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

export const CardSale = ({ ...item }) => {
  const classes = useStylesCard();
  const router = useHistory();

  return (
    <div className={classes.contentCard}>
      <Typography className={classes.titleModal}>{item.saleId}</Typography>
      <Typography className={classes.title}>
        Fecha: {dateToSale(item.createdAt)}
      </Typography>
      <Typography className={classes.title}>
        Precio total: s/{item.priceTotal}
      </Typography>
      <div className={classes.containerBtn}>
        <Button
          className={classes.btn}
          color="primary"
          variant="contained"
          onClick={() => router.push(`/sale/${item.saleId}`)}
        >
          VER
        </Button>
      </div>
    </div>
  );
};

export const CardDetailSale = ({ ...item }) => {
  const classes = useStylesCard();

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/product/${item.productId}`,
    http.get
  );

  return (
    <div className={classes.contentCard}>
      <Typography className={classes.titleModal}>
        {data ? data?.data?.name : ""}
      </Typography>
      <Typography className={classes.title}>
        Cantidad: {item.quantity}
      </Typography>
      <Typography className={classes.title}>
        Precio unidad: s/{item.priceUnit}
      </Typography>
      <Typography className={classes.title}>
        Precio total: s/{item.quantity * item.priceUnit}
      </Typography>
    </div>
  );
};

export const CardDashboardSale = ({ day, data }) => {
  const classes = useStylesCard();
  const router = useHistory();

  return (
    <div className={classes.contentCard}>
      {day ? (
        <>
          <Typography className={classes.titleModal}>Ventas del dia</Typography>
          <Typography
            className={classes.titleModal}
            style={{ textAlign: "end" }}
          >
            {data.length}
          </Typography>
          <div className={classes.containerBtn}>
            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              onClick={() => router.push(`/sales`)}
            >
              VER
            </Button>
          </div>
        </>
      ) : (
        <>
          <Typography className={classes.titleModal}>
            Ganancia del dia
          </Typography>
          <Typography
            className={classes.titleModal}
            style={{ textAlign: "end" }}
          >
            s/
            {data.reduce(
              (accumulator, item) => accumulator + item.priceTotal,
              0
            )}
          </Typography>
          <div className={classes.containerBtn}>
            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              onClick={() => router.push(`/sales`)}
            >
              VER
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export const CardInventorie = ({ ...item }) => {
  const classes = useStylesCard();
  const router = useHistory();

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/category/${item.categoryId}`,
    http.get
  );

  return (
    <div className={classes.contentCard}>
      <Typography className={classes.titleModal}>
        {dateToSale(item.createdAt)}
      </Typography>
      <Typography className={classes.title}>
        Categoria: {data?.data?.name}
      </Typography>
      <Typography className={classes.title}>
        Estado: {item.status === 1 ? "Iniciado" : "Terminado"}
      </Typography>
      <div className={classes.containerBtn}>
        <Button
          className={classes.btn}
          color="primary"
          variant="contained"
          onClick={() => router.push(`/inventories/${item.inventorieId}`)}
        >
          VER
        </Button>
      </div>
    </div>
  );
};

export const CardBar = ({ dataProducts }) => {
  const classes = useStylesCard();

  const productsSales = orderProductsBySales({ products: dataProducts });
  const namesProducts = productsSales?.slice(0, 3).map((item) => item.name);
  const quantitySalesProducts = productsSales
    ?.slice(0, 3)
    .map((item) => item.quantitySale);

  return (
    <div className={classes.contentCard}>
      <Bar
        height={400}
        width={900}
        data={{
          labels: namesProducts,
          datasets: [
            {
              label: "Cantidad de ventas",
              data: quantitySalesProducts,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(200, 162, 235, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(200, 162, 235, 1)",
                "rgba(54, 162, 235, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export const CardProductsZero = ({ dataProducts }) => {
  const classes = useStylesCard();
  const productsZero = filterProductsStockZero({ products: dataProducts });
  console.log("zero", productsZero);

  return (
    <div className={classes.contentCard}>
      <Typography className={classes.titleModal}>
        Productos sin stock
      </Typography>
      {productsZero && productsZero.length === 0 && (
        <Typography>No hay productos</Typography>
      )}
      {productsZero &&
        productsZero.map((item, index) => {
          return (
            <Typography key={index} className={classes.title}>
              {item.name}
            </Typography>
          );
        })}
    </div>
  );
};
