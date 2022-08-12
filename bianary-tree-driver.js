const tree = require('./binary-tree');

const randomArray = (length, max) => {
  const returnArray = [];
  for (let i = length; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * max);
    returnArray.push(randomNumber);
  }
  return returnArray;
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const randomTree = () => {
  const testTree = tree();
  testTree.build(randomArray(10,100))
  if (!testTree.isBalanced()) {
    testTree.reBalance();
  }
  console.log(testTree.levelOrder());
  console.log(testTree.preOrder());
  console.log(testTree.postOrder());
  console.log(testTree.inOrder());

  testTree.insert(randomNumber(100,1000));
  testTree.insert(randomNumber(100,1000));
  testTree.insert(randomNumber(100,1000));
  testTree.insert(randomNumber(100,1000));
  testTree.insert(randomNumber(100,1000));

  if (!testTree.isBalanced()) {
    testTree.reBalance();
    if (testTree.isBalanced()) {
      console.log(testTree.levelOrder());
      console.log(testTree.preOrder());
      console.log(testTree.postOrder());
      console.log(testTree.inOrder());
    }
    else {
      return 'failed'
    }
  }
  else {
    return 'failed'
  }
}

randomTree();