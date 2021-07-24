import React from "react";
import useSWR from "swr";
import Sales from "../components/containers/Sales";
import { CardSale } from "../components/elements/Card";
import DrawerContent from "../components/ui/Drawer";
import { http } from "../http/http";

const SalesView = () => {
  const shopId = JSON.parse(sessionStorage.getItem("infoShop")).id;

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/sales-shop/${shopId}`,
    http.get
  );

  const [sales, setSales] = React.useState(null);
  const [salesCurrent, setSalesCurrent] = React.useState(null);

  React.useEffect(() => {
    setSales(data);
    setSalesCurrent(data);
  }, [data]);

  return (
    <DrawerContent>
      <Sales
        data={sales}
        salesCurrent={salesCurrent}
        error={error}
        render={(item) => <CardSale {...item} />}
      />
    </DrawerContent>
  );
};

export default SalesView;
