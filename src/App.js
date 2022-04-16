import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShopPork from "./pages/ShopPork";
import ShopBeef from "./pages/ShopBeef";
import ShopChick from "./pages/ShopChick";
import { Route, Router } from "react-router-dom";
import React from "react";
import { history } from "./redux/configStore";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/shopchick" exact component={ShopChick} />
        <Route path="/shoppork" exact component={ShopPork} />
        <Route path="/shopbeef" exact component={ShopBeef} />
        <Route path="/cart" exact component={Cart} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
