const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  render() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
  }

  add(data) {
    const newNode = new Node(data);

    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return newNode;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return search(node.left, data);
      }

      if (data > node.data) {
        return search(node.right, data);
      }
    }

    return search(this.rootTree, data);
  }

  find(data) {
    function find(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return find(node.left, data);
      }

      if (data > node.data) {
        return find(node.right, data);
      }
    }
    return find(this.rootTree, data);
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
