import React from "react";
import useSWR from "swr";
import Categories from "../components/containers/Categories";
import Products from "../components/containers/Products";
import { CardCategory } from "../components/elements/Card";
import { RowProduct } from "../components/elements/Row";
import DrawerContent from "../components/ui/Drawer";
import { http } from "../http/http";

const ProductsView = () => {
  const shopId = JSON.parse(sessionStorage.getItem("infoShop")).id;

  const { error, data } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/categories-shop?shopId=${shopId}`,
    http.get
  );

  const { error: errorProducts, data: dataProducts } = useSWR(
    `${process.env.REACT_APP_URL_LOCAL}/product-shop?shopId=${shopId}`,
    http.get
  );

  const [products, setProducts] = React.useState(null);
  const [productsCurrent, setProductsCurrent] = React.useState(null);

  React.useEffect(() => {
    setProducts(dataProducts);
    setProductsCurrent(dataProducts);
  }, [dataProducts]);

  return (
    <DrawerContent>
      <Categories
        data={data}
        error={error}
        render={(item) => <CardCategory {...item} />}
      />
      <Products
        dataCategories={data}
        data={products}
        error={errorProducts}
        render={(item, index) => <RowProduct key={index} {...item} />}
        setProducts={setProducts}
        productsCurrent={productsCurrent}
      />
    </DrawerContent>
  );
};

export default ProductsView;
