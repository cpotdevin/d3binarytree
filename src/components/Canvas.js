import React from 'react';
import BinaryTreeCanvas from './BinaryTreeCanvas';
import TreeForm from './TreeForm';
import NodeForm from './NodeForm';
import RandomizeForm from './RandomizeForm';
import './Canvas.css';

class Canvas extends React.Component {
  startNewTree = (data) => {
    this.refs['binaryTree'].startNewTree(data);
  }

  addNewNodes = (values) => {
    values.forEach(value => this.refs['binaryTree'].addNewNode(value));
  }

  render() {
    return (
      <div id='app-view'>
        <BinaryTreeCanvas ref='binaryTree' />
        <TreeForm startNewTree={this.startNewTree} />
        <NodeForm addNewNodes={this.addNewNodes} />
        <RandomizeForm addNewNodes={this.addNewNodes} />
      </div>
    );
  }
}

export default Canvas;