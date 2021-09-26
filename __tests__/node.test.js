'use strict';

const Node = require('../trees/node');

describe('Node class', () => {
  it('create an instance of the Node class', () => {
    const node = new Node();
    expect(node).toBeDefined();
  });

  it('create node instance with the correct properties', () => {
    const value = 'any';
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
