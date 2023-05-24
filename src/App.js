//Imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import FavoriteRecipes from "./pages/MyFavoriteRecipePage/MyFavoriteRecipePage";
//Pages
// import NewOrderPage from "./pages/MyFavoriteRecipePage/MyFavoriteRecipePage";
import AuthPage from "./pages/AuthPage/AuthPage.js";
import OrderHistoryPage from "./pages/RecipesPage/RecipesPage";
//NavBar
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  const [user, setUser] = useState(getUser());
  console.log("Current user", user);
  return (
    <main className="App">
      {user ? (
        <>
          {" "}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/favoriteRecipe" element={<FavoriteRecipes />} />
            <Route path="/recipes" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
