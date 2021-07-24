import { mutate } from "swr";
import { inventorieRepository } from "../../infrastructure/repositories/Inventories.repository";

export const createInventorie = async ({ form, handleOpen }) => {
  const data = {
    ...form,
    status: 1,
    inventorieId: `${new Date().getFullYear()}${new Date().getMonth() + 1}${
      form.categoryId
    }${form.shopId}`,
  };
  const response = await inventorieRepository.postCreateInventorie(data);
  mutate(process.env.REACT_APP_URL_LOCAL + "/inventories-shop/" + form.shopId);
  handleOpen();
};

export const updateListProductsByInventorie = ({
  selectProducts,
  setSelectProducts,
  product,
  newQuantity,
  idProduct,
}) => {
  const isExist = selectProducts.some((item) => item.productId === idProduct);
  if (!isExist) {
    setSelectProducts([...selectProducts, product]);
  } else {
    const newProducts = selectProducts.map((item) => {
      if (item.productId === idProduct) {
        return {
          ...item,
          quantityReal: newQuantity,
        };
      } else {
        return item;
      }
    });
    setSelectProducts(newProducts);
  }
};

export const updateProductsByInventorie = async ({ products, handleOpen }) => {
  const response = await inventorieRepository.putProductsByInventorie({
    products,
  });
  handleOpen();
};

export const updateStatusByInventorie = async ({ inventorieId }) => {
  const response = await inventorieRepository.putStatusByInventorie({
    inventorieId,
    status: 2,
  });
};
