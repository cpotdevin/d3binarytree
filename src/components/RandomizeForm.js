import React from 'react';
import './Form.css';

class RandomizeForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const numRandomValues = Number(event.target['num-random-values'].value);
    const minRandomValue = Number(event.target['min-random-value'].value);
    const maxRandomValue = Number(event.target['max-random-value'].value);

    if (numRandomValues !== '' && minRandomValue !== '' && maxRandomValue !== '') {
      const randomNodes = [];
      for (let i = 0; i < numRandomValues; i++) {
        const value = Math.floor(Math.random()*(maxRandomValue - minRandomValue + 1)) + minRandomValue;
        randomNodes.push(value);
      }

      this.props.addNewNodes(randomNodes);
    }
  }

  render() {
    return (
      <form id='randomize-form' onSubmit={this.handleSubmit}>
        <h2>Random Tree</h2>

        <div>
          <label htmlFor='num-random-values-input'>Num nodes: </label>
          <input input='num-random-values-input'
            type='number'
            name='num-random-values' />
        </div>

        <div>
          <label htmlFor='min-random-value-input'>Min: </label>
          <input input='min-random-value-input'
            type='number'
            name='min-random-value' />
        </div>

        <div>
          <label htmlFor='max-random-value-input'>Max: </label>
          <input input='max-random-value-input'
            type='number'
            name='max-random-value' />
        </div>

        <input type='submit' value='Add' />
      </form>
    );
  }
}

export default RandomizeForm;