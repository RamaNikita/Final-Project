const Schema = require("mongoose").Schema;

const recipeSchema = new Schema(
  {
    recipeName: { type: String, required: true },
    ingredients: { type: String },
    method: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = recipeSchema;
