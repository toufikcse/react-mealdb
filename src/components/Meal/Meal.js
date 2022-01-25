import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Meal = (props) => {
    // console.log(props.meal);
    const element = <FontAwesomeIcon icon={faPlus} />
    const {strMeal, strCategory, strMealThumb} = props.meal;
    return (
        <div className='meal'>
            <div>
                <img className='img' src={strMealThumb} alt="" />
            </div>
            <div className='meal-details'>
                <h3>{strMeal}</h3>
                <h4>{strCategory}</h4>
                <button
                    className='btn-regular'
                    onClick={()=>props.handleAddToCart(props.meal)}
                >{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Meal;