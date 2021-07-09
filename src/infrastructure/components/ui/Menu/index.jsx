import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useStylesMenu } from "./style";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { authService } from "../../../../domain/services/Auth.service";
import { useHistory } from "react-router-dom";

const ItemMenu = ({ Icon, text, router }) => {
  const redirect = useHistory();

  return (
    <ListItem button onClick={() => redirect.push(router)}>
      <ListItemIcon>
        <Icon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

const Menu = () => {
  const classes = useStylesMenu();
  const infoShop = JSON.parse(sessionStorage.getItem("infoShop"));

  return (
    <div className={classes.container}>
      <div className={classes.containerName}>
        <h1>{infoShop.name}</h1>
        <Button
          className={classes.btnLogout}
          onClick={() => authService.logout()}
        >
          Cerrar sesión
        </Button>
      </div>
      <Divider style={{ background: "white" }} />
      <List>
        {ItemMenu({
          Icon: DashboardIcon,
          text: "Inicio",
          router: "/dashboard",
        })}
        {ItemMenu({
          Icon: StorefrontIcon,
          text: "Productos",
          router: "/products",
        })}
        {ItemMenu({ Icon: ShoppingCartIcon, text: "Ventas", router: "/sales" })}
        {ItemMenu({
          Icon: AssignmentIcon,
          text: "Inventarios",
          router: "/inventories",
        })}
        {ItemMenu({
          Icon: AssessmentIcon,
          text: "Reportes",
          router: "/reports",
        })}
      </List>
    </div>
  );
};

export default Menu;
