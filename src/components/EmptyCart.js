import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import { history } from "../redux/configStore";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <Grid width="80%" margin="100px auto">
        <Text color="black" size="32px" text_align="center">
          장바구니
        </Text>
        <hr
          style={{
            width: "80vw",
            height: "0.1rem",
            backgroundColor: "black",
            margin: "3rem 1rem 0rem 1rem",
            border: "0",
          }}
        />
        <Text
          size="38px"
          color="#e1dedf"
          margin="76px 0 0 0"
          text_align="center"
          bold
        >
          장바구니에 담은 상품이 없습니다.
        </Text>
        <Button
          width="260px"
          height="70px"
          margin="50px auto 60px auto"
          cursor="t"
          is_flex
          border="none"
          _onClick={() => {
            history.push(`/`);
          }}
        >
          <Text margin="auto 0 auto 2rem" color="white" size="16px">
            쇼핑 계속하기
          </Text>
          <Text margin="auto 3rem auto auto" size="25px" color="white">
            →
          </Text>
        </Button>
        <hr
          style={{
            width: "80vw",
            height: "0.1rem",
            backgroundColor: "lightgray",
            margin: "3rem 1rem 0rem 1rem",
            border: "0",
          }}
        />
      </Grid>
    </React.Fragment>
  );
};

export default EmptyCart;
