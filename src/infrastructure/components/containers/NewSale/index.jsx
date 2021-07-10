import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardProduct } from "../../elements/Card";
import { RowSale } from "../../elements/Row";
import SearchProduct from "../../elements/SearchProduct";
import Voucher from "../../elements/Voucher";
import { useStylesNewSale } from "./style";

const NewSale = () => {
  const classes = useStylesNewSale();
  const [products, setProducts] = React.useState([]);
  const [selectProducts, setSelectProducts] = React.useState([]);

  console.log("selce", selectProducts);

  return (
    <div>
      <div className={classes.contentTitle}>
        <Typography className={classes.title}>Crear venta:</Typography>
      </div>
      <Grid container>
        <Grid md={5} sm={12} xs={12} className={classes.grid}>
          <SearchProduct
            setProducts={setProducts}
            data={products}
            render={(item, index) => (
              <CardProduct
                key={index}
                setSelectProducts={setSelectProducts}
                selectProducts={selectProducts}
                {...item}
              />
            )}
          />
        </Grid>
        <Grid md={7} sm={12} xs={12} className={classes.grid}>
          <Voucher
            selectProducts={selectProducts}
            setSelectProducts={setSelectProducts}
            render={(item) => (
              <RowSale
                selectProducts={selectProducts}
                setSelectProducts={setSelectProducts}
                {...item}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewSale;
