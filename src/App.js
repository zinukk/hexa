import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ShopPork from "./pages/ShopPork";
import ShopBeef from "./pages/ShopBeef";
import ShopChick from "./pages/ShopChick";
import OAuth2RedirectHandeler from "./shared/OAuth2RedirectHandeler";
import { Route, Router } from "react-router-dom";
import React from "react";
import { history } from "./redux/configStore";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import { actionCreators as shopActions } from "./redux/modules/post";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(shopActions.getpostDB());
  });

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/detail/:productId" exact component={Detail} />
        <Route path="/shopchick" exact component={ShopChick} />
        <Route path="/shoppork" exact component={ShopPork} />
        <Route path="/shopbeef" exact component={ShopBeef} />
        <Route path="/cart" exact component={Cart} />
        <Route
          path="/oauth/callback/kakao"
          exact
          component={OAuth2RedirectHandeler}
        ></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
