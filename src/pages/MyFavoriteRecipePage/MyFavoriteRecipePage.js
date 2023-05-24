import React from "react";

export default function FavoriteRecipes({ favorites }) {
  return (
    <div>
      <h1>Favorite Recipes</h1>
      {favorites.map((recipe, index) => (
        <div key={index}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <p>Cook-Time: {recipe.cook_time_minutes}</p>
        </div>
      ))}
    </div>
  );
}
