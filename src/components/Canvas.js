import React from 'react';
import BinaryTree from './BinaryTree';
import TreeForm from './TreeForm';
import './Canvas.css';

class Canvas extends React.Component {
  startNewTree = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div id='app-view'>
        <BinaryTree />
        <TreeForm startNewTree={this.startNewTree} />
      </div>
    );
  }
}

export default Canvas;