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

  console.log(data);

  return (
    <DrawerContent>
      <Sales
        data={data}
        error={error}
        render={(item) => <CardSale {...item} />}
      />
    </DrawerContent>
  );
};

export default SalesView;
