const Recipe = require("../../models/Recipes");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  try {
    const recipe = await Recipe.find({})
      .sort("name")
      .populate("category")
      .exec();
    // re-sort based upon the sortOrder of the categories
    recipe.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
