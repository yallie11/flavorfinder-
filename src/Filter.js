import React from 'react';

function Filter({ searchTerm, calorieFilter, ingredientFilter, allergenFilter, onSearchTermChange, onCalorieFilterChange, onIngredientFilterChange, onAllergenFilterChange }) {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        id="calories"
        name="calories"
        placeholder="Max calories..."
        value={calorieFilter}
        onChange={(e) => onCalorieFilterChange(e.target.value)}
      />
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        type="text"
        id="ingredients"
        name="ingredients"
        placeholder="Filter by ingredients..."
        value={ingredientFilter}
        onChange={(e) => onIngredientFilterChange(e.target.value)}
      />
      <label htmlFor="allergens">Allergens:</label>
      <select
        id="allergens"
        name="allergens"
        value={allergenFilter}
        onChange={(e) => onAllergenFilterChange(e.target.value)}
      >
        <option value="">None</option>
        <option value="dairy">Dairy</option>
        <option value="nuts">Nuts</option>
        <option value="gluten">Gluten</option>
        <option value="soy">Soy</option>
      </select>
    </div>
  );
}

export default Filter;
