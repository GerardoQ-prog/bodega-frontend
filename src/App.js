import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./infrastructure/views/Login";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./themeGlobal";
import Dashboard from "./infrastructure/views/Dashboard";
import Products from "./infrastructure/views/Products";
import SalesView from "./infrastructure/views/Sales";
import NewSaleView from "./infrastructure/views/NewSale";
import Register from "./infrastructure/views/Register";
import DetailSaleView from "./infrastructure/views/DetailSale";
import InventoriesView from "./infrastructure/views/Inventories";
import DetailInventorieView from "./infrastructure/views/DetailInventorie";

const App = () => {
  const infoUser = sessionStorage.getItem("infoUser");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <div>
            {!infoUser ? (
              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Redirect to="/" />
              </Switch>
            ) : (
              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/products" exact component={Products} />
                <Route path="/sales" exact component={SalesView} />
                <Route path="/sales-new" exact component={NewSaleView} />
                <Route path="/sale/:saleId" exact component={DetailSaleView} />
                <Route path="/inventories" exact component={InventoriesView} />
                <Route
                  path="/inventories/:inventorieId"
                  exact
                  component={DetailInventorieView}
                />
                <Redirect to="/dashboard" />
              </Switch>
            )}
          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
