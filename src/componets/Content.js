import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';

class Content extends React.Component {
  render() {
    return (
      <main>
      <Route path="/" component={ Login } />
      <Route path="/search" component={Search} />
      <Route path="/album/:id" component={Album} />
      </main>

    );
  }
}

export default Content;