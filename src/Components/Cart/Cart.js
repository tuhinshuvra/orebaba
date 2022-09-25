import React from 'react';
import './Cart.css';

const Cart = (props) => {


    const cartPriceReducer = (previous, current) => previous + current.price;
    const cartPriceTotal = props.cart.reduce(cartPriceReducer, 0);
    // console.log(cartPriceTotal);
    const tax = (cartPriceTotal / 10).toFixed(2);
    const grandTotal = parseFloat(cartPriceTotal) + parseFloat(tax);



    return (
        <div className='cart_info'>
            <h3>Order Summary</h3>
            <h4>Selected Items: {props.cart.length}</h4>
            <h4>Total Price: ${cartPriceTotal}</h4>
            <h4>Total Shipping Charge: $5</h4>
            <h4>Tax: {cartPriceTotal / 10} </h4>
            <h3>Grand Total: ${grandTotal}</h3>
            <button>Clear Cart</button>
            <button>Order Review</button>

        </div>
    );
};

export default Cart;