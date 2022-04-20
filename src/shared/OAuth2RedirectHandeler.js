import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const OAuth2RedirectHandeler = () => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect =
    (async () => {
      await dispatch(userActions.kakaoLogin(code));
    },
    []);

  return;
};

export default OAuth2RedirectHandeler;
