export const addProductToSale = ({
  selectProducts,
  setSelectProducts,
  product,
}) => {
  setSelectProducts([...selectProducts, product]);
};
