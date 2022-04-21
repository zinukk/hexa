import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CartList from "../components/CartList";

import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Button from "../elements/Button";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cartActions } from "../redux/modules/cart";
import { history } from "../redux/configStore";
import EmptyCart from "../components/EmptyCart";

const Cart = (props) => {
  const dispatch = useDispatch();

  const Token = sessionStorage.getItem("token");
  const cart_list = useSelector((state) => state?.cart?.list?.lists);
  console.log(Token);

  React.useEffect(() => {
    dispatch(cartActions.getCartDB(Token));
  }, []);

  React.useEffect(() => {
    let totalprice = 0;
    cart_list?.map((p, idx) =>  totalprice = p.price + totalprice);
    console.log("dd")
    console.log(cart_list);
    console.log(totalprice);
    getTotal(totalprice);
  },[cart_list])

  
  // const totalPrice = props.price * props.quantity;

  const [tot, setTot] = React.useState();

  const getTotal = (total) => {
    console.log(total);
    setTot(total);
  };

  const order = () => {
    dispatch(cartActions.deleteCartDB(Token));
  };

  if (cart_list?.length !== 0) {
    return (
      <React.Fragment>
        <Header />
        <Grid margin="200px 0 0 0">
          <Text text_align="center" size="32px">
            장바구니
          </Text>
        </Grid>
        <Div>
          <div style={{ margin: "0 0 55rem 8rem" }}>
            <hr
              style={{
                width: "64rem",
                height: "0.06rem",
                backgroundColor: "#4a4a4a",
                marginTop: "2rem",
                border: "0",
              }}
            />
            <Grid is_flex width="100px" height="55px">
              <Text margin="0 0 0 15rem" size="13px" bold>
                상품정보
              </Text>
              <Text margin="0 0rem 0 18rem" size="13px" bold>
                수량
              </Text>
              <Text margin="0 0rem 0 10rem" size="13px" bold>
                가격
              </Text>
            </Grid>
            <hr
              style={{
                width: "64rem",
                height: "0.1rem",
                backgroundColor: "#e1dedf",
                marginTop: "0.5rem",
                border: "0",
              }}
            />
            {cart_list?.map((p, idx) => {
              return (
                <CartList
                  {...p}
                  key={p.productId}
                  getTotal={getTotal}

                  tot={tot}
                />
              );
            })}
          </div>
          <div style={{ margin: "0 0 44.5rem 0" }}>
            <Grid margin="0 0 0 2rem" width="280px" bg="#f8f8f8">
              <hr
                style={{
                  width: "17.6rem",
                  height: "0.06rem",
                  backgroundColor: "#4a4a4a",
                  marginTop: "2rem",
                  border: "0",
                }}
              />
              <Grid margin="auto auto 3.5rem auto">
                <Grid is_flex height="55px">
                  <Text margin="0 0 0 1rem" size="15px" bold>
                    총 상품 금액
                  </Text>
                  <Text margin="0 1rem 0 0" size="15px">
                    {tot}원
                  </Text>
                </Grid>
                <hr
                  style={{
                    width: "15rem",
                    height: "0.1rem",
                    backgroundColor: "#e1dedf",
                    marginTop: "0.5rem",
                    margin: "0.5rem 1rem 0rem 1rem",
                    border: "0",
                  }}
                />
                <Grid is_flex height="55px">
                  <Text margin="0 0 0 1rem" size="15px" bold>
                    총 배송비
                  </Text>
                  <Text margin="0 1rem 0 0" size="15px">
                    0원
                  </Text>
                </Grid>
                <Grid is_flex>
                  <Text margin="0 0 0.5rem 9.5rem" color="#9b9b9b" size="13px">
                    기본배송비
                  </Text>
                  <Text color="#9b9b9b" margin="0 1rem 0.5rem 0" size="13px">
                    {props.basicshipfee}원
                  </Text>
                </Grid>
                <Grid is_flex>
                  <Text margin="0 0 0.5rem 8rem" color="#4a90e2" size="13px">
                    첫구매 무료배송
                  </Text>
                  <Text color="#4a90e2" margin="0 1rem 0.5rem 0" size="13px">
                    -100%
                  </Text>
                </Grid>
                <hr
                  style={{
                    width: "15rem",
                    height: "0.1rem",
                    backgroundColor: "#e1dedf",
                    marginTop: "0.5rem",
                    margin: "0.5rem 1rem 0rem 1rem",
                    border: "0",
                  }}
                />
                <Grid>
                  <Text margin="0.5rem 0 2rem 2rem" color="#4a90e2" size="13px">
                    첫구매 무료배송 혜택이 적용되었습니다.
                  </Text>
                  <Text margin="0.5rem 0 0 11.5rem" size="13px" bold>
                    예상 결제금액
                  </Text>
                  <Text
                    color="#d0021b"
                    margin="0.5rem 0 1.5rem 10.3rem"
                    size="24px"
                    bold2="900"
                  >
                    {tot}원
                  </Text>
                  <Button
                    margin="0rem 3rem 1rem 3rem"
                    width="12rem"
                    bg="#d0021b"
                    border="none"
                    cursor="t"
                    _onClick={order}
                  >
                    <Text color="white" size="15px" bold>
                      전체상품 주문하기
                    </Text>
                  </Button>
                  <Button
                    margin="0rem 3rem 2rem 3rem"
                    width="12rem"
                    bg="#acacac"
                    border="none"
                    cursor="t"
                    _onClick={() => {
                      history.push(`/`);
                    }}
                  >
                    <Text color="white" size="15px" bold>
                      쇼핑계속하기
                    </Text>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Div>
        <Footer />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <EmptyCart />
        <Footer />
      </React.Fragment>
    );
  }
};

// Cart.defaultProps = {
//   price: "16,800",
//   basicshipfee: "2,500",
//   totalshipfee: "0",
//   yesangfee: "16,800",
// };

const Div = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: auto;
  position: relative;
`;
export default Cart;

