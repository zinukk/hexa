import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { usernameCheck, checkName, checkPassword } from "../shared/SignupCheck";
import { createActions as userActions } from "redux-actions";

const SignUp = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    name: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const signup = () => {
    console.log(values);

    const Signup_info = {
      username: values.id,
      password: values.password,
      passwordCheck: values.passwordCheck,
      name: values.name,
    };

    if (
      values.username === "" ||
      values.name === "" ||
      values.password === "" ||
      values.passwordCheck === ""
    ) {
      window.alert("아이디, 비밀번호, 이름을 모두 입력해주세요");
      return;
    }
    if (!usernameCheck(values.username)) {
      window.alert("아이디는 영문, 숫자로만 입력해주세요");
      return;
    }
    if (!checkPassword(values.password)) {
      window.alert(
        "비밀번호는 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다"
      );
      return;
    }
    if (!checkName(values.name)) {
      window.alert("이름은 2글자 이상 6글자 이하로 입력해주세요");
      return;
    }
    if (values.password.includes(values.username)) {
      alert("비밀번호에 아이디가 포함되어 있습니다");
      return;
    }
    if (values.password !== values.passwordCheck) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    dispatch(userActions.signupDB(Signup_info));
  };

  return (
    <React.Fragment>
      <Header />

      <Container>
        <SignupText>회원가입</SignupText>
        <p style={{ fontSize: "15px", marginBottom: "15px" }}>가입정보 입력</p>
        <form>
          <FlexBox>
            <KeyBox>
              <KeyTxt>아이디</KeyTxt>
            </KeyBox>
            <ValueBox>
              <LoginInput
                type="text"
                name="username"
                onChange={handleChange("username")}
                placeholder="아이디는 영문, 숫자로만 입력해주세요"
              />
            </ValueBox>
          </FlexBox>

          <FlexBox>
            <KeyBox>
              <KeyTxt>비밀번호</KeyTxt>
            </KeyBox>
            <ValueBox>
              <LoginInput
                type="password"
                name="password"
                autoComplete="off"
                onChange={handleChange("password")}
                placeholder="비밀번호는 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다"
              />
            </ValueBox>
          </FlexBox>

          <FlexBox>
            <KeyBox>
              <KeyTxt>비밀번호 확인</KeyTxt>
            </KeyBox>
            <ValueBox>
              <LoginInput
                type="password"
                name="passwordCheck"
                autoComplete="off"
                onChange={handleChange("passwordCheck")}
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </ValueBox>
          </FlexBox>

          <FlexBox>
            <KeyBox style={{ borderBottom: "1px solid #e1dedf" }}>
              <KeyTxt>이름</KeyTxt>
            </KeyBox>
            <ValueBox style={{ borderBottom: "1px solid #e1dedf" }}>
              <LoginInput
                type="text"
                name="nickname"
                onChange={handleChange("name")}
                placeholder="이름은 2글자 이상 6글자 이하로 입력해주세요"
              />
            </ValueBox>
          </FlexBox>
        </form>
        <BackButton>이전으로</BackButton>
        <SubmitButton onClick={signup}>가입하기</SubmitButton>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 780px;
  height: 400px;
  margin: 200px auto;
`;

const FlexBox = styled.div`
  display: flex;
  width: 780px;
  height: 69px;
`;

const KeyBox = styled.div`
  width: 179px;
  border-top: 1px solid #e1dedf;
  border-left: 1px solid #e1dedf;
  border-right: 1px solid #e1dedf;
  background-color: #f7f7f7;
`;

const ValueBox = styled.div`
  width: 600px;
  height: 69px;
  border-left: none;
  border-top: 1px solid #e1dedf;
  border-right: 1px solid #e1dedf;
`;

const LoginInput = styled.input`
  margin-left: 20px;
  margin-top: 15px;
  padding-left: 22px;
  font-size: 13px;
  width: 456px;
  height: 38px;
  border: 1px solid #e1dedf;
`;

const KeyTxt = styled.p`
  font-size: 13px;
  line-height: 68px;
  padding-left: 30px;
`;

const BackButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: gray;
  margin-top: 40px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: black;
  margin-top: 40px;
  cursor: pointer;
`;

const SignupText = styled.h1`
  width: fit-content;
  font-size: 32px;
  margin: 50px auto;
`;

const SignupImg = styled.img`
  margin: 0 auto;
`;

const ImgBox = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default SignUp;
