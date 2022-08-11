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