import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [cart,setCart] = useState([]);


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

    return (
        <div className="twin-container">
            <h1>Cart Items:{cart.length}</h1>
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd} removeItemHandler={removeItemHandler}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Review;