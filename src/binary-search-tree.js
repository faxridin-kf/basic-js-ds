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

  remove(data) {
    function remove(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRigth = node.right;

        while (minFromRigth.left) {
          minFromRigth = minFromRigth.left;
        }
        node.data = minFromRigth.data;

        node.right = remove(node.right, minFromRigth.data);

        return node;
      }
    }
    return remove(this.rootTree, data);
  }

  min() {}

  max() {}
}

module.exports = {
  BinarySearchTree,
};
