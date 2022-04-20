// import React from "react";
// import { BsPlusLg } from "react-icons/bs";
// import { FaMinus } from "react-icons/fa";

// import Grid from "../elements/Grid";
// import Button from "../elements/Button";
// import Text from "../elements/Text";
// import { actionCreators as cartActions } from "../redux/modules/cart";

// import { useDispatch, useSelector } from "react-redux";

// const Quantity = (props) => {
//   const dispatch = useDispatch();

//   const item_quantity = useSelector((state) => state?.cart.quantity);

//   const [qty, setQty] = React.useState("1");

//   const plusNum = () => {
//       setQty(parseInt(qty) + 1);
//     };

//     const minusNum = () => {
//         if(qty <= 1) {
//             window.alert("최소 주문 수량은 1개 입니다!")
//         }else{
//       setQty(parseInt(qty) - 1);
//         }
//     };

//   return (
//     <Grid border="0.5px solid gray" width="317px" height="50px" is_flex>
//       <Button
//         cursor="t"
//         bg="transparent"
//         border="0.5px solid gray"
//         width="50px"
//         height="50px"
//         _onClick={dispatch(cartActions.minusQty(props.productId))}
//       >
//         <FaMinus size="20" color="gray" />
//       </Button>
//       <Text cursor="t" color="white" size="16px">
//         {item_quantity}
//       </Text>
//       <Button
//         bg="transparent"
//         border="0.5px solid gray"
//         width="50px"
//         height="50px"
//         _onClick={dispatch(cartActions.plusQty(props.productId))}
//       >
//         <BsPlusLg size="20" color="gray" />
//       </Button>
//     </Grid>
//   );
// };

// export default Quantity;
