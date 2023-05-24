import { useRef } from "react";
import { checkToken } from "../../utilities/users-service";
import CategoryList from "../../components/CategoryList/CategoryList";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";

import { Link } from "react-router-dom";
export default function RecipesPage() {
  const categoriesRef = useRef([]);

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };
  return (
    <>
      <CategoryList categories={categoriesRef.current} />
      {/* <UserLogOut user={user} setUser={setUser} /> */}
      <Link to="/recipe">RecipePage</Link>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
