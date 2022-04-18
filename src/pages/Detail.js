import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

import styled from "styled-components";
import Quantity from "../components/Quantity";

const Detail = (props) => {
  let stanPrice = props.price.split(",").join(""); // 기준가에서 , 빼기

  console.log(stanPrice);
  const gramPrice = parseInt(stanPrice / props.serving) * 100; //g당 가격 계산
  return (
    <React.Fragment>
      <Header />
      <Grid bg="#1c1c1c" width="" height="">
        <Grid is_flex2 padding="96px 7rem 0rem 5rem">
          <Grid
            width="30rem"
            height="30rem"
            margin="0 1.4rem 1.5rem 0"
            padding="0.5rem 0.5rem 0rem 0.5rem"
          >
            <ItemImg
              src={
                "https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-fresh-list.png"
              }
              margin="3.5rem 2.5rem 0 2.5rem"
            />
          </Grid>
          <Grid width="20rem" margin="0 0 5rem 5rem">
            <Text color="white" size="28px" margin="5rem 0 1rem 0" bold>
              {props.name}
            </Text>
            <Text color="#9b9b9b" size="16px" margin="0">
              100g당 {gramPrice}원
            </Text>
            <Text color="white" size="24px" margin="0.3rem 0 0 0" bold>
              기준가 {props.price}원 ({props.serving}g)
            </Text>
            <hr
              style={{
                width: "23rem",
                height: "0.1rem",
                backgroundColor: "#4a4a4a",
                marginTop: "2rem",
                border: "0",
              }}
            />
            <Grid is_flex height="2rem" margin="2.9rem 0 0 0">
              <Text
                color="white"
                is_float="left"
                size="18px"
                margin="0rem 1rem 1rem 0"
              >
                옵션
              </Text>
              <Grid margin="0 0 2rem 0">
                <Dropdown />
              </Grid>
            </Grid>
            <Grid is_flex height="2rem" margin="2.9rem 0 0 0">
              <Text
                color="white"
                is_float="left"
                size="18px"
                margin="0 1rem 1rem 0"
                bold
              >
                수량
              </Text>
              <Grid margin="0 0 2rem 0">
                <Quantity/>
              </Grid>
            </Grid>
            <Grid is_flex2 margin="4rem 0 0 2rem">
              <Button
                width="50rem"
                height="4rem"
                bg="#888888"
                margin="0 2rem 0 0"
                cursor="t"
                border="none"
              >
                <Text color="white" size="16px" bold>
                  바로구매
                </Text>
              </Button>
              <Button
                width="50rem"
                height="4rem"
                bg="#d0021b"
                cursor="t"
                border="none"
              >
                <Text color="white" size="16px" bold>
                  장바구니
                </Text>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid width="5rem" margin="0 auto 2rem auto">
        <Text
          size="18px"
          color="#000"
          bold
          text_align="center"
          margin="2rem 0 0 0"
        >
          상품설명
        </Text>
        <hr />
      </Grid>
      <hr />
      <Text size="36px" text_align="center" bold>
        여기에는
      </Text>
      <Text size="36px" text_align="center" bold>
        기
      </Text>
      <Text size="36px" text_align="center" bold>
        ㄴ
      </Text>
      <Text size="36px" text_align="center" bold>
        이미지가 들어가요!
      </Text>
      <Footer />
    </React.Fragment>
  );
};

Detail.defaultProps = {
  name: "초신선 돼지 삼겹살 구이용",
  imageFile:
    "https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-fresh-list.png",
  price: "16,800",
  serving: "600",
};

const ItemImg = styled.div`
  width: 30rem;
  height: 30rem;
  background-image: url("${(props) => props.src}");
  aspect-ratio: auto 500 /500;
  position: relative;
  padding-top: 75%;
  background-position: center;
  background-size: cover;
`;

export default Detail;
