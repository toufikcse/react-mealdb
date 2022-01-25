import React from 'react';
import './Order.css';

const Order = (props) => {
    const list = props.cartMeal;
    // console.log(list);
    return (
        <div>
            <h2>Order Items:</h2>
            <div >
                {
                    list.map(item => <li>{item.strMeal}</li>)
                }
            </div> 
        </div>
    );
};

export default Order;