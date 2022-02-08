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
      <NavLink to="/">Home</NavLink>
      {user ? (
        <div>
          <NavLink to="/" onClick={logout}>
            Log Out
          </NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Log in</NavLink> or{" "}
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </nav>
  );
}
