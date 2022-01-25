import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [cartMeal, setCartMeal] = useState([]);
    const [searchKey, setSearchKey] = useState("a");

    const handleSearch = event => {
        // const keyword = JSON.stringify();
        setSearchKey(event.target.value);
        // setSearchInput(searchKey);
        // console.log('searchkey', searchKey);
    }
 
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchKey}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [searchKey]);

    const handleAddToCart = meal => {
        const newCartMeal = [...cartMeal, meal];
        setCartMeal(newCartMeal);
    }
   
    return (
        <div>
            <div className='search-box'>
                <input onChange={handleSearch} className='input-field' type="text" placeholder='search food Item' />
            </div>
            <div className='shop'>
                <div className='shop-details'>
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddToCart={handleAddToCart}
                        ></Meal>)
                    }
                </div>
                <div>
                    <Order
                        cartMeal={cartMeal}
                    ></Order>
                </div>
            </div>
        </div>
    );
};

export default Shop;