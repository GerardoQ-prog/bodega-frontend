import React from "react";
import { Layout, LayoutContainer } from "../components/containers/Layout";
import FormLogin from "../components/elements/FormLogin";
import Footer from "../components/ui/Footer";

const Login = () => {
  return (
    <Layout>
      <LayoutContainer>
        <FormLogin />
      </LayoutContainer>
      <Footer />
    </Layout>
  );
};

export default Login;
