import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <React.Fragment>
      <Header />

      <Container>
        <SignupText>회원가입</SignupText>
        <p style={{ fontSize: "15px", marginBottom: "15px" }}>가입정보 입력</p>
        <FlexBox>
          <KeyBox>
            <KeyTxt>아이디</KeyTxt>
          </KeyBox>
          <ValueBox>
            <LoginInput />
          </ValueBox>
        </FlexBox>

        <FlexBox>
          <KeyBox>
            <KeyTxt>비밀번호</KeyTxt>
          </KeyBox>
          <ValueBox>
            <LoginInput />
          </ValueBox>
        </FlexBox>

        <FlexBox>
          <KeyBox>
            <KeyTxt>비밀번호 확인</KeyTxt>
          </KeyBox>
          <ValueBox>
            <LoginInput />
          </ValueBox>
        </FlexBox>

        <FlexBox>
          <KeyBox style={{ borderBottom: "1px solid #e1dedf" }}>
            <KeyTxt>이름</KeyTxt>
          </KeyBox>
          <ValueBox style={{ borderBottom: "1px solid #e1dedf" }}>
            <LoginInput type={Text} />
          </ValueBox>
        </FlexBox>

        <BackButton>이전으로</BackButton>
        <SubmitButton>가입하기</SubmitButton>
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
