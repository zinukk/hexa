import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, bg, _onClick, children, margin, width, height, padding, cursor, border } = props;


  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    cursor: cursor,
    border: border,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  height: "100%",
  padding: "12px 0px",
  bg: "",
  cursor: "",
  border: "",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props)=> props.height};
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
`;

export default Button;