import React from "react";
import useSWR from "swr";
import Inventories from "../components/containers/Inventories";
import { CardInventorie } from "../components/elements/Card";
import DrawerContent from "../components/ui/Drawer";
import { http } from "../http/http";

const InventoriesView = () => {
  const shopId = JSON.parse(sessionStorage.getItem("infoShop")).id;

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/inventories-shop/${shopId}`,
    http.get
  );

  const { error: errorCategories, data: dataCategories } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/categories-shop?shopId=${shopId}`,
    http.get
  );

  return (
    <DrawerContent>
      <Inventories
        data={data}
        error={error}
        dataCategories={dataCategories}
        render={(item) => <CardInventorie {...item} />}
      />
    </DrawerContent>
  );
};

export default InventoriesView;
