import React from "react";

function RecipeResults(props) {
  const { calories, cookTime, cuisineType, dishType, image } = props;

  return (
    <div>
      <div>
        Calories
        <span>: {calories}</span>
      </div>
      <div>
        CookTime
        <span>: {cookTime}</span>
      </div>
      <div>
        CuisineType
        <span>: {cuisineType}</span>
      </div>
      <div>
        DishType
        <span>: {dishType}</span>
      </div>
      <div>
        Image
        <span>: </span>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default RecipeResults;
