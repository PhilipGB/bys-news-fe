import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  if (user) {
    return (
      <nav className="Header flex-container">
        <NavLink to="/">Home</NavLink>
        <button onClick={() => logout()}>Log Out</button>
        <NavLink to="/profile">My Profile</NavLink>
      </nav>
    );
  }

  return (
    <nav className="Header flex-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log in</NavLink>or
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}
