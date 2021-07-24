import { Grid } from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import { getSaleByDay } from "../../../../domain/services/Sales.service";
import { http } from "../../../http/http";
import {
  CardBar,
  CardDashboardSale,
  CardProductsZero,
} from "../../elements/Card";

const Dashboard = () => {
  const [sales, setSales] = React.useState([]);

  React.useEffect(() => {
    getSaleByDay({
      setSales,
      shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
    });
  }, []);

  const shopId = JSON.parse(sessionStorage.getItem("infoShop")).id;
  const { error: errorProducts, data: dataProducts } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/product-shop?shopId=${shopId}`,
    http.get
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CardDashboardSale data={sales} day />
        </Grid>
        <Grid item md={6}>
          <CardDashboardSale data={sales} />
        </Grid>
        <Grid item md={6}>
          <CardBar dataProducts={dataProducts ? dataProducts.data : []} />
        </Grid>
        <Grid item md={6}>
          <CardProductsZero
            dataProducts={dataProducts ? dataProducts.data : []}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
