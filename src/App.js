import React from 'react';
import './App.css'
import Dinner from './dinner.js' 


function App() {
  
  return(
    <div ClassName='App'>
      <Dinner DishName='Biryani' DessertName='Kulfi' DrinksName='Coca Cola, Tang'/>
      <hr />
      <Dinner DishName='Chicken  Karahi' DessertName='Halwa' DrinksName='Chai'/>
      <hr />
      <Dinner DishName='Qourma' DessertName='Icecream' DrinksName='Coffee'/>
    </div>
  )
    
}

export default App;

