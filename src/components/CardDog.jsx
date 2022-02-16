import React, { Component } from 'react';

class CardDog extends Component {
  render() {
      const { url, dogName } = this.props;
    return (
        <div>
            <figure>
                <img src={ url } alt={ dogName } />
                <figcaption>{ dogName }</figcaption>
            </figure>
        </div>
    );
  }
}

export default CardDog;
