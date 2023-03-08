import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_context';
import CartAmountToggle from './CartAmountToggle';


const AddToCart = ({ product }) => {
   /* Destructuring the `addToCart` function from the `useCartContext` hook. */
    const {addToCart} = useCartContext();

    const { id, colour, stock } = product;  /* Destructuring the product object. */

    const [color, setColor] = useState(colour);
    const [amount, setAmount] = useState(1);

    // console.log("🚀 ~ file: addToCart.js ~ line 6 ~ AddToCart ~ colors", colors);

  /**
   * If the amount is less than the stock, then set the amount to the amount plus one, otherwise set
   * the amount to the stock.
   */
    const setIncrement = () => {
        setAmount(amount + 1)
    };


    const setDecrement = () => {
       setAmount(amount - 1)
    };

    if(amount === 0){
        setAmount( 1)
    }

    return (
        <>
       
            {/* add to card with amount */}
            <div className="amount_section">
                <CartAmountToggle amount={amount} setIncrement={setIncrement} setDecrement={setDecrement} />
            </div>

            <div className="add_to_cart_button float-right">
                <NavLink to="/cart" onClick={() => addToCart(id, color, amount , product)}>
                    <Button className="btn btn-primary my-3 mx-1"> Add To Cart </Button>
                </NavLink>
            </div>
        </>
    )
}

export default AddToCart;