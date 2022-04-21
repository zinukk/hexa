import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import Grid from "../elements/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RESP } from "../shared/response";
import Modal from "react-modal";
import asd from "../shared/modal";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { AiOutlineDown } from "react-icons/ai";

import mainimg from "../shared/img/mainimg.png";
import slideimg1 from "../shared/img/slideimg1.png";
import freshplan from "../shared/img/freshplan.png";
import bottombanner from "../shared/img/bottombanner.png";

const Main = () => {
  const dispatch = useDispatch();

  // const data = RESP.lists;

  const data = useSelector((state) => state?.post?.lists);
  console.log(data);

  const Token = sessionStorage.getItem("token");
  console.log(Token);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [foodName, setFoodName] = useState("");
  const [foodId, setFoodId] = useState("");
  const [foodOp, setFoodOp] = useState([]);
  const [price, setPrice] = useState("");
  const [opt, setOpt] = useState("");
  const [isActive, setIsActive] = useState(false);

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

  const order = () => {
    const Order_info = {
      productId: foodId,
      option: opt,
      quantity: quantity,
    };

    console.log(Order_info);
    dispatch(postActions.sendpostDB(Order_info, Token));
  };

  const quanCount = () => {
    setQuantity(quantity + 1);
  };

  const quanMinus = () => {
    setQuantity(quantity - 1);
  };

  return (
    <React.Fragment>
      <Header />
      <Grid margin="96px auto">
        <Grid>
          <MainImg />
        </Grid>
        <BannerBox>
          <SlideImg1 />
          <FreshPlan />
        </BannerBox>
      </Grid>
      <div>
        <ContentBox>정육각 베스트 상품</ContentBox>
        <CardBox>
          {data?.map((cur, idx) => (
            <FoodCard key={cur?.productId}>
              <CardTopBox>
                {cur?.productType[0]?.zero === true ? (
                  <ZeroBox></ZeroBox>
                ) : (
                  <NonZeroBox></NonZeroBox>
                )}
                <CardImgBox>
                  <CardImg
                    src={cur?.image}
                    onClick={() => {
                      history.push(`/detail/${cur?.productId}`);
                    }}
                  ></CardImg>
                </CardImgBox>
                {Token ? (
                  <CartButton
                    onClick={() => {
                      setModalIsOpen(true);
                      setFoodName(cur?.name);
                      setPrice(cur?.price);
                      setFoodId(cur?.productId);
                      setFoodOp(cur?.option);
                      setOpt(cur?.option[0]);
                      console.log(opt);
                    }}
                  />
                ) : (
                  <CartButton
                    onClick={() => {
                      alert("로그인을 먼저 해주세요!");
                      history.push("/login");
                    }}
                  />
                )}
                {modalIsOpen ? (
                  <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    onRequestClose={() => {
                      setModalIsOpen(false);
                      setQuantity(1);
                      setIsActive(false);
                    }}
                    style={asd}
                  >
                    <ModalText>{foodName}</ModalText>
                    <QuanBox>
                      {quantity === 1 ? (
                        <MinBox>
                          <MinBut />
                        </MinBox>
                      ) : (
                        <MinBox onClick={quanMinus}>
                          <MinBut />
                        </MinBox>
                      )}
                      <NumBox>{quantity}</NumBox>
                      <PlusBox onClick={quanCount}>
                        <PlusBut />
                      </PlusBox>
                    </QuanBox>
                    <OptionsText>옵션선택</OptionsText>
                    <DropdownContainer>
                      <DropdownBody onClick={onActiveToggle}>
                        {opt ? (
                          <>
                            <ItemName>{opt}</ItemName>
                            <AiOutlineDown
                              color="gray"
                              style={{ position: "absolute", right: "68px" }}
                            />
                          </>
                        ) : (
                          <>
                            <DropdownSelect>{foodOp[0]}</DropdownSelect>
                            <AiOutlineDown
                              color="gray"
                              style={{ position: "absolute", right: "68px" }}
                            />
                          </>
                        )}
                      </DropdownBody>
                      <DropdownMenu isActive={isActive}>
                        {foodOp.map((cur, idx) => (
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
                    <TotalPrice>
                      {(price * quantity).toLocaleString()}원
                    </TotalPrice>

                    <BuyBtn
                      onClick={() => {
                        order();
                        history.push("/cart");
                      }}
                    >
                      바로구매
                    </BuyBtn>

                    <CartBtn
                      onClick={() => {
                        order();
                        setModalIsOpen(false);
                        alert("상품이 장바구니에 담겼습니다!");
                      }}
                    >
                      장바구니
                    </CartBtn>
                  </Modal>
                ) : null}
              </CardTopBox>
              <CardTitle
                onClick={() => {
                  history.push(`/detail/${cur?.productId}`);
                }}
              >
                {cur?.name}
              </CardTitle>
              <CardData
                onClick={() => {
                  history.push(`/detail/${cur.productId}`);
                }}
              >
                기준가 {cur?.price?.toLocaleString()}원/
                {cur?.serving?.toLocaleString()}
              </CardData>
            </FoodCard>
          ))}
        </CardBox>
      </div>
      <Grid>
        <BottomBanner />
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

const MainImg = styled.div`
  width: 100%;
  height: 560px;
  min-width: 1184px;
  padding-top: 35%;
  background-image: url(${mainimg});
  background-size: cover;
  cursor: pointer;
  margin: 6rem 0 0 0;
`;

const SlideImg1 = styled.div`
  width: 50%;
  padding-top: 14%;
  background-image: url(${slideimg1});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
  border-right: 1px solid #eee;
`;

const FreshPlan = styled.div`
  width: 50%;
  padding-top: 14%;
  background-image: url(${freshplan});
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const BottomBanner = styled.div`
  width: 1184px;
  height: 208px;
  padding-top: 18%;
  background-image: url(${bottombanner});
  background-size: cover;
  margin: 0px auto;
  margin-top: 100px;
  cursor: pointer;
`;

const BannerBox = styled.div`
  width: 1174px;
  height: 176px;
  display: flex;
  margin: 0px auto;
  margin-top: 50px;
`;

const ContentBox = styled.div`
  width: 1174px;
  height: 50px;
  margin: 0px auto;
  font-size: 32px;
  line-height: 32px;
  font-weight: 900;
`;

const CardBox = styled.div`
  width: 1200px;
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 4em;
`;

const FoodCard = styled.div`
  width: 376px;
  height: 483px;
  margin: 0px auto;
  position: relative;
`;

const CardTopBox = styled.div`
  width: 376px;
  height: 416px;
  border: 1px solid #f9f7f8;
  background-color: #f9f7f8;
`;

const ZeroBox = styled.div`
  width: 75px;
  height: 30px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NSIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDc1IDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNNjAgMkgxNUM3LjgyIDIgMiA3LjgyIDIgMTVjMCA3LjA3NyA1LjY1NSAxMi44MzMgMTIuNjkzIDEyLjk5NkwxNSAyOGg0NWM3LjE4IDAgMTMtNS44MiAxMy0xMyAwLTcuMDc3LTUuNjU1LTEyLjgzMy0xMi42OTMtMTIuOTk2TDYwIDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYgLTU4NCkgdHJhbnNsYXRlKDE2IDU4NCkiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM2OEQxRTYiIGQ9Ik02MCAwYzguMjg0IDAgMTUgNi43MTYgMTUgMTUgMCA4LjI4NC02LjcxNiAxNS0xNSAxNUgxNUM2LjcxNiAzMCAwIDIzLjI4NCAwIDE1IDAgNi43MTYgNi43MTYgMCAxNSAwaDQ1em0wIDJIMTVDNy44MiAyIDIgNy44MiAyIDE1YzAgNy4wNzcgNS42NTUgMTIuODMzIDEyLjY5MyAxMi45OTZMMTUgMjhoNDVjNy4xOCAwIDEzLTUuODIgMTMtMTMgMC03LjA3Ny01LjY1NS0xMi44MzMtMTIuNjkzLTEyLjk5Nkw2MCAyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2IC01ODQpIHRyYW5zbGF0ZSgxNiA1ODQpIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMkJCMkNEIiBkPSJNMjQuNjc0IDE1LjE0OFY5Ljk0aC04LjkzMnY1LjIwOGg4LjkzMnptLTEuODA2LTEuNDU2aC01LjMwNnYtMi4yOTZoNS4zMDZ2Mi4yOTZ6bS0xLjc1IDguNTEyVjE3Ljk5aDQuOTU2di0xLjQ3SDE0LjM5OHYxLjQ3aDQuODcydjQuMjE0aDEuODQ4em0xMi45Ny0xMC4yMnYtMS40NDJoLTIuODdWOS4yMjZoLTEuODYydjEuMzE2SDI2LjV2MS40NDJoNy41ODh6bTIuNTYyIDUuNTAydi0zLjM3NGgxLjcwOFYxMi42SDM2LjY1VjkuMzI0aC0xLjg0OHY4LjE2MmgxLjg0OHptLTYuMzU2LS40NzZjLjQ2NiAwIC44OTMtLjA1NiAxLjI4LS4xNjguMzg4LS4xMTIuNzIyLS4yNjggMS4wMDItLjQ2OS4yOC0uMi40OTctLjQ0MS42NS0uNzIxLjE1NS0uMjguMjMyLS41OTMuMjMyLS45MzhzLS4wNzctLjY1OC0uMjMxLS45MzhjLS4xNTQtLjI4LS4zNzEtLjUyMy0uNjUxLS43MjgtLjI4LS4yMDUtLjYxNC0uMzY0LTEuMDAxLS40NzYtLjM4OC0uMTEyLS44MTUtLjE2OC0xLjI4MS0uMTY4LS40NjcgMC0uODk0LjA1Ni0xLjI4MS4xNjgtLjM4OC4xMTItLjcyMS4yNy0xLjAwMS40NzYtLjI4LjIwNS0uNDk3LjQ0OC0uNjUxLjcyOC0uMTU0LjI4LS4yMzEuNTkzLS4yMzEuOTM4cy4wNzcuNjU4LjIzLjkzOGMuMTU1LjI4LjM3Mi41Mi42NTIuNzIxLjI4LjIuNjEzLjM1NyAxIC40NjkuMzg4LjExMi44MTUuMTY4IDEuMjgyLjE2OHptMC0xLjMzYy0uNDIgMC0uNzU5LS4wODItMS4wMTUtLjI0NS0uMjU3LS4xNjMtLjM4NS0uNDA0LS4zODUtLjcyMSAwLS4zMTcuMTI4LS41NTguMzg1LS43MjEuMjU2LS4xNjMuNTk1LS4yNDUgMS4wMTUtLjI0NS40MiAwIC43NTguMDgyIDEuMDE1LjI0NS4yNTYuMTYzLjM4NS40MDQuMzg1LjcyMSAwIC4zMTctLjEyOS41NTgtLjM4NS43MjEtLjI1Ny4xNjMtLjU5NS4yNDUtMS4wMTUuMjQ1em0yLjE1NiA2LjUyNGMuNjYyIDAgMS4yNjItLjA1MSAxLjc5OS0uMTU0LjUzNi0uMTAzLjk5MS0uMjUyIDEuMzY1LS40NDguMzczLS4xOTYuNjYtLjQzNi44Ni0uNzIxLjIwMS0uMjg1LjMwMi0uNjA0LjMwMi0uOTU5IDAtLjM2NC0uMS0uNjg4LS4zMDEtLjk3My0uMi0uMjg1LS40ODgtLjUyNS0uODYxLS43MjEtLjM3NC0uMTk2LS44MjktLjM0NS0xLjM2NS0uNDQ4LS41MzctLjEwMy0xLjEzNy0uMTU0LTEuOC0uMTU0LS42NjIgMC0xLjI2Mi4wNTEtMS43OTguMTU0LS41MzcuMTAzLS45OTIuMjUyLTEuMzY1LjQ0OC0uMzc0LjE5Ni0uNjYuNDM2LS44NjEuNzIxLS4yLjI4NS0uMzAxLjYwOS0uMzAxLjk3MyAwIC4zNTUuMS42NzQuMy45NTkuMjAxLjI4NS40ODguNTI1Ljg2Mi43MjEuMzczLjE5Ni44MjguMzQ1IDEuMzY1LjQ0OC41MzYuMTAzIDEuMTM2LjE1NCAxLjc5OS4xNTR6bTAtMS4zNzJjLS44MjIgMC0xLjQ0Mi0uMDc1LTEuODYyLS4yMjQtLjQyLS4xNS0uNjMtLjM3OC0uNjMtLjY4NiAwLS4zMTcuMjEtLjU0OC42My0uNjkzLjQyLS4xNDUgMS4wNC0uMjE3IDEuODYyLS4yMTcuODIxIDAgMS40NDIuMDcyIDEuODYyLjIxNy40Mi4xNDUuNjMuMzc2LjYzLjY5MyAwIC4zMDgtLjIxLjUzNy0uNjMuNjg2LS40Mi4xNS0xLjA0LjIyNC0xLjg2Mi4yMjR6bTE3LjE0Mi0zLjY0VjkuMzFoLTEuNzV2My4xMzZoLTEuMDA4VjkuNTQ4aC0xLjcyMnY3LjIzOGgxLjcyMlYxMy45M2gxLjAwOHYzLjI2MmgxLjc1em0tMTAuMTkyLS4zNWMuNTk3LS4yNTIgMS4wOTctLjU5NyAxLjQ5OC0xLjAzNi40MDEtLjQzOS43MTktLjkzMy45NTItMS40ODQuMjMzLjQ2Ny41MzcuODgyLjkxIDEuMjQ2cy44MjYuNjUzIDEuMzU4Ljg2OGwuOTgtMS40Yy0uNDItLjE2OC0uNzgyLS4zNzgtMS4wODUtLjYzLS4zMDMtLjI1Mi0uNTUzLS41My0uNzQ5LS44MzMtLjE5Ni0uMzAzLS4zMzgtLjYyNS0uNDI3LS45NjYtLjA4OS0uMzQtLjEzMy0uNjg0LS4xMzMtMS4wMjlWMTAuMDhoLTEuNzc4djEuNDk4YzAgLjM2NC0uMDQ3LjczMy0uMTQgMS4xMDYtLjA5My4zNzMtLjI0LjcyOC0uNDQxIDEuMDY0LS4yLjMzNi0uNDYuNjQ5LS43NzcuOTM4LS4zMTcuMjktLjcuNTMyLTEuMTQ4LjcyOGwuOTggMS40Mjh6bTUuODI0IDUuMzc2Yy42NzIgMCAxLjI4MS0uMDU2IDEuODI3LS4xNjguNTQ2LS4xMTIgMS4wMTMtLjI3IDEuNC0uNDc2LjM4Ny0uMjA1LjY4NC0uNDU3Ljg4OS0uNzU2LjIwNS0uMjk5LjMwOC0uNjQuMzA4LTEuMDIyIDAtLjM3My0uMTAzLS43MS0uMzA4LTEuMDA4LS4yMDUtLjI5OS0uNTAyLS41NS0uODg5LS43NTYtLjM4Ny0uMjA1LS44NTQtLjM2NC0xLjQtLjQ3Ni0uNTQ2LS4xMTItMS4xNTUtLjE2OC0xLjgyNy0uMTY4LS42ODEgMC0xLjI5NS4wNTYtMS44NDEuMTY4LS41NDYuMTEyLTEuMDEzLjI3LTEuNC40NzYtLjM4Ny4yMDUtLjY4Ni40NTctLjg5Ni43NTYtLjIxLjI5OS0uMzE1LjYzNS0uMzE1IDEuMDA4IDAgLjM4My4xMDUuNzIzLjMxNSAxLjAyMi4yMS4yOTkuNTA5LjU1Ljg5Ni43NTYuMzg3LjIwNS44NTQuMzY0IDEuNC40NzYuNTQ2LjExMiAxLjE2LjE2OCAxLjg0MS4xNjh6bTAtMS40Yy0uODUgMC0xLjQ5Ni0uMDg0LTEuOTM5LS4yNTItLjQ0My0uMTY4LS42NjUtLjQyNS0uNjY1LS43NyAwLS4zNDUuMjIyLS42MDIuNjY1LS43Ny40NDMtLjE2OCAxLjA5LS4yNTIgMS45MzktLjI1Mi44MyAwIDEuNDY4LjA4NCAxLjkxMS4yNTIuNDQzLjE2OC42NjUuNDI1LjY2NS43NyAwIC4zNDUtLjIyMi42MDItLjY2NS43Ny0uNDQzLjE2OC0xLjA4LjI1Mi0xLjkxMS4yNTJ6bTE2LjU0IDEuMzcyVjkuMjk2aC0xLjc1VjIyLjE5aDEuNzV6bS0yLjYzMi0uNTc0VjkuNTJINTcuNDF2NC4xODZoLTEuNjM4djEuNDk4aDEuNjM4djYuNDEyaDEuNzIyem0tNy41ODgtMS44MmMuNTg4LS4zNjQgMS4wNzQtLjg0NyAxLjQ1Ni0xLjQ0OS4zODMtLjYwMi42ODYtMS4yNzIuOTEtMi4wMDkuMjE1LjY4MS41MDcgMS4yOTMuODc1IDEuODM0LjM2OS41NDEuODQzLjk4IDEuNDIxIDEuMzE2bDEuMDc4LTEuMzQ0Yy0uNDY2LS4yNy0uODU4LS42MDQtMS4xNzYtMS4wMDEtLjMxNy0uMzk3LS41NzQtLjgzMy0uNzctMS4zMDktLjE5Ni0uNDc2LS4zMzYtLjk3OC0uNDItMS41MDUtLjA4NC0uNTI3LS4xMjYtMS4wNjItLjEyNi0xLjYwM3YtLjYzaDEuODc2di0xLjQ5OGgtNS43NHYxLjQ5OEg1M3YuNjNjMCAuNTUtLjA0NCAxLjEwNC0uMTMzIDEuNjU5LS4wODguNTU1LS4yMzMgMS4wODMtLjQzNCAxLjU4Mi0uMi41LS40NjQuOTYxLS43OSAxLjM4Ni0uMzI3LjQyNS0uNzI0Ljc4Ni0xLjE5IDEuMDg1bDEuMDkxIDEuMzU4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2IC01ODQpIHRyYW5zbGF0ZSgxNiA1ODQpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=");
  margin-top: 16px;
  margin-left: 16px;
`;

const NonZeroBox = styled.div`
  width: 75px;
  height: 30px;
  margin-top: 16px;
  margin-left: 16px;
`;

const CardImgBox = styled.div`
  width: 276px;
  margin: 0 auto;
  margin-top: 25px;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 276px;
  height: 276px;
  background-size: cover;
  margin: 0 auto;
  border: none;
`;

const CartButton = styled.div`
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgdmlld0JveD0iMCAwIDcyIDcyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzIxMjEyMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC41IDQ3LjVjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHptLTE2IDNjLS41NTIgMC0xIC40NDgtMSAxcy40NDggMSAxIDEgMS0uNDQ4IDEtMS0uNDQ4LTEtMS0xem0xNiAwYy0uNTUyIDAtMSAuNDQ4LTEgMXMuNDQ4IDEgMSAxIDEtLjQ0OCAxLTEtLjQ0OC0xLTEtMXpNMjMgMjBjLjU0NSAwIDEuMDQyLjI5NSAxLjMwNi43NjNsLjA2Ni4xMzJMMjUuNzQyIDI0SDUxYzEuMDUgMCAxLjc2MiAxLjA0NiAxLjQxMSAyLjAwOWwtLjA1LjEyLTYgMTNjLS4yMjQuNDg3LS42OS44MTMtMS4yMTYuODY0TDQ1IDQwSDMxLjMwM2wtMiAzSDQ2LjVjLjc4IDAgMS40Mi41OTUgMS40OTMgMS4zNTZMNDggNDQuNWMwIC43OC0uNTk1IDEuNDItMS4zNTYgMS40OTNMNDYuNSA0NmgtMjBjLTEuMTU0IDAtMS44NTktMS4yMzgtMS4zMTYtMi4yMmwuMDY4LS4xMTIgMy41NDMtNS4zMTZMMjIuMDIyIDIzSDE4LjVjLS43OCAwLTEuNDItLjU5NS0xLjQ5My0xLjM1NkwxNyAyMS41YzAtLjc4LjU5NS0xLjQyIDEuMzU2LTEuNDkzTDE4LjUgMjBIMjN6bTI1LjY1NSA3SDI3LjA2Nmw0LjQxMiAxMEg0NC4wNGw0LjYxNS0xMHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);
  width: 72px;
  height: 72px;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 2px solid #eee;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 80px;
  margin-left: 288px;
  margin-top: 20px;
  display: block;
  cursor: pointer;
  background-position: center center;
`;

const CardTitle = styled.h6`
  font-size: 18px;
  margin-top: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CardData = styled.p`
  font-size: 16px;
  color: #9b9b9b;
  cursor: pointer;
  margin-top: 5px;
`;

const ModalText = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const BuyBtn = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  float: left;
  cursor: pointer;
  background-color: #acacac;
  margin-top: 15px;
`;

const CartBtn = styled.button`
  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  float: left;
  cursor: pointer;
  background-color: black;
  margin-top: 15px;
`;

const QuanBox = styled.div`
  display: flex;
  width: 398px;
  height: 50px;
  margin: 0 auto;
  margin-top: 55px;
  border: 1px solid #e1dedf;
`;

const MinBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 22px 14px;
  cursor: pointer;
`;

const MinBut = styled.div`
  width: 21px;
  height: 3px;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIgMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiM5QjlCOUI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMSIgeTE9IjEiIHgyPSIxMSIgeTI9IjEiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K");
  background-repeat: no-repeat;
  background-color: white;
  border: none;
  cursor: pointer;
  background-position: center center;
`;

const PlusBox = styled.div`
  width: 50px;
  height: 50px;
  padding: 16px 16px;
  cursor: pointer;
`;

const PlusBut = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyIDEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzlCOUI5QjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI2IiB5MT0iMSIgeDI9IjYiIHkyPSIxMSIvPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEiIHkxPSI2IiB4Mj0iMTEiIHkyPSI2Ii8+CjwvZz4KPC9zdmc+Cg==");
  background-repeat: no-repeat;
  background-color: white;
  border: none;
  cursor: pointer;
  background-position: center center;
`;

const NumBox = styled.div`
  width: 298px;
  height: 50px;
  line-height: 48px;
  font-size: 18px;
  border-left: 1px solid #e1dedf;
  border-right: 1px solid #e1dedf;
  padding-left: 143px;
`;

const OptionsText = styled.p`
  margin-left: 51px;
  margin-top: 14px;
  font-weight: bold;
  line-height: 24px;
  font-size: 16px;
`;

const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-left: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DropdownContainer = styled.div`
  width: 398px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
  poition: relative;
`;

const DropdownBody = styled.div`
  width: 398px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e1dedf;
`;

const DropdownSelect = styled.p`
  font-weight: bold;
  color: black;
  margin: 0 auto;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 398px;
  height: 130px;
  position: absolute;
  border: none;
`;

const DropdownItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  padding: 9px 65px;
  border-top: none;
  border-left: 0.5px solid #e1dedf;
  border-right: 0.5px solid #e1dedf;

  &:last-child {
    border-bottom: 0.5px solid #e1dedf;
    border-left: 0.5px solid #e1dedf;
    border-right: 0.5px solid #e1dedf;
  }
`;

const ItemName = styled.p`
  font-weight: bold;
  color: black;
  margin: 0 auto;
`;

export default Main;
