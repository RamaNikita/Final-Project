const Favorites = require("../../models/Favorite");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Recipe = require("../../models/Recipe");

module.exports = {
  create,
  getFavoriteRecipe,
};

// This function fires when a request is made to /api/favorites POST
async function create(req, res) {
  try {
    // Add the favorites to the database
    // then()
    const recipe = await Favorites.find({ email: req.body.email });

    //    const user = await Favorites.create(req.body);
    let recipePresent = false;
    console.log(req.body.recipename);
    console.log(recipe.length);
    for (let i = 0; i < recipe.length; i++) {
      console.log(recipe[i].recipename);
      console.log(req.body.recipename);
      if (recipe[i].recipename === req.body.recipename) {
        recipePresent = true;
      }
    }
    console.log(recipePresent);
    if (!recipePresent) {
      const user = await Favorites.create(req.body);
    }
    res.send(recipe);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function getFavoriteRecipe(req, res) {
  try {
    // get the user favorites from the database
    // then()
    console.log(req.params.email);
    const recipe = await Favorites.find({ email: req.params.email });
    res.send(recipe);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
