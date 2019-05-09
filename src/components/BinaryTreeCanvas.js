import React from 'react';
import BinaryTree from './BinaryTree';
import './BinaryTree.css';

class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.x = 0;
    this.y = 0;
  }
}

class BinaryTreeCanvas extends React.Component {
  constructor() {
    super();
    this.root = null;
  }

  componentDidMount() {
    this.BinaryTree = new BinaryTree('#binary-tree');
  }

  startNewTree(data) {
    this.clearTree();

    data.forEach(node => {
      this.addNewNode(node.value);
    });
  }

  clearTree() {
    this.BinaryTree.clearTree();
    this.root = null;
  }

  addNewNode(value) {
    if (this.root) {
      this.addNode(this.root, new Node(value), 40);
    } else {
      this.root = new Node(value);
      this.BinaryTree.addNode(this.root);
    }
  }

  addNode(currentNode, newNode, xChange) {
    if (newNode.value < currentNode.value) {
      newNode.x -= xChange;
      newNode.y += 40;
      if (currentNode.left) {
        this.addNode(currentNode.left, newNode, xChange/2);
      } else {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        this.BinaryTree.addNode(newNode);
      }
    } else {
      newNode.x += xChange;
      newNode.y += 40;
      if (currentNode.right) {
        this.addNode(currentNode.right, newNode, xChange/2);
      } else {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        this.BinaryTree.addNode(newNode);
      }
    }
  }

  render() {
    return (
      <div id='binary-tree'></div>
    );
  }
}

export default BinaryTreeCanvas;