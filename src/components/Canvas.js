import React from 'react';
import BinaryTree from './BinaryTree';
import TreeForm from './TreeForm';
import NodeForm from './NodeForm';
import './Canvas.css';

class Canvas extends React.Component {
  startNewTree = (data) => {
    console.log(data);
  }

  addNewNode = (value) => {
    console.log(value);
  }

  render() {
    return (
      <div id='app-view'>
        <BinaryTree />
        <TreeForm startNewTree={this.startNewTree} />
        <NodeForm addNewNode={this.addNewNode} />
      </div>
    );
  }
}

export default Canvas;