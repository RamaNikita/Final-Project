import React, { useState } from "react";
import style from "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = () => {
    // Check if the recipe is already in favorites
    if (!favorites.includes(recipe)) {
      // Add the recipe to favorites
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="main" style={style.main}>
      <div className="container" style={style.container}>
        <h1>{recipe.name}</h1>
        <h3>Description:</h3>
        <p>{recipe.description}</p>
        <h2>Cook-Time: {recipe.cook_time_minutes}</h2>
        <button onClick={addToFavorites}>Add to Favorite</button>
      </div>
    </div>
  );
}
