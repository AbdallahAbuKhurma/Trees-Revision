'use strict';

const BinaryTree = require('../trees/binaryTrees');
const Node = require('../trees/node');

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new BinaryTree(one);
  });
  // root - left - right
  it('preorder', () => {
    let expectedArr = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expectedArr);
  });
  // left - root - right
  it('inorder', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });
  // left - right -root
  it('postorder', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });
});

describe('getMaxValue of the binary tree', () => {
  let tree;
  beforeAll(() => {
    tree = new BinaryTree();
    let node1 = new Node(5);
    let node2 = new Node(3);
    let node3 = new Node(17);
    let node4 = new Node(25);
    let node5 = new Node(11);

    tree.root = node1;
    tree.root.right = node2;
    tree.root.right.left = node3;
    tree.root.left = node4;
    tree.root.left.right = node5;
  });
  it('should return the maximum value in the tree', () => {
    expect(tree.getMaxValue()).toEqual(25);
  });
  it('should return an error if there is no root', () => {
    let tree = new BinaryTree();
    expect(tree.getMaxValue()).toBe('empty tree');
  });
});

describe('tree breadth fisrt', () => {
  it('should return list of values in the tree in the order they were encoumtred', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    expect(tree.breadthFirst()).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
  it('should return an error if there is no root', () => {
    let tree = new BinaryTree();
    expect(tree.breadthFirst()).toBe('empty tree');
  });
});

describe('FIZZBUZZ TREE', () => {
  it('shoud return Fizz if the value is devidable by 3', () => {
    let tree = new BinaryTree();
    tree.root = new Node(3);
    tree.root.right = new Node(6);
    tree.root.left = new Node(9);
    expect(tree.treeFizzBuzz()).toEqual(['Fizz', 'Fizz', 'Fizz']);
  });
  it('shoud return Buzz if the value is devidable by 5', () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    tree.root.right = new Node(10);
    tree.root.left = new Node(20);
    expect(tree.treeFizzBuzz()).toEqual(['Buzz', 'Buzz', 'Buzz']);
  });
  it('shoud return FizzBuzz if the value is devidable by 15', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.right = new Node(30);
    tree.root.left = new Node(45);
    expect(tree.treeFizzBuzz()).toEqual(['FizzBuzz', 'FizzBuzz', 'FizzBuzz']);
  });
  it('should return Fizz Buzz Tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(2);
    tree.root.left = new Node(3);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(15);
    tree.root.right = new Node(10);
    tree.root.right.right = new Node(45);
    tree.root.right.right.left = new Node(4);
    expect(tree.treeFizzBuzz()).toEqual([
      '2',
      'Fizz',
      '1',
      'Fizz',
      'Buzz',
      'FizzBuzz',
      'Buzz',
      'FizzBuzz',
      '4',
    ]);
  });
});

describe('the sum of odd numbers', () => {
  it('should return the summation of the odd values of the nodes', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(5);
    tree.root.right.right = new Node(4);
    expect(tree.sumOfOddNumbers()).toEqual(9);
  });
});

describe('the height of binary tree', () => {
  it('should return the maximum height of a binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(5);
    tree.root.left.right = new Node(4);
    expect(tree.heightOfTree(tree.root)).toEqual(3);
  });
});

describe('the top view of a binary tree', () => {
  it('should return the top view nodes of a binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.right = new Node(3);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(7);
    expect(tree.topView(tree.root)).toEqual([4, 2, 1, 3, 7]);
  });
});

describe('test find files of a binary tree', () => {
  it('should return fales when trees has different number of files', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node('folder');
    tree1.root.right = new Node('folder');
    tree1.root.right.right = new Node('folder');
    tree1.root.right.right.right = new Node('file');
    tree1.root.right.right.left = new Node('file');
    tree1.root.left = new Node('folder');
    tree1.root.left.left = new Node('file');
    tree1.root.left.right = new Node('folder');
    tree1.root.left.right.right = new Node('file');
    tree1.root.left.right.left = new Node('file');

    let tree2 = new BinaryTree();
    tree2.root = new Node('folder');
    tree2.root.right = new Node('folder');
    tree2.root.right.right = new Node('folder');
    tree2.root.right.right.right = new Node('folder');
    tree2.root.right.right.left = new Node('file');
    tree2.root.right.right.right.right = new Node('file');
    tree2.root.right.right.right.left = new Node('file');
    let fisrtTree = [tree1];
    let secondTree = [tree2];
    expect(tree1.findFiles(fisrtTree, secondTree)).toEqual(false);
  });

  it('should return true when trees has the same number of files', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node('folder');
    tree1.root.right = new Node('folder');
    tree1.root.right.right = new Node('folder');
    tree1.root.right.right.right = new Node('file');
    tree1.root.right.right.left = new Node('file');
    tree1.root.left = new Node('folder');
    tree1.root.left.left = new Node('file');
    tree1.root.left.right = new Node('folder');
    tree1.root.left.right.right = new Node('file');
    tree1.root.left.right.left = new Node('file');

    let tree2 = new BinaryTree();
    tree2.root = new Node('folder');
    tree2.root.right = new Node('folder');
    tree2.root.right.right = new Node('folder');
    tree2.root.right.right.right = new Node('file');
    tree2.root.right.right.left = new Node('file');
    tree2.root.left = new Node('folder');
    tree2.root.left.left = new Node('file');
    tree2.root.left.right = new Node('folder');
    tree2.root.left.right.right = new Node('file');
    tree2.root.left.right.left = new Node('file');
    let fisrtTree = [tree1];
    let secondTree = [tree2];
    expect(tree1.findFiles(fisrtTree, secondTree)).toEqual(true);
  });
});

describe('the lowest common ancestor', () => {
  it('should return the lowest common ancestor between two nodes', () => {
    let tree = new BinaryTree();
    tree.root = new Node(20);
    tree.root.left = new Node(8);
    tree.root.right = new Node(22);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(12);
    tree.root.left.right.left = new Node(10);
    tree.root.left.right.right = new Node(14);
    expect(tree.lowestCommonAncestor(tree.root, 10, 14).value).toEqual(12);
    expect(tree.lowestCommonAncestor(tree.root, 14, 8).value).toEqual(8);
    expect(tree.lowestCommonAncestor(tree.root, 10, 22).value).toEqual(20);
  });
});

describe('the range sum functionalty', () => {
  it('should return the summation of the nodes values between two nodes', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.right = new Node(18);
    let low = 7;
    let high = 15;
    expect(tree.rangeSum(tree.root, low, high)).toEqual(32);
  });
});

describe('the lonly nodes functionalty', () => {
  it('should return the lonly nodes of the tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.right = new Node(4);
    tree.root.right.left = new Node(5);
    tree.root.right.left.right = new Node(6);
    expect(tree.findLonlyNodes(tree.root)).toEqual([4, 5, 6]);
  });
});

// describe('the merge of two binary trees', () => {
//   it('should return a tree which is a compination of tree1 and tree2', () => {
//     let tree1 = new BinaryTree();
//     tree1.root = new Node(1);
//     tree1.left = new Node(2);
//     tree1.right = new Node(3);
//     tree1.left.left = new Node(4);
//     tree1.left.right = new Node(5);
//     tree1.right.right = new Node(6);

//     let tree2 = new BinaryTree();
//     tree2.root = new Node(4);
//     tree2.left = new Node(1);
//     tree2.right = new Node(7);
//     tree2.left.left = new Node(3);
//     tree2.right.left = new Node(2);
//     tree2.right.right = new Node(6);
//     expect(tree1.mergeTrees(tree1.root, tree2.root)).toEqual([7, 3, 5, 5, 2, 10, 12]);
//   });
//});

describe('invert a binary tree', () => {
  it('should return an invrted binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(4);
    tree.root.left = new Node(2);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right = new Node(7);
    tree.root.right.left = new Node(6);
    tree.root.right.right = new Node(9);
    expect(tree.invert(tree.root)).toEqual(
      tree.root = new Node(4),
      tree.root.right = new Node(2),
      tree.root.right.right = new Node(1),
      tree.root.right.left = new Node(3),
      tree.root.left = new Node(7),
      tree.root.left.right = new Node(6),
      tree.root.left.left = new Node(9)
    );
  });
});

describe('the sum of the deepest leaves', () => {
  it('should return the sum of the deepest leaves of a binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);
    tree.root.left.left.left = new Node(7);
    tree.root.right = new Node(3);
    tree.root.right.right = new Node(6);
    tree.root.right.right.right = new Node(8);
    expect(tree.deepestLeavesSum(tree.root)).toEqual(15);
  });
});

describe('the mirror function of the binary tree', () => {
  it('should return an exact mirror of the binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(1);
    tree.root.left = new Node(3);
    tree.root.right = new Node(2);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(4);
    expect(tree.mirror(tree.root)).toEqual(
      tree.root = new Node(1),
      tree.root.left = new Node(2),
      tree.root.left.left = new Node(4),
      tree.root.left.right = new Node(5),
      tree.root.right = new Node(3)
    );
  });
});

describe('is same tree function of the binary tree', () => {
  it('should return an exact same of the binary tree', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(3);
    tree1.root.right = new Node(2);
    tree1.root.right.left = new Node(5);
    tree1.root.right.right = new Node(4);

    let tree2 = new BinaryTree();
    tree2.root = new Node(1);
    tree2.root.left = new Node(3);
    tree2.root.right = new Node(2);
    tree2.root.right.left = new Node(5);
    tree2.root.right.right = new Node(4);
    expect(tree1.mirror(tree1.root, tree2.root)).toBeTruthy();
  });
});

describe('the is balanced tree function', () => {
  it('should return true if the tree is balanced', () => {
    let tree1 = new BinaryTree();
    tree1.root = new Node(3);
    tree1.root.left = new Node(9);
    tree1.root.right = new Node(20);
    tree1.root.right.left = new Node(15);
    tree1.root.right.right = new Node(7);
    expect(tree1.isBalanced()).toEqual(true);
  });
  it('should return false if the tree is not balanced', () => {
    let tree2 = new BinaryTree();
    tree2.root = new Node(1);
    tree2.root.right = new Node(2);
    tree2.root.left = new Node(2);
    tree2.root.left.right = new Node(3);
    tree2.root.left.left = new Node(3);
    tree2.root.left.left.left = new Node(4);
    tree2.root.left.left.right = new Node(4);
    expect(tree2.isBalanced()).toEqual(false);
  });
});
