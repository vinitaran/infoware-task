import React from 'react';
import './Subtotal.css';
import {useSelector} from "react-redux";
import {selectCartValue} from "./features/appSlice";

const Subtotal = () => {
    const deliveryCharges = 1.000;
    const totalValue=useSelector(selectCartValue);
    const totalValueFinal=totalValue.toFixed(4);
    let total = (parseFloat(deliveryCharges) + parseFloat(totalValueFinal)).toFixed(4);
    return (
        <div className="subtotal">
            <div className="cart_total">
                <h2>Cart Total</h2>
                <span><h3>{totalValueFinal} KWD</h3></span>
            </div>
            <div className="delivery_charges">
                <h2>Delivery Charges</h2>
                <span><h3>{parseFloat(deliveryCharges).toFixed(4)} KWD</h3></span>
            </div>
            <div className="total">
                <h2>Total</h2>
                <span><h3>{total} KWD</h3></span>
            </div>
        </div>
    )
}

export default Subtotal
