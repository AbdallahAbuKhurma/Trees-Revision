'use strict';

const Node = require('../trees/node');
const BST = require('../trees/BinarySearchTree');

describe('binary search tree', () => {
  it('Can successfully instantiate an empty tree',()=>{
    const tree = new BST();
    expect(tree instanceof BST).toBeDefined();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BST;
    const root = new Node(1);
    tree.root = root;
    expect(tree.root.value).toBe(1);
    expect(tree.root.right).toBe(null);
    expect(tree.root.left).toBe(null);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const tree = new BST;
    tree.add(50);
    tree.add(25);
    tree.add(75);
    expect(tree.root.value).toBe(50);
    expect(tree.root.right.value).toBe(75);
    expect(tree.root.left.value).toBe(25);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    const tree = new BST;
    tree.add(5);
    tree.add(10);
    tree.add(15);
    tree.add(20);
    tree.add(25);
    tree.add(30);
    expect(tree.preOrder()).toEqual([5,10,15,20,25,30]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    const tree = new BST;
    tree.add(5);
    tree.add(3);
    tree.add(12);
    tree.add(8);
    tree.add(13);
    tree.add(17);
    expect(tree.inOrder()).toEqual([3,5,8,12,13,17]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    const tree = new BST;
    tree.add(5);
    tree.add(10);
    tree.add(15);
    tree.add(20);
    tree.add(25);
    tree.add(30);
    expect(tree.postOrder()).toEqual([30,25,20,15,10,5]);
  });
});
