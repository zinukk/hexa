import React from "react";
import Grid from "../elements/Grid";

import {history} from "../redux/configStore";

import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Post = (props) => {
  const [isHover, setIsHover] = React.useState(false);

  const chgBtnColor = () => {
    setIsHover(true);
  };
  const chgBtnColor2 = () => {
    setIsHover(false);
  };


  return (
    <React.Fragment>
      <div>
        <Grid
          width="25rem"
          height="27rem"
          bg="#F9F7F8"
          margin="1rem 0 0rem 3rem"
          cursor="t"
          _onClick={() => {
            history.push(`/detail`);
          }}
        >
          <div style={{ width: "276px", height: "276px", margin: "auto" }}>
            <Img src={props.imageFile} alt="이미지" />
          </div>
          {isHover ? (
            <>
              <CartBtn
                style={{
                  backgroundColor: "black",
                }}
                onMouseEnter={chgBtnColor}
                onMouseLeave={chgBtnColor2}
              >
                <span
                  style={{
                    color: "white",
                    width: "2rem",
                    height: "2rem",
                  }}
                >
                  <AiOutlineShoppingCart size="35"/>
                </span>
              </CartBtn>
            </>
          ) : (
            <>
              <CartBtn onMouseEnter={chgBtnColor} onMouseLeave={chgBtnColor2}>
                <span
                  style={{
                    color: "black",
                    width: "3.5rem",
                    height: "3.5rem",
                  }}
                >
                  <AiOutlineShoppingCart size="35" />
                </span>
              </CartBtn>
            </>
          )}
        </Grid>
        <Grid>
          <h5
            style={{
              fontWeight: "600",
              fontSize: "18px",
              fontFamily: "sans-serif",
              margin: "1.5rem 2.8rem 0rem 3rem",
              width: "250px",
            }}
          >
            {props.name}
          </h5>
          <h5
            style={{
              fontWeight: "300",
              fontSize: "16px",
              fontFamily: "sans-serif",
              color: "grey",
              margin: "0.5rem 2.8rem 3rem 3rem",
            }}
          >
            기준가 {props.price}/{props.serving}
          </h5>
        </Grid>
      </div>
    </React.Fragment>
  );
};

Post.defaultProps = {
  name: "초신선 돼지 삼겹살 구이용",
  imageFile:
    "https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-fresh-list.png",
  price: "16,800원",
  serving: "600g",
};

const CartBtn = styled.button`
  width: 4rem;
  height: 4rem;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 0.2rem solid #eee;
  border-radius: 50%;
  background-color: white;
  margin: 5rem 1rem 0 28.8rem;
  display: block;
  cursor: pointer;
  float: right;
`;

const Img = styled.img`
  width: 276px;
  height: 276px;
  margin-top: 5rem;
`;

export default Post;
