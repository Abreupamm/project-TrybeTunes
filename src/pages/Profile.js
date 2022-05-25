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
    // console.log(User);
    this.setState({ loading: false });
    this.setState({ name: User.name });
    this.setState({ email: User.email });
    this.setState({ image: User.image });
    this.setState({ description: User.description });
  }

  render() {
    const { loading, name, email, image, description } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          <div>
            <img
              data-testid="profile-image"
              src={ image }
              alt={ name }
            />
            <Link to="/profile/edit">Editar perfil</Link>
          </div>
          <h3>Nome</h3>
          <p>{ name }</p>
          <h3>E-mail</h3>
          <p>{ email }</p>
          <h3>Descrição</h3>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

export default Profile;
