import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <HeaderBox>
          <FlexBox1>
            <img
              src="image/hexaLogo.png"
              style={{
                width: "140px",
                height: "59px",
                marginRight: "28px",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/");
              }}
            />
            <HeaderTxt1
              onClick={() => {
                history.push("/shoppork");
              }}
            >
              쇼핑하기
            </HeaderTxt1>
            <HeaderTxt1
              onClick={() => {
                window.alert("준비중인 서비스입니다!");
              }}
            >
              배송안내
            </HeaderTxt1>
            <HeaderTxt1
              onClick={() => {
                window.alert("준비중인 서비스입니다!");
              }}
            >
              이벤트
            </HeaderTxt1>
          </FlexBox1>
          <FlexBox2>
            <HeaderTxt2
              onClick={() => {
                window.alert("준비중인 서비스입니다!");
              }}
            >
              공지사항
            </HeaderTxt2>
            <HeaderTxt2
              onClick={() => {
                window.alert("준비중인 서비스입니다!");
              }}
            >
              고객센터
            </HeaderTxt2>
            <HeaderTxt2>|</HeaderTxt2>
            <HeaderTxt2
              onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </HeaderTxt2>
            <HeaderTxt2
              onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </HeaderTxt2>
          </FlexBox2>
        </HeaderBox>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  background: black;
  position: fixed;
  top: 0px;
  z-index: 10000;
`;

const HeaderBox = styled.div`
  width: 1184px;
  min-width: 1184px;
  height: 96px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const FlexBox1 = styled.div`
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
`;

const FlexBox2 = styled.div`
  display: flex;
  width: fit-content;
  height: 60px;
  align-items: center;
`;

const HeaderTxt1 = styled.p`
  font-size: 1.2em;
  color: white;
  margin: 0 12px;
  cursor: pointer;
`;

const HeaderTxt2 = styled.p`
  font-size: 1em;
  color: white;
  margin: 0 8px;
  cursor: pointer;
`;
export default Header;
