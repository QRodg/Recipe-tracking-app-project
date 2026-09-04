import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Add new recipe
  const createRecipe = (recipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      recipe,
    ]);
  };

  // Delete recipe by index
  const deleteRecipe = (index) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((_, recipeIndex) => recipeIndex !== index)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
