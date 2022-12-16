import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header isUser="true" />
        <h1>ProfileEdit</h1>
      </div>
    );
  }
}

export default ProfileEdit;
