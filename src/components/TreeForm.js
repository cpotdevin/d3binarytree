import React from 'react';
import './Form.css';

class TreeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFile: true
    }
  }

  handleRadioButtonChange = (event) => {
    this.setState({ inputFile: event.target.value === 'file' });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target['input-data'];
    if (input.value.trim()) {
      if (this.state.inputFile) {
        const file = input.files[0];
        this.readFileJSON(file);
      } else {
        const url = input.value;
        this.readUrlJSON(url);
      }
    }
  }

  readFileJSON = (file) => {
    const fr = new FileReader();
    fr.onload = (event) => {
      const data = JSON.parse(event.target.result);
      this.props.startNewTree(data);
    };
    fr.readAsText(file);
  }

  readUrlJSON = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    this.props.startNewTree(data);
  }

  render() {
    let input = null;
    if (this.state.inputFile) {
      input = (
        <div>
          <label htmlFor='file-input'>JSON File: </label>
          <input id='file-input' type='file' name='input-data' />
        </div>
      );
    } else {
      input = (
        <div>
          <label htmlFor='url-input'>JSON Url: </label>
          <input id='url-input' type='text' name='input-data' />
        </div>
      );
    }

    return (
      <form id='tree-form' onSubmit={this.handleSubmit}>
        <h2>Input Type</h2>

        <div className='radio-button'>
          <input id='file-input-type'
            type='radio'
            name='input-type'
            value='file'
            checked={this.state.inputFile}
            onChange={this.handleRadioButtonChange} />
          <label htmlFor='file-input-type'>File</label>
        </div>

        <div className='radio-button'>
          <input id='url-input-type'
            type='radio'
            name='input-type'
            value='url'
            checked={!this.state.inputFile}
            onChange={this.handleRadioButtonChange} />
          <label htmlFor='url-input-type'>Url</label>
        </div>

        {input}

        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default TreeForm;