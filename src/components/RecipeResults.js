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


	console.log(recipes)

	if (recipes == "") {
		return (
			<Error />
		);
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

							<div><a href={recipe.url} target="_blank">{recipe.url}</a></div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default RecipeResults;
