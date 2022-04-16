import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Text from "../elements/Text";
import Grid from "../elements/Grid";

const Cart = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid margin="180px 0 0 0">
        <Text text_align="center" size="32px">
          장바구니
        </Text>
      </Grid>
      <Grid margin="0 0 0 15rem">
        <hr
          style={{
            width: "50rem",
            height: "0.1rem",
            backgroundColor: "#4a4a4a",
            marginTop: "2rem",
            border: "0",
          }}
        />
        <Grid is_flex width="50%" height="55px">
          <Text margin="0 0 0 10rem" size="13px" bold>상품정보</Text>
          <Text margin="0 0 0 10rem" size="13px" bold>수량</Text>
          <Text margin="0 5rem 0 0" size="13px" bold>가격</Text>
        </Grid>
        <hr
          style={{
            width: "50rem",
            height: "0.1rem",
            backgroundColor: "#e1dedf",
            marginTop: "0.5rem",
            border: "0",
          }}
        />
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
