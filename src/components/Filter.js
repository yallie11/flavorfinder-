import React from 'react';

function Filter({
  searchTerm,
  calorieFilter,
  cuisineFilter,
  mealFilter,
  dishFilter,
  onSearchTermChange,
  onCalorieChange,
  onCuisineChange,
  onMealChange,
  onDishChange,
}) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search recipes"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />

      <select
        value={dishFilter}
        onChange={(e) => onDishChange(e.target.value)}
      >
        <option value="">All Dishes</option>
        <option value="salads">salad</option>
        <option value="main course">main course</option>
        <option value="egg">egg</option>
        <option value="desserts">desserts</option>
        <option value="soup">soup</option>
        <option value="starter" selected>starter</option>
        <option value="cereals">cereals</option>
        <option value="drinks">drinks</option>
        <option value="biscuits and cookies">biscuits and cookies</option>
        <option value="">None</option>
        <option value="condiments and sauces">condiments and sauces</option>
        <option value="christmas">christmas</option>
        <option value="special occasions">special occasions</option>
        <option value="alcohol cocktail">alcohol cocktail</option>
        <option value="sandwiches">sandwiches</option>
        <option value="pancake">pancake</option>
        <option value="halloween">halloween</option>
        <option value="preps">preps</option>
        <option value="thanksgiving">thanksgiving</option>
        <option value="preserve">preserve</option>
      </select>

      <select
        value={cuisineFilter}
        onChange={(e) => onCuisineChange(e.target.value)}
      >
        <option value="">All Cuisines</option>
        <option value="italian">italian</option>
        <option value="central europe">central europe</option>
        <option value="american">american</option>
        <option value="french" selected>french</option>
        <option value="middle eastern">middle eastern</option>
        <option value="chinese">chinese</option>
        <option value="mediterranean">mediterranean</option>
        <option value="japanese">japanese</option>
        <option value="british">british</option>
        <option value="south east asian">south east asian</option>
        <option value="south american">south american</option>
        <option value="korean">korean</option>
        <option value="mexican">mexican</option>
        <option value="eastern europe">eastern europe</option>
        <option value="asian">asian</option>
        <option value="nordic">nordic</option>
        <option value="greek">greek</option>
        <option value="indian">indian</option>
        <option value="caribbean">caribbean</option>
        <option value="kosher">kosher</option>
        <option value="world">world</option>
      </select>

      <select
        value={mealFilter}
        onChange={(e) => onMealChange(e.target.value)}
      >
        <option value="">All Meals</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="brunch" selected>brunch</option>
        <option value="snack">snack</option>
        <option value="breakfast">breakfast</option>
        <option value="teatime">teatime</option>
      </select>

      <select value={calorieFilter} onChange={(e) => onCalorieChange(e.target.value)}>
        <option value="1000">Less than 1000</option>
        <option value="2000">Less than 2000</option>
        <option value="3000">Less than 3000</option>
        <option value="4000">Less than 4000</option>
        <option value="5000" selected>Less than 5000</option>
      </select>
    </div>
  );
}

export default Filter;
