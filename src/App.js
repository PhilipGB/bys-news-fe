import "./App.css";

import { useState } from "react";
import { UserContext } from "./contexts/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { Profile } from "./routes/Profile";
import { SingleArticle } from "./routes/SingleArticle";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
