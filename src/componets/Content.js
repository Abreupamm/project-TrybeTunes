import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

class Content extends React.Component {
  render() {
    return (
      <main>
      <Route path="/" component={ Login } />
      <Route path="/search" component={Search} />
      <Route path="/album/:id" component={Album} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/profile" component={Profile} />   
      
      </main>

    );
  }
}

export default Content;