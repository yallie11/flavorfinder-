import React, { useState } from 'react';
import './App.css';
import './styles.css'
import Filter from './Filter';
import recipes from './recipes';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [calorieFilter, setCalorieFilter] = useState('');
	const [ingredientFilter, setIngredientFilter] = useState('');
	const [allergenFilter, setAllergenFilter] = useState('');


	return (
		<div className="App">

			<header className="App-header">
				<h1>Food Database</h1>
			</header>

			<main>
				<Filter
					searchTerm={searchTerm}
					calorieFilter={calorieFilter}
					ingredientFilter={ingredientFilter}
					allergenFilter={allergenFilter}
					onSearchTermChange={setSearchTerm}
					onCalorieFilterChange={setCalorieFilter}
					onIngredientFilterChange={setIngredientFilter}
					onAllergenFilterChange={setAllergenFilter}
				/>

				<div>
					<button>Search</button>
				</div>
			</main>

		</div>
	);
}

export default App;
