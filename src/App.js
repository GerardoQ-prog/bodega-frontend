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
                <Redirect to="/" />
              </Switch>
            ) : (
              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/products" exact component={Products} />
                <Route path="/sales" exact component={SalesView} />
                <Route path="/sales-new" exact component={NewSaleView} />
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
