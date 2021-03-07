import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,processOrder,removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }


    useEffect(()=>{
       const savedCart = getDatabaseCart();
       const productKeys= Object.keys(savedCart);
       const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key );
           product.quantity = savedCart[key];
           return product;
       });
       setCart(cartProducts)
    },[]);

    

    const removeItemHandler = (productKey)=>{
        // console.log('removed',productKey)
        const newCart = cart.filter(pd => pd.key!== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const thankYou= <img src={happyImage}></img>

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} removeItemHandler={removeItemHandler}></ReviewItem>)
            }
            {
                orderPlaced && thankYou
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;