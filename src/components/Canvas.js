import React from 'react';
import BinaryTreeCanvas from './BinaryTreeCanvas';
import TreeForm from './TreeForm';
import NodeForm from './NodeForm';
import './Canvas.css';

class Canvas extends React.Component {
  startNewTree = (data) => {
    this.refs['binaryTree'].startNewTree(data);
  }

  addNewNode = (value) => {
    this.refs['binaryTree'].addNewNode(value);
  }

  render() {
    return (
      <div id='app-view'>
        <BinaryTreeCanvas ref='binaryTree' />
        <TreeForm startNewTree={this.startNewTree} />
        <NodeForm addNewNode={this.addNewNode} />
      </div>
    );
  }
}

export default Canvas;