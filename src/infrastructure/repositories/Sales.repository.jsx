import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const salesRepository = {
  postCreateSale: async (data) => {
    try {
      return await http
        .post(`${url}/sales-shop`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postCreateSale");
    }
  },
};
