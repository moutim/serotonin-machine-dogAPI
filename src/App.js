import React, { Component } from 'react';
import './App.css'
import { DualRing } from 'react-awesome-spinners';
import getListBreeds from './services/getListBreeds';
import fetchAPI from './services/fetchAPI';
import CardDog from './components/CardDog';
import Header from './components/Header';
import Footer from './components/Footer';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

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
    this.setState({ dog, loading: false });
  }

  render(){
    const { dog: { message, breedFormated }, loading } = this.state;
    return (
      <>
        <Header />
        <main>
          <h1>Serotonin Machine</h1>

          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
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

