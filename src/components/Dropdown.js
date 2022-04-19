import React, { useCallback } from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import Text from "../elements/Text";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [item, setItem] = useState(null);

  const dropdownItems = ["보통(16mm)", "얇게(11mm)", "두껍(24mm)"];

  const onActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const onSelectItem = useCallback((e) => {
    const targetId = e.target.id;

    if (targetId === "item_name") {
      setItem(e.target.parentElement.innerText);
    } else if (targetId === "item") {
      setItem(e.target.innerText);
    }

    setIsActive((prev) => !prev);
  }, []);

  return (
    <DropdownContainer>
      <DropdownBody onClick={onActiveToggle}>
        {item ? (
          <>
            <ItemName>{item}</ItemName>
            <AiOutlineDown color="gray" />
          </>
        ) : (
          <>
            <DropdownSelect>{dropdownItems[0]}</DropdownSelect>
            <AiOutlineDown color="gray" />
          </>
        )}
      </DropdownBody>
      <DropdownMenu isActive={isActive}>
        {dropdownItems.map((item, idx) => (
          <DropdownItemContainer id="item" key={idx} onClick={onSelectItem}>
            <ItemName id="item_name">{item}</ItemName>
          </DropdownItemContainer>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  width: 317px;
  &:hover {
    cursor: pointer;
  }
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
  margin-left: 6rem;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  width: 317px;
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
  margin-left: 6rem;
`;

export default Dropdown;
