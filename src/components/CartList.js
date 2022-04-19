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
  // const cart_list = useSelector((state) => state?.cart.list);

  // console.log(cart_list);

  React.useEffect(() => {
    dispatch(cartActions.getCartDB());
  }, []);

  // const totalPrice = useSelector((state) => state?.cart.totalPrice);

  const [qty, setQty] = React.useState(props?.quantity);

  const plusQty = () => {
    setQty(parseInt(qty) + 1);
  };

  const minusQty = () => {
    if (qty <= 1) {
      window.alert("최소 주문 수량은 1개 입니다!");
    } else {
      setQty(parseInt(qty) - 1);
    }
  };

  console.log(props.productId)
  const deleteItem = () => {
    dispatch(cartActions.deleteItemDB(props.productId));
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
          <Text width="22rem" size="16px" margin="0">
            {props.name}
          </Text>
          <Text color="#9b9b9b" size="14px" margin="0">
            {props.option}
          </Text>
        </Grid>
        <Grid is_flex2>
          <Text padding="0 5rem 0 0" width="7rem" color="#9b9b9b" size="14px">
            {props.serving}기준
          </Text>
          <Grid border="0.5px solid gray" width="118px" height="38px" is_flex>
            <Button
              bg="transparent"
              border="none"
              width="44px"
              height="38px"
              _onClick={minusQty}
            >
              <FaMinus size="15" color="gray" />
            </Button>
            <Text color="black" size="16px">
              {props.quantity}
            </Text>
            <Button
              bg="transparent"
              border="none"
              width="44px"
              height="38px"
              _onClick={plusQty}
            >
              <BsPlusLg size="15" color="gray" />
            </Button>
          </Grid>
          <Text padding="0 5rem 0 0" width="7rem" color="black" size="16px">
            {parseInt(props.price) * qty}원
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
