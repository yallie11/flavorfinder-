import React from "react";
import styles from "./RecipeResults.module.css";

function parseArrayString(arrayString) {
  try {
    return JSON.parse(arrayString.replace(/'/g, '"')) || [];
  } catch (error) {
    return [];
  }
}

function RecipeResults({ recipes }) {
  if (!Array.isArray(recipes)) {
    return <div>Error: Invalid recipe data format</div>;
  }

  return (
    <div className={styles.recipeContainer}>
      {recipes.map((recipe, index) => {
        const cuisineType = parseArrayString(recipe.CuisineType);
        const dishType = parseArrayString(recipe.DishType);

        return (
          <div key={index} className={styles.recipe}>
            <div className={styles.results}>
            <div>
                Calories
                <span> {parseInt(recipe.Calories)}</span>
            </div>
            <div>
                CookTime
                <span> {recipe.CookTime}</span>
            </div>
              <div>
                CuisineType
                <span> {Array.isArray(cuisineType) ? cuisineType.join(', ') : cuisineType}</span>
              </div>
              <div>
                DishType
                <span> {Array.isArray(dishType) ? dishType.join(', ') : dishType}</span>
              </div>
            </div>
            <div className={styles.imageHolder}>
              Image
              <span>
                <img src={recipe.Image} alt="" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeResults;
