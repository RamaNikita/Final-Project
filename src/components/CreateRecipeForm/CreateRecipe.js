import style from "./CreateRecipe.css";
export default function CreateRecipe() {
  return (
    <>
      <h1>CreateRecipes</h1>
      <div className="creatediv" style={style.creatediv}>
        <form>
          <input type="text" placeholder="Name Of the Recipe"></input>
          <input type="text" placeholder="Ingredients"></input>
          <input type="text" placeholder="Cook Time"></input>
          <input type="text" placeholder="Description"></input>
        </form>
        <button type="submit">Create</button>
      </div>
    </>
  );
}
