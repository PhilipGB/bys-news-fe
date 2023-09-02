import './App.css';

import { useState } from 'react';
import { UserContext } from './contexts/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header.jsx';
import { Home } from './routes/Home.jsx';
import { Login } from './routes/Login.jsx';
import { Register } from './routes/Register.jsx';
import { Profile } from './routes/Profile.jsx';
import { SingleArticle } from './routes/SingleArticle.jsx';
import { Topics } from './routes/Topics.jsx';
import { My404Component } from './components/404Component.jsx';

function App() {
  const [user, setUser] = useState({ username: null });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user/:username' element={<Profile />} />
            <Route path='/articles/:article_id' element={<SingleArticle />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/topics/:topic' element={<Topics />} />
            <Route path='*' exact={true} element={<My404Component />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
