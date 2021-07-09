import { mutate } from "swr";
import { categoryRepository } from "../../infrastructure/repositories/Categories.repository";

export const getCategories = (dataCategories) => {
  const { code } = dataCategories;
  if (code === 200) {
    const { data } = dataCategories;
    return data;
  } else {
    return [];
  }
};

export const createCategories = async ({ form, id, handleOpen }) => {
  const response = await categoryRepository.postCategoryByShop(form);
  console.log(response);
  mutate(process.env.REACT_APP_URL_LOCAL + "/categories-shop?shopId=" + id);
  handleOpen();
};
