import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const shopsRepository = {
  getShopByUser: async (id) => {
    try {
      return await http
        .get(`${url}/shop-user?userId=${id}`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener getShopByUser");
    }
  },
};
