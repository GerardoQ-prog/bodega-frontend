import React from "react";
import Dashboard from "../components/containers/Dashboard";
import DrawerContent from "../components/ui/Drawer";

const DashboardView = () => {
  return (
    <DrawerContent>
      <Dashboard />
    </DrawerContent>
  );
};

export default DashboardView;
