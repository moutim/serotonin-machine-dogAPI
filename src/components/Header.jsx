import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
          <img src={ logo } alt="Logotipo com um cachorro" />
          <p>Do you want to release that feeling of seeing a puppy? Here you can find thousands of dog pictures.</p>
      </header>
    )
  }
}

export default Header