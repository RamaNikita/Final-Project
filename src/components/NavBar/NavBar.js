import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import style from "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className="div2" style={style.div2}>
        <ul className="ul" style={style.ul}>
          <li className="li" style={style.li}>
            <h1 className="h1" style={style.h1}>
              <span>Welcome, {user.name} </span>{" "}
            </h1>
          </li>
          <li className="logout" style={style.logout}>
            {" "}
            <Link
              to=""
              onClick={handleLogOut}
              className="navLink"
              style={style.navLink}
            >
              Log Out
            </Link>
          </li>
        </ul>
      </div>

      <div className="div" style={style.div}>
        <ul className="ul" style={style.ul}>
          <li className="li" style={style.li}>
            {" "}
            <Link to="/recipes" className="navLink" style={style.navLink}>
              All Recipes
            </Link>
          </li>
          <li className="li" style={style.li}>
            {" "}
            <Link
              to="/favoriteRecipes"
              className="navLink"
              style={style.navLink}
            >
              Favorite Recipes
            </Link>
          </li>
          <li className="li" style={style.li}>
            <Link to="/create" className="navLink" style={style.navLink}>
              Add New Recipes
            </Link>
          </li>
        </ul>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
    </nav>
  );
}
