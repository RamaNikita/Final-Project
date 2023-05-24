//Imports
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import FavoriteRecipes from "./pages/MyFavoriteRecipePage/MyFavoriteRecipePage";
//Pages
// import NewOrderPage from "./pages/MyFavoriteRecipePage/MyFavoriteRecipePage";
import AuthPage from "./pages/AuthPage/AuthPage.js";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
//NavBar
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  const [user, setUser] = useState(getUser());
  console.log("Current user", user);
  const [shareState, setshareState] = useState([]);
  function handleStateChanged(val) {
    setshareState(val);
  }
  return (
    <main className="App">
      {user ? (
        <>
          {" "}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/favoriteRecipes"
              element={<FavoriteRecipes shareState={shareState} />}
            />
            <Route
              path="/recipes"
              element={<RecipesPage onStateChange={handleStateChanged} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
