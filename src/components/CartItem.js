import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { MdDeleteOutline } from "react-icons/md";
import { useCartContext } from "../Context/Cart_context";

/* A function that takes in an object and returns a React component. */
const CartItem = ({ id, name, color, image, price, amount }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <>
      <tr>
        <td>
          <div className="d-flex">
            <img src={image} alt="" />
            <div className="content mx-2">
              <p className="mb-0">
                
                <b>{name.slice(0, 13)}</b>
              </p>
              <p className="color">
                color:
                <button
                  style={{ backgroundColor: color, color: color }}
                  className=" btn btn-info my-1 mx-1 active "
                >
                  {color}
                </button>
              </p>
            </div>
          </div>
        </td>

        <td>
          <div className="cart_product_price">
            <p>{price} </p>
          </div>
        </td>

        <td className="mobile_hide_view">
          <div className="stock_incre_decre_product">
            {/* add to card with amount */}
            <div className="amount_section plus_minus">
              <CartAmountToggle
                amount={amount}
                setIncrement={() => setIncrement(id)}
                setDecrement={() => setDecrement(id)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="total_amount">
            <p>{price * amount} </p>
          </div>
        </td>
        <td>
          <div className="delete_icon">
            <p>
              
              <MdDeleteOutline
                className="_deleteIcon"
                onClick={() => removeItem(id)}
              />
            </p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
