import React from 'react';
import BinaryTreeCanvas from './BinaryTreeCanvas';
import TreeForm from './TreeForm';
import NodeForm from './NodeForm';
import RandomizeForm from './RandomizeForm';
import ClearForm from './ClearForm';
import './Canvas.css';

class Canvas extends React.Component {
  startNewTree = (data) => {
    this.refs['binaryTree'].clearTree();
    this.addNewNodes(data.map(node => node.value));
  }

  addNewNodes = (values) => {
    values.forEach((value, index) => {
      setTimeout(() => this.refs['binaryTree'].addNewNode(value), 200*index);
    });
  }

  clearTree = () => {
    this.refs['binaryTree'].clearTree();
  }

  render() {
    return (
      <div id='app-view'>
        <BinaryTreeCanvas ref='binaryTree' />
        <TreeForm startNewTree={this.startNewTree} />
        <NodeForm addNewNodes={this.addNewNodes} />
        <RandomizeForm addNewNodes={this.addNewNodes} />
        <ClearForm clearTree={this.clearTree} />
      </div>
    );
  }
}

export default Canvas;