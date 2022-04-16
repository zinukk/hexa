import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { RiKakaoTalkLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => {
  return (
    <React.Fragment>
      <Container>
        <FooterTopBox>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "20px" }}>이용약관</p>
            <p style={{ fontWeight: "bold" }}>개인정보처리방침</p>
          </div>
          <div>
            <a href="https://pf.kakao.com/_sKxgkM">
              <RiKakaoTalkLine
                style={{
                  width: "27px",
                  height: "27px",
                  marginRight: "20px",
                }}
              />
            </a>
            <a href="https://www.instagram.com/jeongyookgak/">
              <AiOutlineInstagram style={{ width: "27px", height: "27px" }} />
            </a>
          </div>
        </FooterTopBox>
        <LineBox>
          <FooterBottomBox>
            <div>
              <img src="image/miniLogo.png" />
              <div
                style={{
                  lineHeight: "22px",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                (주)정육각 대표이사: 김재연 | 주소: 경기도 김포시 고촌읍
                아라육로57번길 126 <br />
                사업자등록번호 : 224-87-00271 [조회]|통신판매업신고번호:
                2021-경기김포-0668 <br />
                개인정보관리책임자: 박준태(privacy@yookgak.com)
              </div>
              <div style={{ marginTop: "30px" }}>
                © 2021 Jeongyookgak Inc. All rights reserved.
              </div>
            </div>
            <TextRight>
              <p style={{ fontWeight: "bold", fontSize: "16px" }}>고객센터</p>
              <p style={{ fontWeight: "bold", fontSize: "26px" }}>1800-0658</p>
              <p style={{ fontSize: "13px", color: "gray" }}>
                평일: 08:30 - 17:30 <br />
                점심: 12:30 - 13:30 <br />
                (토, 일 및 공휴일 휴무)
                <br />
              </p>
              <p style={{ fontSize: "15px", marginTop: "10px" }}>
                카카오톡:{" "}
                <span style={{ color: "skyblue", margintop: "10px" }}>
                  @정육각
                </span>
              </p>
              <p style={{ fontSize: "15px" }}>
                이메일:{" "}
                <span style={{ color: "skyblue" }}>help@yookgak.com</span>
              </p>
              <FooterButton>자주묻는질문</FooterButton>
              <FooterButton>1:1문의</FooterButton>
            </TextRight>
          </FooterBottomBox>
        </LineBox>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  border-top: 1px solid gray;
  padding-top: 25px;
`;
const FooterTopBox = styled.div`
  width: 1184px;
  minwidth: 1184px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const FooterBottomBox = styled.div`
  width: 1184px;
  minwidth: 1184px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const TextRight = styled.div`
  text-align: right;
`;

const FooterButton = styled.button`
  border-radius: 5px;
  width: 88px;
  height: 32px;
  border: 1px solid black;
  font-size: 14px;
  vertical-align: middle;
  background: #fff;
  margin-left: 10px;
  margin-top: 10px;
`;

const LineBox = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 20px 0;
`;

export default Footer;
