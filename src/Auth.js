class Auth {
  constructor(props) {
    this.authenticated = false;
  }

  isAuthenticated = () => {
    return this.authenticated;
  }

  login = () => {
    this.authenticated = true;
  }

  logout = () => {
    this.authenticated = false;
  }
}

export default new Auth();

