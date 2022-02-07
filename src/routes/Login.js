import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { fetchUserByName } from "../utils/Api";
import { UserContext } from "../contexts/User";

export function Login(props) {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      fetchUserByName(username)
        .then((res) => {
          setUser(res);
          setTimeout(() => navigate("/"), 1000);
        })
        .catch(() => alert("Invalid User Name, Try Again or Register"));
    }
  }, [username, navigate, setUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(input);
  };

  return (
    <div className="Login">
      <h2>Log in</h2>

      <form onSubmit={handleSubmit}>
        <label className="log-in-form">
          <input
            className="input-box"
            placeholder="username"
            value={input}
            required
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit">Log in</button>
        </label>
      </form>
      <h2>
        Or <NavLink to="/register">Register</NavLink>
      </h2>
    </div>
  );
}
