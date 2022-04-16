import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";

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
      <Grid
        width="25rem"
        height="27rem"
        bg="#F9F7F8"
        margin="0rem 2.8rem 0rem 4.5rem"
      >
        <Image shape="rectangle" src={props.imageFile} size="50px" />
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
                // className="material-icons-oulined"
                style={{
                  color: "white",
                  width: "3.5rem",
                  height: "3.5rem",
                }}
              >
                <AiOutlineShoppingCart size="50" />
              </span>
            </CartBtn>
          </>
        ) : (
          <>
            <CartBtn 
            onMouseEnter={chgBtnColor}
            onMouseLeave={chgBtnColor2}
            >
              <span
                // className="material-icons-outlined"
                style={{
                  color: "black",
                  width: "3.5rem",
                  height: "3.5rem",
                }}
              ><AiOutlineShoppingCart size="50" /></span>
            </CartBtn>
          </>
        )}
      </Grid>
      <Grid margin="2rem 2.8rem 3rem 4.5rem">
        <h5
          style={{
            fontWeight: "600",
            fontSize: "18px",
            fontFamily: "sans-serif",
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
          }}
        >
          기준가 {props.price}/{props.serving}
        </h5>
      </Grid>
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
  width: 5rem;
  height: 5rem;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 0.2rem solid #eee;
  border-radius: 50%;
  background-color: white;
  margin: -1.8rem 2rem 0 28.8rem;
  display: block;
  cursor: pointer;
  float: right;
`;

export default Post;
