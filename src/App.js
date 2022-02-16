import React, { Component } from 'react';
import './App.css'
import fetchAPI from './services/fetchAPI';
import Loading from './components/Loading';
import CardDog from './components/CardDog';
import Header from './components/Header';

class App extends Component {
  state = {
    loading: false,
      dog: {}
  }

  handleButton = async () => {
    this.setState({ loading: true });
    const dog = await fetchAPI();
    this.setState({ loading: false, dog});
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const dog = await fetchAPI();
    console.log(dog);
    this.setState({ dog, loading: false });
  }

  render(){
    const { dog: { message, breedFormated }, loading } = this.state;
    return (
      <>
        <Header />
        <main>
          <h1>Serotonin Machine</h1>
          {
            loading ? <Loading /> : (
              <CardDog url={ message } dogName={ breedFormated } />
              )
          }
          <button onClick={ this.handleButton }>Gerar</button>
        </main>
      </>
    );
  }
}

export default App;

