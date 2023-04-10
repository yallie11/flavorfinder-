import React from 'react';


function RecipeResults({recipes}) {
    return (
        <div>
            <h2>Results</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <p>Calories: {recipe.calories}</p>
                        <p>Cuisine: {recipe.cuisine.join(', ')}</p>
                        <p>Meal: {recipe.meal.join(', ')}</p>
                        <p>Dish: {recipe.dish.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeResults;