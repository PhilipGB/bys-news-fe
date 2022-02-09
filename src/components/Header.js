import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { NavLink } from "react-router-dom";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser(null);
  };

  return (
    <nav className="Header flex-container">
      <span>
        <NavLink to="/">Home</NavLink> <NavLink to="/topics">Topics</NavLink>
      </span>
      {user ? (
        <span>
          <NavLink to="#" onClick={logout}>
            Log Out
          </NavLink>{" "}
          <NavLink to={`/user/${user.username}`}>Profile</NavLink>
        </span>
      ) : (
        <span>
          <NavLink to="/login">Log in</NavLink> or{" "}
          <NavLink to="/register">Register</NavLink>
        </span>
      )}
    </nav>
  );
}
