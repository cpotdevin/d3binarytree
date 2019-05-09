import * as d3 from 'd3';

const WIDTH = 1000;
const HEIGHT = 700;

const PADDING = 100;

class BinaryTree {
  constructor(divId) {
    this.svg = d3.select(divId).append('svg')
      .attr('width', WIDTH)
      .attr('height', HEIGHT);

    this.branches = this.svg.append('g')
      .attr('id', 'branches')
      .attr('transform', `translate(${WIDTH/2}, ${PADDING})`);

    this.nodes = this.svg.append('g')
      .attr('id', 'nodes')
      .attr('transform', `translate(${WIDTH/2}, ${PADDING})`);

    this.text = this.svg.append('g')
      .attr('id', 'text')
      .attr('transform', `translate(${WIDTH/2}, ${PADDING})`);
  }

  addNode(node) {
    if (node.parent) {
      this.branches.append('line')
        .attr('x1', node.parent.x)
        .attr('y1', node.parent.y)
        .attr('x2', node.x)
        .attr('y2', node.y);
    }

    this.nodes.append('circle').attr('r', 20)
      .attr('cx', node.x)
      .attr('cy', node.y);

    this.text.append('text')
      .text(node.value)
      .attr('x', node.x)
      .attr('y', node.y + 4);
  }
}

export default BinaryTree;