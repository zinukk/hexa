import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "react-modal";
import { useState } from "react";
import asd from "../shared/modal";
import { useSelector } from "react-redux";
import { RESP } from "../shared/response";

const ShopPork = () => {
  console.log(RESP);

  const data = RESP.lists;

  console.log(data[0].productType[1].zero);
  console.log(data[0].option);

  const post_list = useSelector((state) => state.post);
  console.log(post_list);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(16800);

  const quanCount = () => {
    setQuantity(quantity + 1);
  };

  const quanMinus = () => {
    setQuantity(quantity - 1);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <ImgBox />
        <ButtonBox>
          <FoodButton
            onClick={() => {
              history.push("/shoppork");
            }}
          >
            돼지
          </FoodButton>
          <FoodButton
            onClick={() => {
              history.push("/shopbeef");
            }}
          >
            소
          </FoodButton>
          <FoodButton
            onClick={() => {
              history.push("/shopchick");
            }}
          >
            {" "}
            닭
          </FoodButton>
        </ButtonBox>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

const ImgBox = styled.div`
  width: 100%;
  height: 520px;
  background-image: url("https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcpork.png");
  background-size: cover;
  margin-top: 96px;
`;

const Container = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 61px;
`;

const FoodButton = styled.button`
  width: 144px;
  height: 56px;
  border-radius: 2px;
  margin-right: 5px;
  line-height: 56px;
  cursor: pointer;
  background: #eee;
  font-size: 16px;
  font-weight: 700;
  border: none;
`;

export default ShopPork;
