const node = (data) => {
  return {
    left: null,
    data: data,
    right: null,
  }
};

const treeFactory = (returnArray) => {
  const bianaryTree = {root: null};

  const build = (array) => {

    if (array.length === 0) {
      return 'array cannot be empty'
    }

    bianaryTree.root = node(array[0]);
    for (const index in array) {
      if (array[index] != array[0]) {
        addLeaf(array[index], bianaryTree.root);
      }
    }
    return bianaryTree;
  }


  const addLeaf = (data, leaf) => {
    newNode = node(data);
    if( newNode.data < leaf.data ) {
      if (!leaf.left) {
        leaf.left = newNode;
      }
      else if (leaf.left) {
        addLeaf(newNode.data, leaf.left);
      }
    }
    if( newNode.data > leaf.data ) {
      if (!leaf.right) {
        leaf.right = newNode;
      }
      else if (leaf.right) {
        addLeaf(newNode.data, leaf.right)
      }
    }
  }

  const insert = (data) => {
    addLeaf(data, bianaryTree.root)
    return bianaryTree;
  }

  const remove = (data) => {
    let parentNode;
    let smallestChildNode;
    const findSmallest = (leaf) => {
      if (!leaf.left) {
        if (leaf.right) {
          findSmallest(leaf.right);
        }
        else {
          if (leaf.data < smallestChildNode.data) {
            smallestChildNode = leaf;
          }
        }
      }
      else if (leaf.left.data < smallestChildNode.data) {
        smallestChildNode = leaf.left;
        findSmallest(leaf.left);
      }
      else if (leaf.left.data > smallestChildNode.data) {
        findSmallest(leaf.left);
      }
    }
    const removeTraverse = (leaf) => { 
      if (data < leaf.data) { //go left
        parentNode = leaf;
        removeTraverse(leaf.left)
      }
      if (data > leaf.data) { //go right
        parentNode = leaf;
        removeTraverse(leaf.right)
      }
      if (data === leaf.data) {
        if (leaf.left || leaf.right) {
          smallestChildNode = leaf.right;
          findSmallest(leaf.right);
          smallestNumber = smallestChildNode.data;
          remove(smallestChildNode.data);
          if (parentNode.left.data === data) {
            parentNode.left.data = smallestNumber;
          }
          if (parentNode.right.data === data) {
            parentNode.right.data = smallestNumber;
          }
        }
        else {
          if (parentNode.left.data === data) {
            parentNode.left = null
          }
          if (parentNode.right.data === data) {
            parentNode.right = null
          }        
        }
      }
    }
    removeTraverse(bianaryTree.root)
    return;
  }

  const find = (data) => {
    let result = 'Not Found';
    const findTraverse = (leaf) => { 
      if (data === leaf.data) {
        result = leaf;
      }
      else if (leaf.left && data < leaf.data) { //go left
        findTraverse(leaf.left)
      }
      else if (leaf.right && data > leaf.data) { //go right
        findTraverse(leaf.right)
      }
    }
    findTraverse(bianaryTree.root)
    return result;
  }

  const levelOrder = (funct) => {
    const queue = [bianaryTree.root];
    const buildQueue = (leaf) => {
      if (leaf.left) {
        queue.push(leaf.left)
      }
      if (leaf.right) {
        queue.push(leaf.right);
      }
      if (queue[0]) {
        buildResults();
      }
    }

    const result = [];
    const buildResults = () => {
      queue.forEach(node => {
        result.push(node.data);
        queue.shift()
        buildQueue(node);
      })
    }

    buildResults()

    
    if (funct) {
      return result.map(value => {
        return funct(value);
      })
    }
    else {
      return result;
    }
  }

  const inOrder = (funct) => {
    const inOrderTraversal = (leaf) => {
      const result = [];
      if (leaf.left) {
        result.push(...inOrderTraversal(leaf.left));
      }
      result.push(leaf.data)
      if (leaf.right) {
        result.push(...inOrderTraversal(leaf.right));
      }
      return result;
    }
    
    returnArray = inOrderTraversal(bianaryTree.root);

    if (funct) {
      return returnArray.map(value => {
        return funct(value);
      })
    }
    else {
      return returnArray;
    }
  }

  const preOrder = (funct) => {
    const preOrderTraverse = (leaf) => {
      const result = [];
      result.push(leaf.data)
      if (leaf.left) {
        result.push(...preOrderTraverse(leaf.left));
      }
      if (leaf.right) {
        result.push(...preOrderTraverse(leaf.right));
      }
      return result;
    }

    returnArray = preOrderTraverse(bianaryTree.root);

    if (funct) {
      return returnArray.map(value => {
        return funct(value);
      })
    }
    else {
      return returnArray;
    }
  }

  const postOrder = (funct) => {
    const postOrderTraverse = (leaf) => {
      const result = [];
      if (leaf.right) {
        result.push(...postOrderTraverse(leaf.right));
      }
      if (leaf.left) {
        result.push(...postOrderTraverse(leaf.left));
      }
      result.push(leaf.data)
      return result;
    }

    returnArray = postOrderTraverse(bianaryTree.root);

    if (funct) {
      return returnArray.map(value => {
        return funct(value);
      })
    }
    else {
      return returnArray;
    }
  }

  const height = (leaf = bianaryTree.root) => {
    let height = 0;
    const heightTraversal = (leaf, counter) => {
      if (leaf.left) {
        let newCounter = counter + 1;
        heightTraversal(leaf.left, newCounter);
      }
      if (leaf.right) {
        let newCounter = counter + 1;
        heightTraversal(leaf.right, newCounter);
      }
      else {
        if (counter > height) {
          height = counter;
        }
      }
    }
    heightTraversal(leaf, 0)
    return height;
  }

  const depth = (data) => {
    let depth = 1;
    const depthTraversal = (leaf, counter) => {
      if (data === leaf.data) {
        depth = counter;
        return;
      }
      if (leaf.left) {
        counter++;
        depthTraversal(leaf.left, counter)
      }
      if (leaf.right) {
        counter++
        depthTraversal(leaf.right, counter);
      }
    }
    depthTraversal(bianaryTree.root, 0)
    return depth;
  }

  const isBalanced = () => {
    const leftHeight = height(bianaryTree.root.left);
    const rightHeight = height(bianaryTree.root.right);

    if (leftHeight === rightHeight - 1 || leftHeight === rightHeight + 1 || leftHeight === rightHeight) {
      return true;
    }
    if (rightHeight === leftHeight - 1 || rightHeight === leftHeight + 1 || rightHeight === leftHeight) {
      return true;
    }
    else {
      return false;
    }
  }

  const reBalance = () => {
    const sortedArray = inOrder();
    const middle = Math.round(sortedArray.length/2) - 1
    const newRoot = sortedArray.splice(middle, 1);
    sortedArray.unshift(...newRoot);
    build(sortedArray);
    return isBalanced();
  }

  return { build, insert, remove, find, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, reBalance }
}

module.exports = treeFactory;