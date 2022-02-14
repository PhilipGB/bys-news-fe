import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { createUser } from "../utils/Api";

export function Register() {
  const [usernameInput, setUsernameInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    createUser({
      username: usernameInput,
      name: nameInput,
      avatar_url: urlInput,
    })
      .then((res) => {
        setUser(res);
        setUsernameInput("");
        setNameInput("");
        setUrlInput("");
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Register">
      <h2>!Register! - Work in progress</h2>
      <form onSubmit={handleSubmit}>
        <label className="sign-in-form">
          <input
            className="input-box"
            placeholder="username"
            value={usernameInput}
            required
            onChange={(event) => setUsernameInput(event.target.value)}
          />
          <input
            className="input-box"
            placeholder="name"
            value={nameInput}
            required
            onChange={(event) => setUsernameInput(event.target.value)}
          />
          <input
            className="input-box"
            placeholder="Avatar URL"
            value={urlInput}
            required
            onChange={(event) => setUrlInput(event.target.value)}
          />
          <button type="submit">Register</button>
        </label>
      </form>
    </div>
  );
}
