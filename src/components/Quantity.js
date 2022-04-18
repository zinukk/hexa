import React from 'react';
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Text from '../elements/Text';

const Quantity = (props) => {
    const [num, setNum] = React.useState("1");
    console.log(num)

    const plusNum = () => {
        setNum(parseInt(num) + 1);
      };

      const minusNum = () => {
          if(num <= 1) {
              window.alert("최소 주문 수량은 1개 입니다!")
          }else{
        setNum(parseInt(num) - 1);
          }
      };

    return (
        <Grid border="0.5px solid gray" width="317px" height="50px" is_flex>
            <Button bg="#1c1c1c" border="0.5px solid gray" width="50px" height="50px" _onClick={minusNum}><FaMinus size="20" color="gray" /></Button>
            <Text color="white" size="16px">{num}</Text>
            <Button bg="#1c1c1c" border="0.5px solid gray" width="50px" height="50px" _onClick={plusNum}><BsPlusLg size="20" color="gray" /></Button>
        </Grid>
    );
};

export default Quantity;