import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';

class Content extends React.Component {
  render() {
    return (
      <main>
      <Route path="/" component={ Login } />
      <Route path="/search" component={ Search } />
      </main>

    );
  }
}

export default Content;