import React from "react";

export default function FavoriteRecipes({ shareState }) {
  console.log(shareState);
  return (
    <div>
      <h1>Favorite Recipes</h1>
      {shareState.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <p>Cook-Time: {recipe.cook_time_minutes}</p>
        </div>
      ))}
    </div>
  );
}
