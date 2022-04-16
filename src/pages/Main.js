import React from "react";
import styled from "styled-components";

import Post from "../components/Post";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Header from "../components/Header";

import mainimg from "../shared/img/mainimg.png";
import slideimg1 from "../shared/img/slideimg1.png";
import freshplan from "../shared/img/freshplan.png";
import bottombanner from "../shared/img/bottombanner.png";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid margin="96px auto">
        <Grid>
          <MainImg />
        </Grid>
        <Grid is_flex padding="80px">
          <SlideImg1 />
          <FreshPlan />
        </Grid>
        <Grid margin="auto auto auto 80px">
          <h5
            style={{
              fontWeight: "600",
              fontSize: "32px",
              fontFamily: "sans-serif",
            }}
          >
            정육각 베스트 상품
          </h5>
        </Grid>
        <Grid>
          <Post />
        </Grid>
      </Grid>
      <Grid padding="3rem 14rem 3rem 14rem">
        <BottomBanner />
      </Grid>
    </React.Fragment>
  );
};

const MainImg = styled.div`
  padding-top: 35%;
  background-image: url(${mainimg});
  background-position: 50%;
  background-size: cover;
  cursor: pointer;
  margin: 6rem 0 0 0;
`;

const SlideImg1 = styled.div`
  width: 50%;
  padding-top: 14%;
  background-image: url(${slideimg1});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const FreshPlan = styled.div`
  width: 50%;
  padding-top: 14%;
  background-image: url(${freshplan});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const BottomBanner = styled.div`
  padding-top: 18%;
  background-image: url(${bottombanner});
  background-position: 40%;
  background-size: cover;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Main;
