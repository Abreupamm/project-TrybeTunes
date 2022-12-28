import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends React.Component {
  state = {
    loading: false,
    name: '',
    email: '',
    image: '',
    description: '',
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const User = await getUser();
    this.setState({ loading: false,
      name: User.name,
      email: User.email,
      image: User.image,
      description: User.description });
  }

  render() {
    const { loading, name, email, image, description } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-profile">
        <Header isUser="true" />
        <div className="profile">
          <div className="image">
            <img
              data-testid="profile-image"
              src={ image }
              alt={ name }
            />
            <Link to="/profile/edit">Editar perfil</Link>
          </div>
          <div>
            <h3>Nome:</h3>
            <p>{name}</p>
            <h3>E-mail:</h3>
            <p>{email}</p>
            <h3>Descrição:</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
