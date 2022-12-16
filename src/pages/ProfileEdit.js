import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, createUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  state = {
    loading: false,
    name: '',
    email: '',
    image: '',
    description: '',
    save: false,
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

  handleOnChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  }

  handleOnChangeImage = ({ target }) => {
    this.setState({ image: URL.createObjectURL(target.files[0]) });
  }

  handleOnClick = async () => {
    await createUser(this.state);
    this.setState({ save: true });
  }

  render() {
    const { loading, name, email, image, description, save } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="conatiner-profileEdit" data-testid="page-profile-edit">
        <Header isUser="true" />
        {
          save ? (
            <>
              <h2>Perfil salvo</h2>
              <Link to="/profile">Voltar</Link>
            </>
          ) : (
            <>
              <h1>ProfileEdit</h1>
              <img src={ image } alt="profile" />
              <input type="file" onChange={ this.handleOnChangeImage } />
              <form>
                <label form="name">
                  Nome
                  <input value={ name } id="name" onChange={ this.handleOnChange } />
                </label>
                <label form="email">
                  E-mail
                  <input value={ email } id="email" onChange={ this.handleOnChange } />
                </label>
                <label form="description">
                  Descrição
                  <input
                    value={ description }
                    id="description"
                    onChange={ this.handleOnChange }
                  />
                </label>
              </form>
              <button type="button" onClick={ this.handleOnClick }>SALVAR</button>
            </>
          )
        }
      </div>
    );
  }
}

export default ProfileEdit;
