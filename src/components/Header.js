import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { NavLink } from "react-router-dom";

import {
  HomeIcon,
  LibraryIcon,
  LogoutIcon,
  UserIcon,
  LoginIcon,
} from "@heroicons/react/solid";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({});
  };

  return (
    <nav className="Header flex-container">
      <span>
        <NavLink to="/">
          <HomeIcon className="icons" />
          Home
        </NavLink>{" "}
        <NavLink to="/topics">
          <LibraryIcon className="icons" />
          Topics
        </NavLink>
      </span>
      {user.username ? (
        <span className="user-nav">
          <NavLink to="#" onClick={logout}>
            <LogoutIcon className="icons" />
            Log Out
          </NavLink>
          <NavLink to={`/user/${user.username}`}>
            <UserIcon className="icons" />
            {user.username}
          </NavLink>
          <NavLink to={`/user/${user.username}`}>
            <img className="header-avatar" src={user.avatar_url} alt="avatar" />{" "}
          </NavLink>
        </span>
      ) : (
        <span>
          <NavLink to="/login">
            <LoginIcon className="icons" />
            Log in
          </NavLink>{" "}
          or <NavLink to="/register">Register</NavLink>
        </span>
      )}
    </nav>
  );
}
