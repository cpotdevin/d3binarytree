import React from 'react';
import './Form.css';

class NodeForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const value = Number(event.target['node-value'].value);
    if (value !== '') {
      this.props.addNewNodes([value]);
    }
  }

  render() {
    return (
      <form id='node-form' onSubmit={this.handleSubmit}>
        <h2>Add Node</h2>

        <div>
          <label htmlFor='value-input'>Value: </label>
          <input input='value-iput'
            type='number'
            name='node-value' />
        </div>

        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default NodeForm;