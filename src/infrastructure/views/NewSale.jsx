import React from "react";
import NewSale from "../components/containers/NewSale";
import DrawerContent from "../components/ui/Drawer";

const NewSaleView = () => {
  return (
    <DrawerContent>
      <NewSale />
    </DrawerContent>
  );
};

export default NewSaleView;
