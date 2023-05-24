import React, { useState } from "react";
import style from "./RecipeCard.css";

export default function RecipeCard({ recipe, onStateChange }) {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = () => {
    // Check if the recipe is already in favorites
    if (!favorites.includes(recipe)) {
      // Add the recipe to favorites
      setFavorites([...favorites, recipe]);
      onStateChange(favorites);
    }
    console.log(favorites);
  };

  return (
    <div className="main" style={style.main}>
      <div className="container" style={style.container}>
        <h1 className="name" style={style.name}>
          {recipe.name}
        </h1>
        <img className="img" src={recipe.thumbnail_url} style={style.img}></img>
        <h3 className="name" style={style.name}>
          Description:
        </h3>
        <p className="name" style={style.name}>
          {recipe.description}
        </p>
        <h2 className="name" style={style.name}>
          Cook-Time: {recipe.cook_time_minutes}
        </h2>
        <button type="submit" onClick={addToFavorites}>
          Add to Favorite
        </button>
      </div>
    </div>
  );
}
