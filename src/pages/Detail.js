import React, { useEffect, useCallback, useState } from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { TEST } from "../shared/response";

import { actionCreators as cartActions } from "../redux/modules/cart";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configStore";
import { AiOutlineDown } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

const Detail = (props) => {
  // const data = TEST;

  const data = useSelector((state) => state.post.one_post);
  console.log(data);

  const pId = props.match.params.productId;
  console.log(pId);

  const Token = sessionStorage.getItem("token");

  useEffect(() => {
    dispatch(postActions.getOnePostDB(pId));
  }, []);

  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [opt, setOpt] = useState("");

  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const onSelectItem = useCallback((e) => {
    const targetId = e.target.id;

    if (targetId === "item_name") {
      setOpt(e.target.parentElement.innerText);
    } else if (targetId === "item") {
      setOpt(e.target.innerText);
    }

    setIsActive((prev) => !prev);
  }, []);

  const quanCount = () => {
    setQuantity(quantity + 1);
  };

  const quanMinus = () => {
    setQuantity(quantity - 1);
  };
  console.log(opt);
  const order = () => {
    const Order_info = {
      productId: data.productId,
      option: opt,
      quantity: quantity,
    };
    console.log(Order_info);
    dispatch(postActions.sendpostDB(Order_info, Token));
  };

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
            <ItemImg src={data?.imageFile} margin="3.5rem 2.5rem 0 2.5rem" />
          </Grid>
          <Grid width="380px" height="500px" margin="0 0 5rem 5rem">
            <Text color="white" size="28px" margin="5rem 0 1rem 0" bold>
              {data?.name}
            </Text>
            <Text color="#9b9b9b" size="16px" margin="0">
              {/* {data.per} */}
            </Text>
            <Text color="white" size="24px" margin="0.3rem 0 0 0" bold>
              기준가 {data?.price}원 ({data?.serving})
            </Text>
            <hr
              style={{
                width: "380px",
                height: "0.1rem",
                backgroundColor: "#4a4a4a",
                marginTop: "2rem",
                border: "0",
              }}
            />
            <ControlBox>
              <ConboxText>옵션</ConboxText>
              <DropdownContainer>
                <DropdownBody onClick={onActiveToggle}>
                  {opt ? (
                    <>
                      <ItemName>{opt}</ItemName>
                      <AiOutlineDown
                        color="gray"
                        style={{ position: "absolute", right: "18px" }}
                      />
                    </>
                  ) : (
                    <>
                      <DropdownSelect>{data?.option[0]}</DropdownSelect>
                      <AiOutlineDown
                        color="gray"
                        style={{ position: "absolute", right: "18px" }}
                      />
                    </>
                  )}
                </DropdownBody>
                <DropdownMenu isActive={isActive}>
                  {data?.option.map((cur, idx) => (
                    <DropdownItemContainer
                      id="item"
                      key={idx}
                      onClick={onSelectItem}
                    >
                      <ItemName id="item_name">{cur}</ItemName>
                    </DropdownItemContainer>
                  ))}
                </DropdownMenu>
              </DropdownContainer>
            </ControlBox>
            <ControlBox>
              <ConboxText>수량</ConboxText>
              <QuanBox>
                {quantity === 1 ? (
                  <MinBox>
                    <FaMinus size="20" color="gray" />
                  </MinBox>
                ) : (
                  <MinBox onClick={quanMinus}>
                    <FaMinus size="20" color="gray" />
                  </MinBox>
                )}
                <NumBox>{quantity}</NumBox>
                <PlusBox onClick={quanCount}>
                  <BsPlusLg size="20" color="gray" />
                </PlusBox>
              </QuanBox>
            </ControlBox>
            <div style={{ display: "flex", marginTop: "50px" }}>
              <Button
                width="50rem"
                height="4rem"
                bg="#888888"
                margin="0 2rem 0 0"
                cursor="t"
                border="none"
                _onClick={() => {
                  order();
                  history.push("/cart");
                }}
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
                _onClick={() => {
                  order();
                }}
              >
                <Text color="white" size="16px" bold>
                  장바구니
                </Text>
              </Button>
            </div>
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

const ControlBox = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ConboxText = styled.p`
  font-size: 18px;
  line-height: 33px;
  color: white;
  margin-top: 9px;
`;

const DropdownContainer = styled.div`
  width: 319px;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const DropdownBody = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;
  border: 1px solid gray;
`;

const DropdownSelect = styled.p`
  font-weight: bold;
  color: white;
  margin: 0 auto;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 319px;
  height: 130px;
  position: absolute;
  border: none;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1c;

  padding: 9px 14px;
  border-top: none;
  border-left: 0.5px solid gray;
  border-right: 0.5px solid gray;

  &:last-child {
    border-bottom: 0.5px solid gray;
    border-left: 0.5px solid gray;
    border-right: 0.5px solid gray;
  }
`;

const ItemName = styled.p`
  font-weight: bold;
  color: white;
  margin: 0 auto;
`;

const QuanBox = styled.div`
  display: flex;
  width: 319px;
  height: 50px;
  border: 1px solid gray;
`;

const MinBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 15px 14px;
  cursor: pointer;
`;

const PlusBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 13px 16px;
  cursor: pointer;
`;

const NumBox = styled.div`
  width: 220px;
  height: 50px;
  line-height: 48px;
  font-size: 18px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding-left: 108px;
  color: white;
`;

export default Detail;
