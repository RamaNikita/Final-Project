import { useEffect, useRef, useState } from "react";
import { checkToken } from "../../utilities/users-service";
// import CategoryList from "../../components/CategoryList/CategoryList";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
// import { Link } from "react-router-dom";
export default function RecipesPage({ onStateChange }) {
  let [recipes, setRecipes] = useState([]);
  const categoriesRef = useRef([]);

  const getRecipes = async () => {
    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: {
        from: "0",
        size: "20",
        tags: "under_30_minutes",
        q: "chicken ",
      },
      headers: {
        "X-RapidAPI-Key": "4d62eac7f5mshfe935fda00e013ap1d60dfjsnc91d2d8bb543",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };
  return (
    <>
      <div>
        {recipes.map((recipe, i) => {
          return <RecipeCard recipe={recipe} onStateChange={onStateChange} />;
        })}
      </div>
    </>
  );
}
