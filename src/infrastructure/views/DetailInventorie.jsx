import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import DetailInventorie from "../components/containers/DetailInventorie";
import { RowInventorie } from "../components/elements/Row";
import DrawerContent from "../components/ui/Drawer";
import { http } from "../http/http";

const DetailInventorieView = () => {
  let { inventorieId } = useParams();

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/inventories-products/${inventorieId}`,
    http.get
  );

  const { error: errorInventorie, data: dataInventorie } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/inventories/${inventorieId}`,
    http.get
  );

  const [selectProducts, setSelectProducts] = React.useState([]);

  console.log("prodinv", selectProducts);

  return (
    <DrawerContent>
      <DetailInventorie
        data={data}
        dataInventorie={dataInventorie}
        selectProducts={selectProducts}
        setSelectProducts={setSelectProducts}
        inventorieId={inventorieId}
        render={(item) => (
          <RowInventorie
            dataInventorie={dataInventorie}
            selectProducts={selectProducts}
            setSelectProducts={setSelectProducts}
            inventorieId={inventorieId}
            {...item}
          />
        )}
      />
    </DrawerContent>
  );
};

export default DetailInventorieView;
