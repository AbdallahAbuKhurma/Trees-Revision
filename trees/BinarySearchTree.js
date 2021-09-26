'use strict';

const Node = require('./node');
const BinaryTree = require('./binaryTrees');

class BinarySearchTree extends BinaryTree{
  add(value) {
    try {
      const node = new Node(value);
      if(!this.root) {
        this.root = node;
        return;
      }
      const _traverse = (temp) => {
        if(temp.value > node.value) {
          if(!temp.left) {
            temp.left = node;
            return;
          }
          _traverse(temp.left);
        }
        if(temp.value < node.value) {
          if(!temp.right) {
            temp.right = node;
            return;
          }
          _traverse(temp.right);
        }
        if(temp.value === node.value) {
          throw new Error('cant add duplicate value');
        }
      };
      _traverse(this.root);
      return;
    } catch (error) {
      console.error({message: error.message});
    }
  }

  contains(value){
    try {
      if(!this.root) {
        throw new Error('empty tree');
      } else {
        const _traverse = (node) => {
          if(value > node.value && node.right) {
            return _traverse(node.right);
          } else if(value < node.value && node.left) {
            return _traverse(node.left);
          } else if(value === node.value) {
            return true;
          } else {
            return false;
          }
        };
        return _traverse(this.root);
      }
    } catch (error) {
      console.error({message: error.message});
    }
  }
}

module.exports = BinarySearchTree;
