const tree = require('./binary-tree');

test('builds correct tree', () => {
  const testTree = tree();
  expect(testTree.build([3, 1, 2, 5, 4, 3])).toMatchObject(
    {"root": {"data": 3,
              "left": {"data": 1, 
                        "left": null, 
                        "right": {"data": 2, 
                                  "left": null, 
                                  "right": null
                                 },
                       },
              "right": {"data": 5, 
                        "left": {"data": 4, 
                                 "left": null, 
                                 "right": null
                                }, 
                        "right": null
                       },
            }
    }
  );
});

test('inserts correctly', () => {
  const testTree = tree();
  testTree.build([3, 1, 2, 5, 4, 3]);
  expect(testTree.insert(100)).toMatchObject(
    {"root": {"data": 3,
              "left": {"data": 1, 
                        "left": null, 
                        "right": {"data": 2, 
                                  "left": null, 
                                  "right": null
                                 },
                       },
              "right": {"data": 5, 
                        "left": {"data": 4, 
                                 "left": null, 
                                 "right": null
                                }, 
                        "right": {"data": 100, 
                                  "left": null, 
                                  "right": null
                                 }, 
                       },
            }
    }
  );
});

test('inserts correctly', () => {
  const testTree = tree();
  testTree.build([3, 1, 2, 5, 4, 3]);
  expect(testTree.insert(0)).toMatchObject(
    {"root": {"data": 3,
              "left": {"data": 1, 
                        "left": {"data": 0, 
                                 "left": null, 
                                 "right": null
                                }, 
                        "right": {"data": 2, 
                                  "left": null,
                                  "right": null
                                 },
                       },
              "right": {"data": 5, 
                        "left": {"data": 4, 
                                 "left": null, 
                                 "right": null
                                }, 
                        "right": null
                       },
            }
    }
  );
});

// test('remove works', () => {
//   const testTree = tree();
//   testTree.build([50,30,70,20,40,60,80,32,65,75,85,34,36]);
//   expect(testTree.remove(50)).toEqual(
    
//   );
// });

test('remove works with root', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,65,75,85,34,36]);
  expect(testTree.find(50).data).toEqual(
    50
  );
});

test('remove works left tree', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,65,75,85,34,36]);
  expect(testTree.find(20).data).toEqual(
    20
  );
});

test('remove works right tree', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,65,75,85,34,36]);
  expect(testTree.find(60).data).toEqual(
    60
  );
});

test('remove works not found', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,65,75,85,34,36]);
  expect(testTree.find(4353453)).toEqual(
    'Not Found'
  );
});

test('levelOrder works', () => {
  const testTree = tree();
  testTree.build([3, 1, 2, 5, 4]);
  expect(testTree.levelOrder()).toEqual(
    [3, 1, 5, 2, 4]
  );
});

test('levelOrder works big', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,34,36,65,75,85]);
  expect(testTree.levelOrder()).toEqual(
    [50,30,70,20,40,60,80,32,65,75,85,34,36]
  );
});

test('levelOrder works with function', () => {
  const testTree = tree();
  const addOne = (a) => {
    return a + 1;
  }
  testTree.build([3, 1, 2, 5, 4]);
  expect(testTree.levelOrder(addOne)).toEqual(
    [4, 2, 6, 3, 5]
  );
});

test('inOrder works big', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,34,65,75,85]);
  expect(testTree.inOrder()).toEqual(
    [50,30,70,20,40,60,80,32,34,65,75,85].sort()
  );
});

test('preOrder works', () => {
  const testTree = tree();
  testTree.build([3, 1, 2, 5, 4]);
  expect(testTree.preOrder()).toEqual(
    [3, 1, 2, 5, 4]
  );
});

test('preOrder works big', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,34,36,65,75,85]);
  expect(testTree.preOrder()).toEqual(
    [50,30,20,40,32,34,36,70,60,65,80,75,85]
  );
});

test('preOrder works with inserstion', () => {
  const testTree = tree();
  testTree.build([50, 10, 30, 70, 80]);
  testTree.insert(34)
  expect(testTree.preOrder()).toEqual(
    [50, 10, 30, 34, 70, 80]
  );
});

test('preOrder works with function', () => {
  const testTree = tree();
  const addOne = (a) => {
    return a + 1;
  }
  testTree.build([3, 1, 2, 5, 4]);
  expect(testTree.preOrder(funct = addOne)).toEqual(
    [4, 2, 3, 6, 5]
  );
});

test('postOrder works', () => {
  const testTree = tree();
  testTree.build([3, 1, 2, 5, 4]);
  expect(testTree.postOrder()).toEqual(
    [4,5,2,1,3]
  );
});

test('height works', () => {
  const testTree = tree();
  testTree.build([3,1,2,5,4]);
  expect(testTree.height()).toEqual(
    3
  );
});

test('height works big', () => {
  const testTree = tree();
  testTree.build([50,30,70,20,40,60,80,32,34,36,65,75,85]);
  expect(testTree.height()).toEqual(
    6
  );
});