import React from 'react';
import './TreeForm.css';
import { async } from 'q';

class TreeForm extends React.Component {
  constructor() {
    super();
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
    if (this.state.inputFile) {
      const file = input.files[0];
      this.readFileJSON(file);
    } else {
      const url = input.value;
      this.readUrlJSON(url);
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
        <input type='file' name='input-data' />
      );
    } else {
      input = (
        <input type='text' name='input-data' />
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