import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Shopping from "./pages/Shopping";
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
        <Route path="/shopping" exact component={Shopping} />
        <Route path="/cart" exact component={Cart} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
