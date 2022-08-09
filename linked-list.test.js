const list = require('./linked-list');

test('outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3)
  expect(testList.toString()).toBe("1 => 2 => 3 => NULL");
});

test('append to list, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3)
  testList.append(4)
  expect(testList.toString()).toBe("1 => 2 => 3 => 4 => NULL");
});

test('prepend to list, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3)
  testList.prepend(0)
  expect(testList.toString()).toBe("0 => 1 => 2 => 3 => NULL");
});

test('get size', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.size()).toBe(3);
})

test('get head', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.head().data).toBe(1);
})

test('get tail', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.tail().data).toBe(3);
})

test('get data at index 1', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.at(1).data).toBe(2);
})

test('pop from list', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.pop();
  expect(testList.tail().data).toBe(2);
})

test('contains test', () => {
  const testList = list();
  testList.create(1, 2, 'test', 3);
  expect(testList.contains('test')).toBe(true);
})

test('does contains "not here"', () => {
  const testList = list();
  testList.create(1, 2, 'test', 3);
  expect(testList.contains('not here')).toBe(false);
})

test('index of test is 2', () => {
  const testList = list();
  testList.create(1, 2, 'test', 3);
  expect(testList.find('test')).toBe(2);
});

test('index of 1 is 0', () => {
  const testList = list();
  testList.create(1, 2, 'test', 3);
  expect(testList.find(1)).toBe(0);
})

test('index of "not here" is null', () => {
  const testList = list();
  testList.create(1, 2, 'test', 3);
  expect(testList.find('not here')).toBe(null);
})

test('insert test at index 2, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.insertAt('test', 2)
  expect(testList.toString()).toBe("1 => 2 => test => 3 => NULL");
});

test('insert test at index 3, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.insertAt('test', 3)
  expect(testList.toString()).toBe("1 => 2 => 3 => test => NULL");
});

test('insert test at index 0, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.insertAt('test', 0)
  expect(testList.toString()).toBe("test => 1 => 2 => 3 => NULL");
});

test('insert test at index above list size, does not work', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.insertAt('test', 4)).toBe("index does not exist in list, current size = 3");
});

test('insert test at index above list size, then insert test at index 2, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.insertAt('too big', 8);
  testList.insertAt('test', 2)
  expect(testList.toString()).toBe("1 => 2 => test => 3 => NULL");
});

test('remove node at index 1, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.removeAt(1);
  expect(testList.toString()).toBe("1 => 3 => NULL");
});

test('remove last node, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.removeAt(3)
  expect(testList.toString()).toBe("1 => 2 => NULL");
});

test('remove node at index 0, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3);
  testList.removeAt(0);
  expect(testList.toString()).toBe("2 => 3 => NULL");
});


test('remove node at index above list size, does not work', () => {
  const testList = list();
  testList.create(1, 2, 3);
  expect(testList.removeAt( 4)).toBe("index does not exist in list, current size = 3");
});

test('remove node in large list at index 4, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3, 4, 5, 6, 7, 8);
  testList.removeAt(4);
  expect(testList.toString()).toBe("1 => 2 => 3 => 4 => 6 => 7 => 8 => NULL");
});

test('insert test in large list at index 4, and outputs as string', () => {
  const testList = list();
  testList.create(1, 2, 3, 4, 5, 6, 7, 8);
  testList.insertAt('test', 4);
  expect(testList.toString()).toBe("1 => 2 => 3 => 4 => test => 5 => 6 => 7 => 8 => NULL");
});