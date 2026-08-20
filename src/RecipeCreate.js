import React, { useState } from "react";

const initialFormData = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
};

function RecipeCreate({ createRecipe }) {
  const [recipe, setRecipe] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={recipe.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="cuisine"
        placeholder="Cuisine"
        value={recipe.cuisine}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        name="photo"
        placeholder="Photo URL"
        value={recipe.photo}
        onChange={handleChange}
        required
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        required
      />

      <textarea
        name="preparation"
        placeholder="Preparation"
        value={recipe.preparation}
        onChange={handleChange}
        required
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
