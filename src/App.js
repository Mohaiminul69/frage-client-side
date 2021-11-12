import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Explore from "./Pages/Explore/Explore";
import NotFound from "./Pages/NotFound/NotFound";
import PerfumePerchase from "./Pages/Shared/PerfumePurchase/PerfumePerchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Test from "./Pages/Test/Test";
import OrderDetails from "./Pages/Shared/OrderDetails/OrderDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/test">
              <Test />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:perfumeId">
              <PerfumePerchase />
            </PrivateRoute>
            <PrivateRoute path="/orderDetails/:perfumeId">
              <OrderDetails />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
