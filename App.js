import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Add new recipe
  const createRecipe = (recipe) => {
    setRecipes([
      ...recipes,
      recipe,
    ]);
  };

  // Delete recipe by index
  const deleteRecipe = (index) => {
    setRecipes(
      recipes.filter((_, recipeIndex) => recipeIndex !== index)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeCreate createRecipe={createRecipe} />

      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
    </div>
  );
}

export default App;
