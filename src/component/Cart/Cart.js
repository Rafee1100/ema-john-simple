import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart= props.cart;
    // const total = cart.reduce((total,prd) => total+prd.price,0);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total+=product.price*product.quantity;
    }
    total=total.toFixed(2);
    total= Number(total);
    let shipping = 0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping=12.99;
    }

    const tax= Math.round(total/10).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Price:{total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price:{total+ Number(tax)}</p>

            <br/>
            <Link to="/review"><button className="main-button">Review Order</button></Link>
        </div>
    );
};

export default Cart;