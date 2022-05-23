import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-gif">
          <h1>Carregando...</h1>
        </div>
      </div>
    );
  }
}

export default Loading;
