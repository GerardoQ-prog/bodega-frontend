import { authRepository } from "../../infrastructure/repositories/Auth.repository";
import { shopsRepository } from "../../infrastructure/repositories/Shops.repository";

const signIn = async ({ form }) => {
  const response = await authRepository.postLogin(form);
  if (response.code === 200) {
    sessionStorage.setItem("infoUser", JSON.stringify(response.data));
    const responseShop = await shopsRepository.getShopByUser(response.data.id);
    console.log(response.data.id);
    if (responseShop.code === 200) {
      sessionStorage.setItem("infoShop", JSON.stringify(responseShop.data));
      window.location.href = "/dashboard";
    }
  }
};

const logout = () => {
  sessionStorage.removeItem("infoUser");
  sessionStorage.removeItem("infoShop");
  window.location.href = "/";
};

export const authService = {
  signIn,
  logout,
};
