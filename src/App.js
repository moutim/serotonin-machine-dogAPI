import React, { Component } from 'react';
import './App.css'
import { DualRing } from 'react-awesome-spinners';
import getListBreeds from './services/getListBreeds';
import BreedSelect from './components/BreedSelect';
import { fetchAPI, fetchAPIBreed } from './services/fetchAPI';
import CardDog from './components/CardDog';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    loading: false,
    dog: {},
    listBreed: [],
    selectBreed: '',
  }

  handleButton = async () => {
    this.setState({ loading: true });
    const { selectBreed } = this.state;
    let dog;
    if (selectBreed === 'allBreeds' || !selectBreed) { dog = await fetchAPI()}
    else { dog = await fetchAPIBreed(selectBreed) };
    this.setState({ loading: false, dog});
  }

  handleChange = async ({ target: { value }}) => {
    this.setState({ loading: true });
    console.log(value);
    let dog;
    if (value === 'allBreeds') { dog = await fetchAPI() }
    else { dog = await fetchAPIBreed(value) }
    this.setState({ loading: false, dog, selectBreed: value });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const dog = await fetchAPI();
    const listBreed = await getListBreeds();
    this.setState({ dog, loading: false, listBreed });
  }

  render(){
    const { dog: { message, breedFormated }, loading, listBreed } = this.state;

    return (
      <>
        <Header />
        <main>
          <h1>Serotonin Machine</h1>
          <p>Looking for a specific breed? Browse among the 100 that we have registered!</p>
          {
            listBreed ? <BreedSelect listBreed={ listBreed } handleChange={ this.handleChange } /> : false
          }
          {
            loading ? <div className="loading"><DualRing color="#ff9500" /></div>  : (
              <CardDog url={ message } dogName={ breedFormated } />
              )
          }
          <button onClick={ this.handleButton }>Release Serotonin</button>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

