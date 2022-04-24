import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { KAKAO_AUTH_URL } from "../shared/OAuth";

const Login = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const login_click = () => {
    const Login_info = {
      username: values.username,
      password: values.password,
    };

    if (values.username === "") {
      window.alert("아이디를 입력해주세요");
      return;
    }
    if (values.password === "") {
      window.alert("비밀번호를 입력해주세요");
      return;
    }
    console.log("성공");

    console.log(Login_info);

    dispatch(userActions.loginDB(Login_info));
  };

  // 토큰 체크
  const token = sessionStorage.getItem("token");

  // 토큰이 있다면, 바로 메인페이지로 이동하도록 실행
  useEffect(() => {
    if (token) {
      history.replace("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <LoginText1>로그인</LoginText1>
      <Container>
        <LoginBox>
          <form>
            <LoginText2>일반 로그인</LoginText2>
            <LogInput
              placeholder="아이디를 입력하세요"
              onChange={handleChange("username")}
            ></LogInput>
            <LogInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              autoComplete="on"
              onChange={handleChange("password")}
            ></LogInput>
          </form>
          <LoginButton onClick={login_click}>로그인</LoginButton>
          <FindButton>아이디 / 비밀번호 찾기</FindButton>
        </LoginBox>
        <SocialBox>
          <LoginText2>SNS 간편 로그인</LoginText2>
          <KakaoButton
            onClick={() => {
              window.location.href = KAKAO_AUTH_URL;
            }}
          >
            카카오로 시작하기{}
          </KakaoButton>
          <NaverButton>네이버로 시작하기</NaverButton>
          <FindButton
            onClick={() => {
              history.push("/signup");
            }}
          >
            정육각이 처음이신가요?
            <span style={{ color: "#e92d44" }}> 회원가입하기</span>
          </FindButton>
        </SocialBox>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 60px auto;
`;

const LoginBox = styled.div`
  width: 328px;
  margin: 50px auto;
`;

const SocialBox = styled.div`
  width: 328px;
  margin: 0 auto;
`;

const LoginText1 = styled.h1`
  width: fit-content;
  font-size: 27px;
  margin: 0px auto;
  margin-top: 150px;
`;

const LoginText2 = styled.h1`
  width: fit-content;
  font-size: 20px;
`;

const LogInput = styled.input`
  width: 328px;
  height: 46px;
  border: 1px solid #e1dedf;
  padding-left: 14px;
  font-size: 14px;
  margin: 0px auto;
  margin-top: 8px;
`;

const LoginButton = styled.button`
  width: 328px;
  height: 48px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  margin-top: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const FindButton = styled.button`
  width: 328px;
  height: 48px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  margin-top: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const KakaoButton = styled.button`
  width: 328px;
  height: 48px;
  border: none;
  background-color: #fae100;
  color: #3c1e1e;
  font-size: 16px;
  margin-top: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const NaverButton = styled.button`
  width: 328px;
  height: 48px;
  border: none;
  background-color: #1ec800;
  color: #fff;
  font-size: 16px;
  margin-top: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export default Login;
