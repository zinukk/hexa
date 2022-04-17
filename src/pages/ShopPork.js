import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "react-modal";
import { useState } from "react";

const ShopPork = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Container>
        <ImgBox />
        {/* <Modal isOpen={true}>This is Modal content</Modal> */}
        <ButtonBox>
          <FoodButton
            onClick={() => {
              history.push("/shoppork");
            }}
          >
            돼지
          </FoodButton>
          <FoodButton
            onClick={() => {
              history.push("/shopbeef");
            }}
          >
            소
          </FoodButton>
          <FoodButton
            onClick={() => {
              history.push("/shopchick");
            }}
          >
            {" "}
            닭
          </FoodButton>
        </ButtonBox>
        <CardBox>
          <FoodCard>
            <CardTopBox>
              <ZeroBox></ZeroBox>
              <CardImgBox>
                <CardImg></CardImg>
              </CardImgBox>
              <CartButton
                onClick={() => {
                  setModalIsOpen(true);
                }}
              />
              {modalIsOpen ? (
                <Modal
                  isOpen={modalIsOpen}
                  riaHideApp={false}
                  onRequestClose={() => setModalIsOpen(false)}
                >
                  This is Modal content hi{" "}
                  <button
                    onClick={() => {
                      setModalIsOpen(false);
                    }}
                  >
                    닫기
                  </button>
                </Modal>
              ) : null}
            </CardTopBox>
            <CardTitle>초신선 무항생제 돼지 삼겹살 수육용</CardTitle>
            <CardData>기준가 19,800원/600g</CardData>
          </FoodCard>
          {/* <FoodCard>
            <CardTopBox>
              <ZeroBox></ZeroBox>
              <CardImgBox>
                <CardImg></CardImg>
              </CardImgBox>
              <CartButton></CartButton>
            </CardTopBox>
            <CardTitle>초신선 무항생제 돼지 삼겹살 수육용</CardTitle>
            <CardData>기준가 19,800원/600g</CardData>
          </FoodCard>{" "}
          <FoodCard>
            <CardTopBox>
              <ZeroBox></ZeroBox>
              <CardImgBox>
                <CardImg></CardImg>
              </CardImgBox>
              <CartButton></CartButton>
            </CardTopBox>
            <CardTitle>초신선 무항생제 돼지 삼겹살 수육용</CardTitle>
            <CardData>기준가 19,800원/600g</CardData>
          </FoodCard>{" "}
          <FoodCard>
            <CardTopBox>
              <ZeroBox></ZeroBox>
              <CardImgBox>
                <CardImg></CardImg>
              </CardImgBox>
              <CartButton></CartButton>
            </CardTopBox>
            <CardTitle>초신선 무항생제 돼지 삼겹살 수육용</CardTitle>
            <CardData>기준가 19,800원/600g</CardData>
          </FoodCard> */}
        </CardBox>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

const ImgBox = styled.div`
  width: 100%;
  height: 520px;
  background-image: url("https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcpork.png");
  background-size: cover;
  margin-top: 96px;
`;

const Container = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 61px;
`;

const FoodButton = styled.button`
  width: 144px;
  height: 56px;
  border-radius: 2px;
  margin-right: 5px;
  line-height: 56px;
  cursor: pointer;
  background: #eee;
  font-size: 16px;
  font-weight: 700;
  border: none;
`;

const CardBox = styled.div`
  width: 1200px;
  margin: 72px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5em;
`;

const FoodCard = styled.div`
  width: 376px;
  height: 483px;
  margin: 0px auto;
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

const CardImgBox = styled.div`
  width: 208px;
  margin: 0 auto;
  margin-top: 50px;
  cursor: pointer;
`;

const CardImg = styled.div`
  width: 208px;
  height: 208px;
  background-image: url("https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-clean-whole-list.png");
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
  bottom: 16px;
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

export default ShopPork;
