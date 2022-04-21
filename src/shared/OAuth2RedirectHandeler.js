import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const OAuth2RedirectHandeler = () => {
  const dispatch = useDispatch();

  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  React.useEffect(() => {
    dispatch(userActions.kakaoLogin(code));
  }, []);

  return;
};

export default OAuth2RedirectHandeler;
