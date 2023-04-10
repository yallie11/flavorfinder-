import React, { useState } from 'react';
import './App.css';
import './styles.css'
import Filter from './components/Filter';
import SearchButton from './components/SearchButton';
import Header from './components/Header';
import RecipeResults from './components/RecipeResults';
import { recipes } from './recipes';

function App() {
	const [searchParams, setSearchParams] = useState({
		searchTerm: '',
		calorieFilter: '',
		cuisineFilter: '',
		mealFilter: '',
		dishFilter: '',
	});

	const handleSearchTermChange = (value) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			searchTerm: value,
		}));
	};

	const handleCalorieChange = (value) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			calorieFilter: value,
		}));
	};

	const handleCuisineChange = (value) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			cuisineFilter: value,
		}));
	};

	const handleMealChange = (value) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			mealFilter: value,
		}));
	};

	const handleDishChange = (value) => {
		setSearchParams((prevSearchParams) => ({
			...prevSearchParams,
			dishFilter: value,
		}));
	};

	const [filteredRecipes, setFilteredRecipes] = useState([]);

	const handleSearch = () => {
		const filteredRecipes = recipes.filter((recipe) => {
			
			// Filter by search term
			if (searchParams.searchTerm && !recipe.name.toLowerCase().includes(searchParams.searchTerm.toLowerCase())) {
				return false;
			}

			// Filter by calorie limit
			if (searchParams.calories && recipe.calories > searchParams.calorieFilter) {
				return false;
			}
			
			// Filter by cuisine type
			if (searchParams.cuisine && recipe.cuisine > searchParams.cuisineFilter) {
				return false;
			}

			// Filter by meal type
			if (searchParams.mealFilter && !recipe.meal.includes(searchParams.mealFilter)) {
				return false;
			}

			// Filter by dish
			if (searchParams.dishFilter && recipe.dish.indexOf(searchParams.dishFilter) === -1) {
				return false;
			}

			return true;
		});

		setFilteredRecipes(filteredRecipes);
	};

	return (
		<div className="App">

			<Header/>

			<main>
				<Filter
					searchTerm={searchParams.searchTerm}
					calorieFilter={searchParams.calorieFilter}
					cuisineFilter={searchParams.cuisineFilter}
					mealFilter={searchParams.mealFilter}
					dishFilter={searchParams.dishFilter}
					onSearchTermChange={handleSearchTermChange}
					onCalorieChange={handleCalorieChange}
					onCuisineChange={handleCuisineChange}
					onMealChange={handleMealChange}
					onDishChange={handleDishChange}
				/>

				<SearchButton onClick={handleSearch} />

				<RecipeResults recipes={filteredRecipes} />

			</main>

		</div>
	);
}

export default App;

