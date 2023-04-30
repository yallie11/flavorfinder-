import React, { useState } from 'react';
import './App.css';
import './styles.css';
import Filter from './components/Filter';
import SearchButton from './components/SearchButton';
import Header from './components/Header';
import RecipeResults from './components/RecipeResults';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useState({
    searchTerm: '',
    calorieFilter: '5000',
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
    const url = `https://flavourfinderbackend.herokuapp.com/api/recipes/${searchParams.searchTerm ? `%${searchParams.searchTerm}%` : '%%'}/${searchParams.dishFilter ? `%${searchParams.dishFilter}%` : '%%'}/${searchParams.cuisineFilter ? `%${searchParams.cuisineFilter}%` : '%%'}/${searchParams.mealFilter ? `%${searchParams.mealFilter}%` : '%%'}/${searchParams.calorieFilter}`;

    console.log('Fetching from URL:', url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const _recipes = data.recipes;
        console.log('Received data:', _recipes);
        setFilteredRecipes(_recipes);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleKeyDown = (event) => {
   
