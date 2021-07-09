import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const categoryRepository = {
  getCategoryByShop: async (id) => {
    try {
      return await http
        .get(`${url}/categories-shop?shopId=${id}`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getCategoryByShop");
    }
  },
  postCategoryByShop: async (data) => {
    try {
      return await http
        .post(`${url}/categories`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postCategoryByShop");
    }
  },
};
