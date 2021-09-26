'use strict';

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        queue.push(node.value);
        if (node.left) {
          _traverse(node.left);
        }
        if (node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  postOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        if (node.left) {
          _traverse(node.left);
        }
        if (node.right) {
          _traverse(node.right);
        }
        queue.push(node.value);
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  inOrder() {
    try {
      if (!this.root) {
        throw new Error('empty tree');
      }
      const queue = [];
      const _traverse = (node) => {
        if (node.left) {
          _traverse(node.left);
        }
        queue.push(node.value);
        if (node.right) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return queue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  getMaxValue() {
    try {
      if (!this.root) {
        return 'empty tree';
      }
      let maxValue = this.root.value;
      const _traverse = (node) => {
        if (node.value >= maxValue) {
          maxValue = node.value;
        }
        if (node.right) {
          _traverse(node.right);
        }
        if (node.left) {
          _traverse(node.left);
        }
      };
      _traverse(this.root);
      return maxValue;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  breadthFirst(tree) {
    try {
      if (!this.root) {
        return 'empty tree';
      }
      let queue = [];
      let results = [];
      tree = this.root;
      queue.push(tree);

      const _traverse = (node) => {
        while (queue.length > 0) {
          node = queue[0];
          results.push(node.value);
          if (node.left !== null) {
            queue.push(node.left);
          }
          if (node.right !== null) {
            queue.push(node.right);
          }
          queue.shift();
        }
      };
      _traverse(tree);
      return results;
    } catch (error) {
      console.error({ message: error.message });
    }
  }

  treeFizzBuzz(tree) {
    if (!this.root) {
      return 'Empty Tree';
    }
    tree = this.root;
    const results = [];
    const _traverse = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
        results.push(node.value);
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
        results.push(node.value);
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
        results.push(node.value);
      } else {
        node.value = `${node.value}`;
        results.push(node.value);
      }
      if (node.left !== null) {
        _traverse(node.left);
      }
      if (node.right !== null) {
        _traverse(node.right);
      }
    };
    _traverse(tree);
    return results;
  }

  sumOfOddNumbers() {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      let sum = 0;

      const _traverse = (node) => {
        if (node.value % 2 !== 0) {
          sum += node.value;
        }
        if (node.left !== null) {
          _traverse(node.left);
        }
        if (node.right !== null) {
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return sum;
    } catch (error) {
      console.error(error);
    }
  }

  /*
    here is the challenges of hacker rank
    */

  // challenge 1 => the height of the binary tree // max depth of tree

  heightOfTree(node) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      if (node === null) {
        return 0;
      } else {
        let lDepth = this.heightOfTree(node.left);
        let rDepth = this.heightOfTree(node.right);
        return Math.max(lDepth, rDepth) + 1;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // challenge 2 => top view of the binary tree

  topView() {
    const viewItems = [];

    const traverseLeft = (node) => {
      if (!node) return;

      traverseLeft(node.left);
      viewItems.push(node.value);
    };

    const traverseRight = (node) => {
      if (!node) return;

      viewItems.push(node.value);
      traverseRight(node.right);
    };

    traverseLeft(this.root.left);
    viewItems.push(this.root.value);
    traverseRight(this.root.right);

    // console.log(...viewItems);

    return viewItems;
  }

  // challenge 3 => the files thing of the binary tree (mock interview)

  findFiles(fisrtTree, secondTree) {
    try {
      let counter1 = 0;
      let counter2 = 0;
      for (let tree of fisrtTree) {
        let traverse = (node) => {
          if (node.left) traverse(node.left);
          if (node.value === 'file') counter1++;
          if (node.right) traverse(node.right);
        };
        traverse(tree.root);
      }
      for (let tree of secondTree) {
        let traverse = (node) => {
          if (node.left) traverse(node.left);
          if (node.value === 'file') counter2++;
          if (node.right) traverse(node.right);
        };
        traverse(tree.root);
      }
      if (counter1 === counter2) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // challenge 4 => the lowest commom ancestor

  lowestCommonAncestor(node, n1, n2) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      const _traverse = () => {
        while (node !== null) {
          if (node.value > n1 && node.value > n2) {
            node = node.left;
          } else if (node.value < n1 && node.value < n2) {
            node = node.right;
          } else {
            break;
          }
        }
      };
      _traverse(this.root);
      return node;
    } catch (error) {
      console.error(error);
    }
  }

  // leetcode challenges =>

  // challenge 1 => fine the sum of the node values between two nodes

  rangeSum(root, low, high) {
    if (root === null) {
      return 0;
    }
    let sum = 0;
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.value >= low && current.value <= high) {
        sum += current.value;
      }
      if (current.left !== null && current.value > low) {
        queue.push(current.left);
      }
      if (current.right !== null && current.value < high) {
        queue.push(current.right);
      }
    }
    return sum;
  }

  // challenge 2 => findLonlyNodes

  findLonlyNodes() {
    try {
      const lonlyNodes = [];
      const _traverse = (node) => {
        if (node.left) {
          if (!node.right) {
            lonlyNodes.push(node.left.value);
          }
          _traverse(node.left);
        }
        if (node.right) {
          if (!node.left) {
            lonlyNodes.push(node.right.value);
          }
          _traverse(node.right);
        }
      };
      _traverse(this.root);
      return lonlyNodes;
    } catch (error) {
      console.error(error);
    }
  }

  //challenge 3 => invert binary tree

  invert(node) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) {
        this.invert(node.left);
      }
      if (node.right) {
        this.invert(node.right);
      }
      return node;
    } catch (error) {
      console.error(error);
    }
  }

  // challenge 4 => Deepest Leaves Sum

  deepestLeavesSum(root) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      let sum;
      const _traverse = (node) => {
        let queue = [root];
        let queuelen;
        while (queue.length) {
          queuelen = queue.length;
          sum = 0;
          for (let i = 0; i < queuelen; i++) {
            node = queue.shift();
            sum += node.value;
            if (node.left) {
              queue.push(node.left);
            }
            if (node.right) {
              queue.push(node.right);
            }
          }
        }
      };
      _traverse(this.root);
      return sum;
    } catch (error) {
      console.error(error);
    }
  }

  //challenge 5 => mirror

  mirror(node) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      if (node === null) {
        return node;
      }
      let leftNodes = this.mirror(node.left);
      let rightNodes = this.mirror(node.right);
      if (node.left) {
        node.left = rightNodes;
      }
      if (node.right) {
        node.right = leftNodes;
      }
      return node;
    } catch (error) {
      console.error(error);
    }
  }

  // challenge 6 => same tree

  sameTree(tree1, tree2) {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      if (
        (!tree1 && tree2) ||
        (tree1 && !tree2) ||
        (tree1 && tree2 && tree1.value !== tree2.value)
      ) {
        return false;
      }
      if (tree1 && tree2) {
        this.sameTree(tree1.left, tree2.left);
        this.sameTree(tree1.right, tree2.right);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // challenge 7 => is Balanced

  isBalanced() {
    try {
      if (!this.root) {
        throw new Error('there is no root');
      }
      let isBalancedTree = true;
      const _traverse = (node) => {
        if (node === null) {
          return 0;
        }
        const leftNodes = _traverse(node.left);
        const rightNodes = _traverse(node.right);

        if (Math.abs(leftNodes - rightNodes) > 1) {
          isBalancedTree = false;
        }
        return 1 + Math.max(leftNodes, rightNodes);
      };
      _traverse(this.root);
      return isBalancedTree;
    } catch (error) {
      console.error(error);
    }
  }

  isSymtric(left,right) {
    if (left === null && right === null) {
      return true;
    }
    if (left === null || right === null || left.val !== right.val) {
      return false;
    }
    this.isSymtric(left.right, right.left) &&
    this.isSymtric(left.left, right.right);
    return true;
  }
}
module.exports = BinaryTree;
