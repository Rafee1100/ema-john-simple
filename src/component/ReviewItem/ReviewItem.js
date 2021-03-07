import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props)
    const {name,quantity,key,price} = props.product
    return (
        <div className='Review-item'>
            <h4>{name}</h4>
            <p>Amount: {quantity}</p>
            <p><small>${price}</small></p>
            <br/>
            <button onClick={()=>props.removeItemHandler(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;