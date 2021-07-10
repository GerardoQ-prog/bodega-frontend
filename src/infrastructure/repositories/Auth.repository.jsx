import { http } from "../http/http";

const url = process.env.REACT_APP_URL_LOCAL;

export const authRepository = {
  postLogin: async (data) => {
    try {
      return await http
        .post(`${url}/auth`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postLogin");
    }
  },
  postRegister: async (data) => {
    try {
      return await http
        .post(`${url}/register`, JSON.stringify(data))
        .then((res) => {
          return res;
        })
        .catch((ex) => {
          // console.log(ex);
          return {};
        });
    } catch (err) {
      // console.log(err);
      throw Error("Error al obtener postRegister");
    }
  },
};
