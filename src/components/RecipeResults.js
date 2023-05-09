import React from "react";
import styles from "./RecipeResults.module.css";
import Error from "./Error";

function parseArrayString(arrayString) {
  try {
    return JSON.parse(arrayString.replace(/'/g, '"')) || [];
  } catch (error) {
    return [];
  }
}

function RecipeResults({ recipes }) {

  if (recipes === "") {
    return <Error />;
  }

  return (
    <div>
      {recipes.map((recipe, index) => {
        const cuisineType = parseArrayString(recipe.CuisineType);
        const dishType = parseArrayString(recipe.DishType);

        return (
          <div key={index} className={styles.recipe}>
            <h2>{recipe.Name}</h2>

            <div className={styles.recipeInfo}>
              <div className={styles.results}>
                <div>
                  Calories(All Servings)
                  <span> {parseFloat(recipe.Calories)}</span>
                </div>
                <div>
                  Cook Time(min)
                  <span>
                    {" "}
                    {parseFloat(recipe.CookTime) !== 0
                      ? recipe.CookTime
                      : "N/A"}
                  </span>
                </div>
                <div>
                  Cuisine Type
                  <span>
                    {" "}
                    {Array.isArray(cuisineType)
                      ? cuisineType.join(", ")
                      : cuisineType}
                  </span>
                </div>
                <div>
                  Dish Type
                  <span>
                    {" "}
                    {Array.isArray(dishType) ? dishType.join(", ") : dishType}
                  </span>
                </div>
				<div>
					<a href={recipe.url} target="_blank" rel="noreferrer">
					Link to Recipe 🍽
					</a>
				</div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeResults;
