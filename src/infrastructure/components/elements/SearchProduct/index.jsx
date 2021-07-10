import { Dialog, Grid, Typography } from "@material-ui/core";
import React from "react";
import { searchProductByName } from "../../../../domain/services/Products.service";
import useDialog from "../../../hooks/useDialog";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary, ButtonSecondary } from "../../ui/Buttons";
import { InputName, InputText } from "../../ui/Inputs";
import { useStylesSearchProduct } from "./style";

const SearchProduct = ({ data, setProducts, render }) => {
  const classes = useStylesSearchProduct();
  const { form, onChange } = useForm({
    name: "",
    shopId: JSON.parse(sessionStorage.getItem("infoShop")).id,
  });

  const handleSearchProduct = () => {
    searchProductByName({ form, setProducts });
  };

  return (
    <>
      <div className={classes.container}>
        <div style={{ width: 300 }}>
          <InputText
            label="Buscar producto"
            name="name"
            value={form.name}
            handleChange={onChange}
          />
        </div>
        <ButtonPrimary
          text="Buscar"
          width={200}
          onClick={handleSearchProduct}
        />
      </div>
      <Grid container>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <Grid md={12} sm={12} xs={12}>
                  {render(item, index)}
                </Grid>
              </>
            );
          })}
      </Grid>
    </>
  );
};

export default SearchProduct;
