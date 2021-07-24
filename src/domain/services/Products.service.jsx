import { mutate } from "swr";
import { productsRepository } from "../../infrastructure/repositories/Products.repository";

export const createProducts = async ({ form, id, handleOpen }) => {
  const data = {
    ...form,
    quantity: parseInt(form.quantity),
    price: parseFloat(form.price),
    quantitySale: 0,
  };
  const response = await productsRepository.postProduct(data);
  mutate(process.env.REACT_APP_URL_LOCAL + "/product-shop?shopId=" + id);
  handleOpen();
};

export const updateProduct = async ({ form, handleOpen }) => {
  const data = {
    ...form,
    quantity: parseInt(form.quantity),
    price: parseFloat(form.price),
  };
  const response = await productsRepository.putProduct(data);
  mutate(
    process.env.REACT_APP_URL_LOCAL + "/product-shop?shopId=" + form.shopId
  );
  handleOpen();
};

export const deleteProduct = async ({ id, handleOpen, shopId }) => {
  const response = await productsRepository.deleteProduct(id);
  mutate(process.env.REACT_APP_URL_LOCAL + "/product-shop?shopId=" + shopId);
};

export const filterProductByCategory = ({ data, setProducts, categoryId }) => {
  if (categoryId === 0) {
    setProducts({
      data: data.data,
    });
  } else {
    const newData = data.data.filter((item) => item.categoryId === categoryId);
    setProducts({
      data: newData,
    });
  }
};

export const searchProductByName = async ({ form, setProducts }) => {
  const response = await productsRepository.postProductByName(form);
  const { code } = response;
  if (code === 200) {
    const { data } = response;
    setProducts(data);
  } else {
    setProducts([]);
  }
};

export const orderProductsBySales = ({ products }) => {
  products.sort(function (a, b) {
    if (a.quantitySale < b.quantitySale) {
      return 1;
    }
    if (a.quantitySale > b.quantitySale) {
      return -1;
    }
    return 0;
  });
  return products;
};

export const filterProductsStockZero = ({ products }) => {
  const productsZero = products.filter((item) => item.quantity == 0);
  return productsZero;
};
