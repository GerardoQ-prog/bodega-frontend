import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import DetailSale from "../components/containers/DetailSale";
import { CardDetailSale } from "../components/elements/Card";
import DrawerContent from "../components/ui/Drawer";
import { http } from "../http/http";

const DetailSaleView = () => {
  let { saleId } = useParams();

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/sale/${saleId}`,
    http.get
  );

  console.log(data);

  return (
    <DrawerContent>
      <DetailSale
        data={data}
        error={error}
        saleId={saleId}
        render={(item) => <CardDetailSale {...item} />}
      />
    </DrawerContent>
  );
};

export default DetailSaleView;
