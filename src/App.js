import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Login />
          <Search />
          <Album />
          <Favorites />
          <Profile />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
