import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const productsRepository = {
  postProduct: async (data) => {
    try {
      return await http
        .post(`${url}/products`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postProduct");
    }
  },
  putProduct: async (data) => {
    try {
      return await http
        .put(`${url}/products`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener putProduct");
    }
  },
  deleteProduct: async (id) => {
    try {
      return await http
        .delete(`${url}/products/${id}`)
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener putProduct");
    }
  },
  postProductByName: async (data) => {
    try {
      return await http
        .post(`${url}/products-search`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postProductByName");
    }
  },
};
