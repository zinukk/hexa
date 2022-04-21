import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { VscChromeClose } from "react-icons/vsc";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import { actionCreators as cartActions } from "../redux/modules/cart";
import { useDispatch, useSelector } from "react-redux";

const CartList = (props) => {
  const dispatch = useDispatch();

  const Token = sessionStorage.getItem("token");

  const item_quantity = useSelector((state) => state?.cart.quantity);

  console.log(props.productId);

  const pId = props.productId;
  const pOption = props.option;

  const deleteItem = () => {
    console.log(pId, pOption);
    dispatch(cartActions.deleteItemDB(pId, pOption, Token));
  };

  return (
    <>
      <Grid
        height="147px"
        is_flex
        padding="2rem 0"
        borderBottom="0.1rem solid #e1dedf"
      >
        <div>
          <div style={{ width: "109px", height: "109px", margin: "auto" }}>
            <ItemImg src={props.image} alt="이미지" />
          </div>
        </div>
        <Grid padding="1rem 2.5rem 2.5rem 5rem">
          <Text width="13rem" size="16px">
            {props.name}
          </Text>
          <Text color="#9b9b9b" size="14px" margin="0">
            {props.option}
          </Text>
        </Grid>
        <Grid is_flex2 margin="auto 8rem auto auto">
          <Text padding="0 5rem 0 0" width="7rem" color="#9b9b9b" size="14px">
            {props.serving}기준
          </Text>
          <Grid
            margin="auto 5rem auto auto"
            border="0.5px solid gray"
            width="118px"
            height="38px"
            is_flex
          >
            <Button
              bg="transparent"
              border="none"
              width="44px"
              height="38px"
              _onClick={() => {
                props.getTotal(props.tot - props.price); // Cart.js getTotal()에 실어 갈 값 -> setTot
                dispatch(cartActions.minusQty(props.productId));
              }}
            >
              <FaMinus size="15" color="gray" />
            </Button>
            <Text color="black" size="16px">
              {item_quantity}
            </Text>
            <Button
              bg="transparent"
              border="none"
              width="44px"
              height="38px"
              _onClick={() => {
                props.getTotal(props.tot + props.price);
                dispatch(cartActions.plusQty(props.productId));
              }}
            >
              <BsPlusLg size="15" color="gray" />
            </Button>
          </Grid>
          <Text padding="0 5rem 0 0" width="7rem" color="black" size="16px">
            {parseInt(props.price) * item_quantity}원
          </Text>
          <Button
            padding="auto"
            bg="white"
            border="0.5px solid lightgray"
            width="40px"
            height="40px"
            cursor="pointer"
          >
            <VscChromeClose size="20" color="gray" onClick={deleteItem} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

// CartList.defaultProps = {
//   productId: "1",
//   name: "초신선 돼지 삼겹살 구이용",
//   option: "보통(16mm)",
//   quantity: "1",
//   imageFile:
//     "https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-fresh-list.png",
//   price: "16800",
//   serving: "600g",
//   productType: [{fresh:”true”}, {zero:”true”}]
// };

const ItemImg = styled.img`
  width: 109px;
  height: 109px;
  position: absolute;
  overflow: hidden;
  margin-left: 2rem;
`;

export default CartList;
