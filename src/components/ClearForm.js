import React from 'react';
import './Form.css';

class ClearForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.clearTree();
  }

  render() {
    return (
      <form id='clear-form' onSubmit={this.handleSubmit}>
        <h2>Clear Tree</h2>

        <input type='submit' value='Clear' />
      </form>
    );
  }
}

export default ClearForm;