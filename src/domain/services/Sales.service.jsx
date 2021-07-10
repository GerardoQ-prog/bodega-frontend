import { salesRepository } from "../../infrastructure/repositories/Sales.repository";

export const addProductToSale = ({
  selectProducts,
  setSelectProducts,
  product,
  onChangeDialog,
}) => {
  setSelectProducts([...selectProducts, product]);
  onChangeDialog();
};

export const createSale = async ({ data, onChangeDialog, setMessage }) => {
  const response = await salesRepository.postCreateSale(data);
  if (response.code === 200) {
    setMessage(response.message);
    onChangeDialog();
  }
};

export const updateProductBySale = ({
  selectProducts,
  setSelectProducts,
  newQuantity,
  idProduct,
  onChangeDialog,
}) => {
  const newProducts = selectProducts.map((item) => {
    if (item.productId === idProduct) {
      return {
        ...item,
        quantity: newQuantity,
        priceTotal: parseInt(newQuantity) * parseFloat(item.priceUnit),
      };
    } else {
      return item;
    }
  });
  setSelectProducts(newProducts);
  onChangeDialog();
};

export const deleteProductBySale = ({
  selectProducts,
  setSelectProducts,
  idProduct,
}) => {
  const newProducts = selectProducts.filter(
    (item) => item.productId !== idProduct
  );
  setSelectProducts(newProducts);
};
