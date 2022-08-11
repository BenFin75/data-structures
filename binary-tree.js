const node = (data) => {
  return {
    left: null,
    data: data,
    right: null,
  }
};

const treeFactory = (array) => {
  const bianaryTree = {root: null};

  const build = (array) => {

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
      if ( !leaf.left ) {
        leaf.left = newNode;
      }
      else if ( leaf.left ) {
        addLeaf(newNode.data, leaf.left);
      }
    }
    if( newNode.data > leaf.data ) {
      if ( !leaf.right ) {
        leaf.right = newNode;
      }
      else if ( leaf.right ) {
        addLeaf(newNode.data, leaf.right)
      }
    }
  }

  const insert = (data) => {
    addLeaf(data, bianaryTree.root)
    return bianaryTree;
  }

  const postOrder = () => {

  }

  return { build, insert }
}

module.exports = treeFactory;



// if( newNode.data < leaf.data ) {
//   if ( leaf.left ? newNode.data > leaf.left.data : newNode.data > leaf.left  ) {
//     newNode.left = leaf.left;
//     leaf.left = newNode;
//   }
//   else if ( leaf.left ?  newNode.data < newNode.data < leaf.left.data : leaf.left ) {
//     addLeaf(newNode.data, leaf.left);
//   }
// }
// if( newNode.data > leaf.data ) {
//   if ( leaf.right ? newNode.data > leaf.right.data : newNode.data > leaf.right ) {
//     newNode.right = leaf.right;
//     leaf.right = newNode;
//   }
//   else if ( leaf.left && newNode.data < leaf.left.data ) {
//     addLeaf(newNode.data, leaf.left)
//   }
//   else if ( newNode.data > leaf.right.left ) {
//     newNode.left = leaf.right.left;
//     leaf.right.left = newNode;
//   }
// }