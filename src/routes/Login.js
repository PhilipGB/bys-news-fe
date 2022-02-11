import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { fetchUserByName, fetchUsers } from "../utils/Api";
import { UserContext } from "../contexts/User";

export function Login(props) {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // For demo purposes
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (username !== null) {
      fetchUserByName(username)
        .then((res) => {
          setUser(res);
          // useLocation
          setTimeout(() => navigate("/"), 1000);
        })
        .catch(() => alert("Invalid User Name, Try Again or Register"));
    }

    // For demo purposes
    fetchUsers().then((res) => {
      setUsers(res);
    });
  }, [username, setUser, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(input);
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label className="log-in-form">
          <h2 className="login-h2">Log in</h2>
          <input
            className="username-box"
            placeholder="username"
            value={input}
            required
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" className="login-button">
            Log in
          </button>
        </label>
      </form>
      <h4 className="login-h4">
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </h4>
      <br />
      <hr />
      <h3>This is a demonstration app</h3>
      <h4>
        Please use one of the below users or{" "}
        <NavLink to="/register">Register</NavLink>
      </h4>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <NavLink to="#" onClick={() => setInput(user.username)}>
                {user.username}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
