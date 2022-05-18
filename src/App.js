import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Login />
          <Search />
          <Album />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
