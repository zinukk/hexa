import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");

  const logout_click = () => {
    sessionStorage.removeItem("token");
    // dispatch(userActions.logoutDB());
    history.replace("/login");
  };

  if (token) {
    return (
      <React.Fragment>
        <Container>
          <HeaderBox>
            <FlexBox1>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2ODgiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNjg4IDI1NiI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTM3LjM0MyAyMGMuNDUyIDAgLjg5Ny4xMDIgMS4zMDIuMjk4bC4yLjEwNSA4Mi41NTQgNDcuNzk0Yy4zMy4xOTEuNTQ4LjUyNy41OTMuOTAxbC4wMDguMTQydjEzLjMyNGMwIC4zODMtLjE4MS43NC0uNDgyLjk2NmwtLjExOS4wNzgtMTY4LjMyMiA5Ny40NzQgNzguMSA0NS4yMTkgNzguMTEtNDUuMjE5LTY3LjQ1My0zOS4wNTYgMTIuNzEzLTcuMzYzTDIyMS40IDE3My4zN2MuMzMuMTkxLjU0OC41MjcuNTkzLjkwMWwuMDA4LjE0MnYxMy4zMzZjMCAuMzgyLS4xODEuNzQtLjQ4Mi45NjVsLS4xMTkuMDc4LTgyLjU2NSA0Ny44MDRjLS4zOTIuMjI2LS44MjguMzYtMS4yNzcuMzk1bC0uMjI1LjAwOGgtMTIuM2MtLjQ1MiAwLS44OTctLjEwMi0xLjMwMy0uMjk4bC0uMTk5LS4xMDUtODAuMTgxLTQ2LjQyMWMtLjM5NC0uMjI4LS43My0uNTQyLS45ODMtLjkxN2wtLjEyLS4xOTItNy44NC0xMy42OTljLS4yMjQtLjM5LS4zNTctLjgyNi0uMzktMS4yNzRsLS4wMDktLjIyNUwzNCA4MC4zOWMwLS40NDcuMS0uODg4LjI5LTEuMjkybC4xMDMtLjE5OCA1LjQzNC05LjU2OGMuMjI2LS4zOTkuNTQtLjc0LjkxNS0uOTk2bC4xOTMtLjEyMiA4Mi41NzQtNDcuODFjLjM5LS4yMjcuODI3LS4zNjIgMS4yNzYtLjM5NmwuMjI1LS4wMDhoMTIuMzMzem0yMTcuNjM0IDEyOS42MjRsLjcwOS4wMDRjNS4xNjcuMDY2IDkuNzg5Ljg1NiAxMy44NjUgMi4zNyA0LjI2MSAxLjU4MSA3Ljg5NyAzLjcyOSAxMC45MDkgNi40NDEgMy4wMSAyLjcxMiA1LjMxMiA1LjkzMyA2LjkwMyA5LjY2MyAxLjU5IDMuNzI5IDIuMzg2IDcuNzk3IDIuMzg2IDEyLjIwNSAwIDQuNDA3LS43OTUgOC40NzYtMi4zODYgMTIuMjA1LTEuNTkxIDMuNzMtMy44OTIgNi45NS02LjkwMyA5LjY2My0zLjAxMiAyLjcxMi02LjY0OCA0Ljg2LTEwLjkxIDYuNDQyLTQuMDc1IDEuNTEzLTguNjk3IDIuMzAzLTEzLjg2NCAyLjM2OGwtLjcwOS4wMDVoLTIyLjQ5OWwtLjcwOC0uMDA1Yy01LjE2Ny0uMDY1LTkuNzktLjg1NS0xMy44NjUtMi4zNjgtNC4yNjEtMS41ODMtNy44OTgtMy43My0xMC45MDktNi40NDItMy4wMTEtMi43MTItNS4zMTItNS45MzMtNi45MDMtOS42NjMtMS41OTEtMy43My0yLjM4Ni03Ljc5OC0yLjM4Ni0xMi4yMDUgMC00LjQwOC43OTUtOC40NzYgMi4zODYtMTIuMjA1IDEuNTktMy43MyAzLjg5Mi02Ljk1IDYuOTAzLTkuNjYzIDMuMDExLTIuNzEyIDYuNjQ4LTQuODYgMTAuOTA5LTYuNDQyIDQuMDc2LTEuNTEzIDguNjk4LTIuMzAzIDEzLjg2NS0yLjM2OWwuNzA4LS4wMDRoMjIuNXptMjgwLjc5OCAxLjY5NWwuMTg3LjAwOWMuNDMyLjAzOS44My4yMTQgMS4xOTMuNTI3bC4xNTQuMTQyIDcuNjcgOC4xMzcuMTA3LjExN2MuMjM2LjI4NC4zNjguNjM1LjM5OCAxLjA1NWwuMDA2LjE4NHY0Mi43MmwtLjAwNi4xNjVjLS4wNTYuNzU0LS41MDMgMS4yNDgtMS4zNDIgMS40ODNsLS4xODYuMDQ2LTE0LjgyOSAzLjM5LS4xNDguMDNjLS4zODguMDU2LS43MDctLjA2Ny0uOTYtLjM2OC0uMjQ4LS4yOTctLjM4OC0uNjgtLjQyLTEuMTVsLS4wMDYtLjIwN3YtNDAuMTc2aC03Mi43ODJsLS4xODQtLjAwNGMtLjk1NC0uMDUtMS40NTktLjUwMi0xLjUxNS0xLjM1NmwtLjAwNS0uMTY1di0xMy4wNTNsLjAwNS0uMTY1Yy4wNTYtLjg1NC41NjEtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA1aDgwLjk2NHptLTEwMC4xMS0yNS4yNThsLjE4NC4wMDVjLjk1NC4wNSAxLjQ1OS41MDIgMS41MTUgMS4zNTZsLjAwNS4xNjV2MTMuMDUybC0uMDA1LjE2NWMtLjA1Ni44NTQtLjU2MSAxLjMwNi0xLjUxNSAxLjM1NmwtLjE4NS4wMDVoLTMzLjkxOXYxNi40NDRoNi4xMzZsLjE4OC4wMDhjLjQzMi4wMzkuODMuMjE1IDEuMTkzLjUyN2wuMTUzLjE0MyA3LjY3IDguMTM2LjEwOC4xMThjLjIzNi4yODMuMzY4LjYzNS4zOTggMS4wNTRsLjAwNi4xODV2MzMuNzM0bC0uMDA2LjE2NWMtLjA1Ni43NTQtLjUwMyAxLjI0OS0xLjM0MiAxLjQ4NGwtLjE4Ni4wNDYtMTQuODMgMy4zOS0uMTQ4LjAzYy0uMzg3LjA1Ni0uNzA3LS4wNjctLjk2LS4zNjktLjI0OC0uMjk2LS4zODgtLjY4LS40MTktMS4xNWwtLjAwNi0uMjA2di0zMS4xOTFoLTc4LjkxOGwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ2LS41MDItMS41MTUtMS4zNTZsLS4wMDYtLjE2NXYtMTMuMDUzbC4wMDYtLjE2NWMuMDU2LS44NTQuNTYtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA0aDE0LjE0N3YtMTYuNDQ0aC0zMy45MmwtLjE4My0uMDA1Yy0uOTU0LS4wNS0xLjQ2LS41MDItMS41MTUtMS4zNTZsLS4wMDYtLjE2NXYtMTMuMDUybC4wMDYtLjE2NWMuMDU2LS44NTQuNTYtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA1aDEzNC42NTR6TTM1NS44MyAxNjUuNzI4aC0yNC4yMDRsLS40NjguMDA1Yy00LjMzOS4wODgtNy45OSAxLjQxNS0xMC45NTIgMy45NzktMy4wNjggMi42NTYtNC42MDIgNi4xODctNC42MDIgMTAuNTk1IDAgNC40MDcgMS41MzQgNy45NCA0LjYwMiAxMC41OTUgMi45NjIgMi41NjQgNi42MTMgMy44OSAxMC45NTIgMy45NzlsLjQ2OC4wMDVoMjQuMjA0YzQuNTQ1IDAgOC4zNTItMS4zMjggMTEuNDItMy45ODQgMy4wNjgtMi42NTYgNC42MDItNi4xODggNC42MDItMTAuNTk1IDAtNC40MDgtMS41MzQtNy45NC00LjYwMi0xMC41OTUtMi45NjItMi41NjQtNi42MTMtMy44OS0xMC45NTMtMy45NzlsLS40NjctLjAwNXpNMTMxLjE3NyAzMC42ODhMNDYuNzIgNzkuNTk1djkwLjQ0OWwxNjIuNTY3LTk0LjEzNS03OC4xMS00NS4yMnptMzUzLjE4MiAxMTEuNDc3aC0zMi4wNDR2MTYuNDQ0aDMyLjA0NHYtMTYuNDQ0em0tOTYuMTQ0LTg1LjI2OGwuMTY2LjAwNWMuODU4LjA1NiAxLjMxMy41NTggMS4zNjMgMS41MDdsLjAwNS4xODN2ODAuMDEzbC0uMDA2LjE2NmMtLjA1Ni43NTQtLjUwMyAxLjI0OC0xLjM0MiAxLjQ4M2wtLjE4Ni4wNDYtMTQuODI5IDMuMzktLjE0OC4wM2MtLjM4OC4wNTYtLjcwNy0uMDY3LS45Ni0uMzY4LS4yNDktLjI5Ny0uMzg4LS42OC0uNDItMS4xNWwtLjAwNi0uMjA2di0zNC45MjFoLTI2LjA3OWwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ1OS0uNTAyLTEuNTE1LTEuMzU2bC0uMDA1LS4xNjVWOTIuNDk2bC4wMDUtLjE2NWMuMDU2LS44NTQuNTYxLTEuMzA2IDEuNTE1LTEuMzU2bC4xODQtLjAwNWgyNi4wNzlWNTguNTkybC4wMDUtLjE4M2MuMDUtLjk0OS41MDUtMS40NSAxLjM2My0xLjUwN2wuMTY2LS4wMDVoMTQuODI5em0yNTUuNzQxIDBsLjE2Ni4wMDVjLjg1OC4wNTYgMS4zMTMuNTU4IDEuMzYzIDEuNTA3bC4wMDUuMTgzdjI2LjI3NmgyMi41bC4xODQuMDA0Yy45NTMuMDUgMS40NTkuNTAzIDEuNTE1IDEuMzU3bC4wMDUuMTY0djEzLjA1M2wtLjAwNS4xNjVjLS4wNTYuODU0LS41NjIgMS4zMDYtMS41MTUgMS4zNTZsLS4xODUuMDA1SDY0NS40OXYzNi43ODZsLS4wMDYuMTY1Yy0uMDU2Ljc1NC0uNTAzIDEuMjQ5LTEuMzQyIDEuNDg0bC0uMTg2LjA0Ni0xNC44MjkgMy4zOS0uMTQ4LjAzYy0uMzg4LjA1NS0uNzA3LS4wNjctLjk2LS4zNjktLjI0OC0uMjk2LS4zODgtLjY4LS40Mi0xLjE1bC0uMDA2LS4yMDZWNTguNTkybC4wMDUtLjE4M2MuMDUtLjk0OS41MDUtMS40NSAxLjM2My0xLjUwN2wuMTY2LS4wMDVoMTQuODN6TTM0Ny45OSA2My41MDhsLjE4NC4wMDVjLjk1NC4wNSAxLjQ2LjUwMiAxLjUxNSAxLjM1NmwuMDA2LjE2NXYxMy4wNTNsLS4wMDYuMTY1Yy0uMDU2Ljg1NC0uNTYgMS4zMDYtMS41MTUgMS4zNTZsLS4xODQuMDA1aC0yNy43ODN2MTIuODgzbC0uMDAyLjY1M2MtLjAyMyAzLjQ0OS0uMjI1IDYuMzYyLS42MDYgOC43NGwtLjA3NC40NCAzMi4wNDQgMjQuNzQ5LjE0LjA5N2MuODQ3LjYxOS45NSAxLjI4My4zMDkgMS45OTRsLS4xMDguMTEzLTguNjkzIDEwLjUxLS4wOTYuMTI1Yy0uNTIyLjYzLTEuMTc4LjY4LTEuOTcuMTVsLS4xNS0uMTA2LTI5LjE0Ni0yMi4wMzctLjM3NS4zOTdjLTIuOTE4IDMuMDYtNi44MjcgNi40My0xMS43MjcgMTAuMTEzbC0uOTc4LjczLTEuMDE3Ljc0OC0xLjU5NyAxLjE1Ny0xLjY4NSAxLjItMS4xNy44MjItMS44MyAxLjI2OC0xLjkxNiAxLjMxLTIuMDAzIDEuMzUyLTEuMzgzLjkyNC0xLjQyMy45NDMtMi4yMDUgMS40NS0yLjI5MyAxLjQ5LS43ODMuNTA3Yy0uODU2LjUzMi0xLjU2LjUxMy0yLjExNC0uMDU3bC0uMTAyLS4xMTMtOC42OTMtMTAuNTEtLjEwOC0uMTEzYy0uNjQxLS43MS0uNTM4LTEuMzc1LjMwOS0xLjk5NGwzLjU4Ni0yLjU0MiAxLjk1Ni0xLjM5OCAxLjg3LTEuMzQ2IDIuMzYzLTEuNzE0IDEuNjc0LTEuMjI1IDEuNTg5LTEuMTc0IDEuOTg3LTEuNDgzIDEuMzkxLTEuMDUzIDEuMzA4LTEgLjgyNC0uNjM5IDEuMDAzLS43ODYuNDg2LS4zODcuOTQyLS43NjIuOTAyLS43NDQuNDM1LS4zNjYuODQxLS43MTljMi4xOS0xLjg5MyAzLjk0OS0zLjYwNSA1LjI3Ny01LjEzNSAyLjE2LTIuNDg3IDMuNDk0LTQuNzc1IDQuMDA2LTYuODY2LjQ3Ny0xLjk1MS43MzItNC4zMi43NjMtNy4xMDlsLjAwNC0uNjA0Vjc5LjYxM2gtMjcuNzgzbC0uMTg0LS4wMDVjLS45NTQtLjA1LTEuNDYtLjUwMi0xLjUxNi0xLjM1NmwtLjAwNS0uMTY1VjY1LjAzNGwuMDA1LS4xNjVjLjA1Ny0uODU0LjU2Mi0xLjMwNiAxLjUxNi0xLjM1NmwuMTg0LS4wMDVoNzMuODA0em0yNDMuNjQgMGwuMTg3LjAwOWMuNDMyLjAzOS44My4yMTUgMS4xOTMuNTI3bC4xNTMuMTQyIDcuNjcgOC4xMzcuMTA4LjExOGMuMjM1LjI4My4zNjguNjM0LjM5OCAxLjA1NGwuMDA2LjE4NHY1Ni4xMTFsLS4wMDYuMTY2Yy0uMDU2Ljc1NC0uNTA0IDEuMjQ4LTEuMzQyIDEuNDgzbC0uMTg2LjA0Ni0xNC44MyAzLjM5LS4xNDguMDNjLS4zODcuMDU2LS43MDctLjA2Ny0uOTYtLjM2OC0uMjQ4LS4yOTctLjM4OC0uNjgtLjQxOS0xLjE1bC0uMDA2LS4yMDZWNzkuNjEzaC00OS4wOWwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ1OS0uNTAyLTEuNTE1LTEuMzU2bC0uMDA1LS4xNjVWNjUuMDM0bC4wMDUtLjE2NWMuMDU2LS44NTQuNTYxLTEuMzA2IDEuNTE1LTEuMzU2bC4xODQtLjAwNWg1Ny4yNzF6bS0xMTEuMTktNS4yNTVsLjc0LjAwNWM1LjE1NS4wNjQgOS43NjYuNzk3IDEzLjgzMyAyLjE5OSA0LjI2MiAxLjQ3IDcuODcgMy41MDMgMTAuODI0IDYuMTAzIDIuOTU0IDIuNTk5IDUuMTk5IDUuNjUgNi43MzMgOS4xNTQgMS41MzQgMy41MDMgMi4zIDcuMzQ2IDIuMyAxMS41MjcgMCA0LjE4MS0uNzY2IDguMDI0LTIuMyAxMS41MjctMS41MzQgMy41MDQtMy43NzkgNi41NTUtNi43MzMgOS4xNTQtMi45NTUgMi42LTYuNTYyIDQuNjM0LTEwLjgyNCA2LjEwMy00LjA2NyAxLjQwMi04LjY3OCAyLjEzNS0xMy44MzMgMi4ybC0uNzQuMDA0aC0yNC4yMDRsLS43NC0uMDA1Yy01LjE1NC0uMDY0LTkuNzY2LS43OTctMTMuODMzLTIuMTk5LTQuMjYxLTEuNDctNy44Ny0zLjUwMy0xMC44MjQtNi4xMDMtMi45NTQtMi41OTktNS4xOTgtNS42NS02LjczMi05LjE1NC0xLjUzNC0zLjUwMy0yLjMwMS03LjM0Ni0yLjMwMS0xMS41MjcgMC00LjE4MS43NjctOC4wMjQgMi4zLTExLjUyNyAxLjUzNS0zLjUwNCAzLjc3OS02LjU1NSA2LjczMy05LjE1NCAyLjk1NS0yLjYgNi41NjMtNC42MzQgMTAuODI0LTYuMTAzIDQuMDY3LTEuNDAyIDguNjc5LTIuMTM1IDEzLjgzMy0yLjJsLjc0LS4wMDRoMjQuMjA0em0uODUyIDE2LjEwNWgtMjUuOTA4bC0uNDg0LjAwNGMtNC4zMjguMDgtNy45MTcgMS4yMzctMTAuNzY2IDMuNDctMi45NTQgMi4zMTctNC40MzEgNS40NTQtNC40MzEgOS40MDkgMCAzLjk1NSAxLjQ3NyA3LjA5MiA0LjQzMSA5LjQwOCAyLjg1IDIuMjM0IDYuNDM4IDMuMzkxIDEwLjc2NiAzLjQ3MWwuNDg0LjAwNGgyNS45MDhjNC41NDYgMCA4LjI5NS0xLjE1OCAxMS4yNS0zLjQ3NSAyLjk1NC0yLjMxNiA0LjQzMi01LjQ1MyA0LjQzMi05LjQwOCAwLTMuOTU1LTEuNDc4LTcuMDkyLTQuNDMyLTkuNDA4LTIuODQ5LTIuMjM0LTYuNDM4LTMuMzkxLTEwLjc2Ni0zLjQ3MWwtLjQ4NC0uMDA0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                style={{
                  width: "140px",
                  height: "59px",
                  marginRight: "28px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  history.push("/");
                }}
              />
              <HeaderTxt1
                onClick={() => {
                  history.push("/shoppork");
                }}
              >
                쇼핑하기
              </HeaderTxt1>
              <HeaderTxt1
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                배송안내
              </HeaderTxt1>
              <HeaderTxt1
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                이벤트
              </HeaderTxt1>
            </FlexBox1>
            <FlexBox2>
              <HeaderTxt2
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                공지사항
              </HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                고객센터
              </HeaderTxt2>
              <HeaderTxt2>|</HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  history.push("/cart");
                }}
              >
                <img
                  style={{ width: "45px" }}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjUgMTdjLjgyOCAwIDEuNS42NzIgMS41IDEuNVM5LjMyOCAyMCA4LjUgMjAgNyAxOS4zMjggNyAxOC41IDcuNjcyIDE3IDguNSAxN3ptOCAwYy44MjggMCAxLjUuNjcyIDEuNSAxLjVzLS42NzIgMS41LTEuNSAxLjUtMS41LS42NzItMS41LTEuNS42NzItMS41IDEuNS0xLjV6bS04IDFjLS4yNzYgMC0uNS4yMjQtLjUuNXMuMjI0LjUuNS41LjUtLjIyNC41LS41LS4yMjQtLjUtLjUtLjV6bTggMGMtLjI3NiAwLS41LjIyNC0uNS41cy4yMjQuNS41LjUuNS0uMjI0LjUtLjUtLjIyNC0uNS0uNS0uNXpNNi41IDVjLjE3MSAwIC4zMjkuMDg4LjQyLjIyOGwuMDQuMDc1LjcyOSAxLjcwMkw3Ljc1IDdoOS43NWMuMzI0IDAgLjU1NS4zLjQ5LjYwM2wtLjAyNi4wODMtMiA1Yy0uMDY1LjE2Mi0uMjEuMjc3LS4zNzguMzA3TDE1LjUgMTNIOS43NjdsLTEuMzMzIDJoOC4zMTZjLjI0NSAwIC40NS4xNzcuNDkyLjQxbC4wMDguMDljMCAuMjQ1LS4xNzcuNDUtLjQxLjQ5MmwtLjA5LjAwOEg3LjVjLS4zNyAwLS42MDMtLjM4NC0uNDU3LS43MDVsLjA0MS0uMDcyIDEuODQ5LTIuNzc2TDYuMTcgNkg0LjVjLS4yNDUgMC0uNDUtLjE3Ny0uNDkyLS40MUw0IDUuNWMwLS4yNDUuMTc3LS40NS40MS0uNDkyTDQuNSA1aDJ6bTEwLjI2MSAzSDguMTE1bDEuNzE0IDRoNS4zMzJsMS42LTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                />
              </HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  logout_click();
                }}
              >
                로그아웃
              </HeaderTxt2>
            </FlexBox2>
          </HeaderBox>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Container>
          <HeaderBox>
            <FlexBox1>
              <img
                src="image/hexaLogo.png"
                style={{
                  width: "140px",
                  height: "59px",
                  marginRight: "28px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  history.push("/");
                }}
              />
              <HeaderTxt1
                onClick={() => {
                  history.push("/shoppork");
                }}
              >
                쇼핑하기
              </HeaderTxt1>
              <HeaderTxt1
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                배송안내
              </HeaderTxt1>
              <HeaderTxt1
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                이벤트
              </HeaderTxt1>
            </FlexBox1>
            <FlexBox2>
              <HeaderTxt2
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                공지사항
              </HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  window.alert("준비중인 서비스입니다!");
                }}
              >
                고객센터
              </HeaderTxt2>
              <HeaderTxt2>|</HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </HeaderTxt2>
              <HeaderTxt2
                onClick={() => {
                  history.push("/signup");
                }}
              >
                회원가입
              </HeaderTxt2>
            </FlexBox2>
          </HeaderBox>
        </Container>
      </React.Fragment>
    );
  }
};

const Container = styled.div`
  width: 100%;
  background: black;
  position: fixed;
  top: 0px;
  z-index: 10000;
`;

const HeaderBox = styled.div`
  width: 1184px;
  min-width: 1184px;
  height: 96px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const FlexBox1 = styled.div`
  width: fit-content;
  height: 60px;
  display: flex;
  align-items: center;
`;

const FlexBox2 = styled.div`
  display: flex;
  width: fit-content;
  height: 60px;
  align-items: center;
`;

const HeaderTxt1 = styled.p`
  font-size: 1.2em;
  color: white;
  margin: 0 12px;
  cursor: pointer;
`;

const HeaderTxt2 = styled.p`
  font-size: 1em;
  color: white;
  margin: 0 8px;
  cursor: pointer;
`;
export default Header;
