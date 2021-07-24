import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const inventorieRepository = {
  postCreateInventorie: async (data) => {
    try {
      return await http
        .post(`${url}/inventories`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postCreateInventorie");
    }
  },
  putProductsByInventorie: async (data) => {
    try {
      return await http
        .put(`${url}/inventories-products`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener putProductsByInventorie");
    }
  },
  putStatusByInventorie: async (data) => {
    try {
      return await http
        .put(`${url}/inventories`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener putStatusByInventorie");
    }
  },
};
