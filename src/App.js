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
		
		fetch(`http://127.0.0.1:5000/recipes/${searchParams.searchTerm ? `%${searchParams.searchTerm}%` : '%%'}/${searchParams.dishFilter ? `%${searchParams.dishFilter}%` : '%%'}/${searchParams.cuisineFilter ? `%${searchParams.cuisineFilter}%` : '%%'}/${searchParams.mealFilter ? `%${searchParams.mealFilter}%` : '%%'}/${searchParams.calorieFilter}`)

			.then((response) => response.json())
			.then((data) => {
				const _recipes = data.recipes
				setFilteredRecipes(_recipes)
				
			})
			.catch((error) =>{
				setFilteredRecipes("")
			}); 
	};

	return (
		<div className="App">

			<Header />

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
				
				<div className="all-recipes-results">
					<RecipeResults recipes={filteredRecipes} />
				</div>

			</main>

		</div>
	);
}

export default App;

