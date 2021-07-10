import React from "react";
import { Layout, LayoutContainer } from "../components/containers/Layout";
import FormLogin from "../components/elements/FormLogin";
import FormRegister from "../components/elements/FormRegister";
import Footer from "../components/ui/Footer";

const Register = () => {
  return (
    <Layout>
      <LayoutContainer>
        <FormRegister />
      </LayoutContainer>
      <Footer />
    </Layout>
  );
};

export default Register;
