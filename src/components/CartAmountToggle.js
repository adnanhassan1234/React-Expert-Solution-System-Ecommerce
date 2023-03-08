import React from "react";
import Button from "react-bootstrap/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartAmountToggle = ({ amount, setIncrement, setDecrement }) => {
  return (
    <>
      <Button
        className="btn btn-primary plusMinus my-1 mx-1"
        onClick={() => setDecrement()}
      >
        <AiOutlineMinus className="icon_plus_minus" />{" "}
      </Button>
      <span className="amount mx-2">{amount}</span>
      <Button
        className="btn btn-primary plusMinus my-1 mx-1"
        onClick={() => setIncrement()}
      >
        <AiOutlinePlus className="icon_plus_minus" />{" "}
      </Button>
    </>
  );
};

export default CartAmountToggle;
