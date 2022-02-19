import React, { Component } from 'react';
import './App.css'
import { DualRing } from 'react-awesome-spinners';
import fetchAPI from './services/fetchAPI';
import CardDog from './components/CardDog';
import Header from './components/Header';
import Footer from './components/Footer';

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
            loading ? <div className="loading"><DualRing color="#ff9500" /></div>  : (
              <CardDog url={ message } dogName={ breedFormated } />
              )
          }
          <button onClick={ this.handleButton }>Gerar</button>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

