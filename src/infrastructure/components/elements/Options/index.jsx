import React from "react";
import { filterProductByCategory } from "../../../../domain/services/Products.service";
import { exportToCSVProducts } from "../../../helpers/utils/exportExcel";
import { useForm } from "../../../hooks/useForm";
import { ButtonSecondary } from "../../ui/Buttons";
import { InputSelect } from "../../ui/Inputs";
import { useStylesOptions } from "./style";

export const OptionsProducts = ({
  dataCategories,
  data,
  setProducts,
  products,
}) => {
  const classes = useStylesOptions();
  const { form, onChange } = useForm({
    categoryId: 0,
  });

  const handleNameCategory = () => {
    const newData = products.map((product) => {
      const dataCategory = dataCategories?.data.find(
        (item) => item.id === product.categoryId
      );
      return {
        ...product,
        categoryName: dataCategory.name,
      };
    });
    return newData;
  };

  React.useEffect(() => {
    if (data) {
      filterProductByCategory({
        data,
        categoryId: form.categoryId,
        setProducts,
      });
    }
  }, [form]);

  const handleExportExcel = () => {
    exportToCSVProducts({
      data: handleNameCategory(products),
      name: `Productos - ${new Date()}`,
    });
  };

  return (
    <div className={classes.container}>
      <div style={{ width: 300 }}>
        <InputSelect
          label="Escoger categoria"
          data={dataCategories?.data}
          name="categoryId"
          value={form.categoryId}
          handleChange={onChange}
          textInit="TODOS"
          id
        />
      </div>
      <div>
        <ButtonSecondary text="Exportar a Excel" onClick={handleExportExcel} />
      </div>
    </div>
  );
};

// export const OptionsSales = () => {
//   const { form, onChange } = useForm({
//     day: new Date(),
//   });

//   return <div></div>;
// };
