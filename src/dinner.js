import React from 'react'


function Dinner(props) {
    return (
        <div>
            <h2>Today there is {props.DishName} in dinner</h2>
            <h3>Today we are serving {props.DessertName} in dessert</h3>
            <h3>Today we are serving {props.DrinksName} in drinks</h3>
        </div>
    )
}
export default Dinner