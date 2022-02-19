import React, { Component } from 'react';
import './App.css'
import { DualRing } from 'react-awesome-spinners';
import getListBreeds from './services/getListBreeds';
import BreedSelect from './components/BreedSelect';
import fetchAPI from './services/fetchAPI';
import CardDog from './components/CardDog';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    loading: false,
      dog: {},
      listBreed: getListBreeds,
      selectBreed: 'breeds'
  }

  handleButton = async () => {
    this.setState({ loading: true });
    const dog = await fetchAPI();
    this.setState({ loading: false, dog});
  }

  handleChange = async ({ target: { value }}) => {
    this.setState({ loading: true });
    const breed = value;
    this.setState({ loading: false, selectBreed: breed });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const dog = await fetchAPI();
    this.setState({ dog, loading: false });
  }

  render(){
    const { dog: { message, breedFormated }, loading, listBreed } = this.state;
    return (
      <>
        <Header />
        <main>
          <h1>Serotonin Machine</h1>
          <BreedSelect listBreed={ listBreed } handleChange={ this.handleChange } />
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

