const node = (value, next) => {
  return {
    data: value, 
    next: next,
  };
};

const list = () => {
  const linkedList = {
    head: null,
    tail: null,
    size: 0,
  }

  const create = (...values) => {
    values.map(value => {
      append(value);
    });
  };

  const append = (value) => {
    if (linkedList.size === 0) {
      newNode = node(value, null)
      linkedList.head = newNode;
      linkedList.tail = newNode;
    }
    else {
      oldTail = linkedList.tail;
      linkedList.tail = node(value, null);
      oldTail.next = linkedList.tail;
    }
    linkedList.size++;
  };

  const prepend = (value) => {
    if(linkedList.size === 0) {
      append(value);
    }
    else {
      oldHead = linkedList.head;
      linkedList.head = node(value, oldHead);
      linkedList.size++;
    }
  }

  const size = () => {
    return linkedList.size;
  };
  const head = () => {
    return linkedList.head;
  };
  const tail = () => {
    return linkedList.tail;
  };

  const at = (index) => {
    let currentNode = linkedList.head;
    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  };

  const pop = () => {
    let prenultimateIndex = linkedList.size - 2;
    let currentNode = linkedList.head;
    while (prenultimateIndex > 0) {
      currentNode = currentNode.next;
      prenultimateIndex = prenultimateIndex - 1;
    }
    currentNode.next = null;
    linkedList.tail = currentNode;
  };

  const contains = (value) => {
    let size = linkedList.size;
    let currentNode = linkedList.head;
    let found = false;
    while (size > 0) {
      if (currentNode.data === value) {
        found = true;
      }
      currentNode = currentNode.next;
      size--;
    }
    return found;
  }

  const find = (value) => {
    let size = linkedList.size;
    let currentNode = linkedList.head;
    let indexofValue = null;
    let i = 0;
    while (i < size) {
      if (currentNode.data === value) {
        indexofValue = i;
      }
      currentNode = currentNode.next;
      i++;
    }
    return indexofValue;
  }  

  const insertAt = (value, index) => {
    let currentNode = linkedList.head;
    if (index === 0) {
      linkedList.head = node(value,currentNode);
    }
    else if (index === linkedList.size) {
      newNode = node(value, null);
      linkedList.tail.next = newNode;
      linkedList.tail = newNode;
    }
    else if (index > linkedList.size) {
      return 'index does not exist in list, current size = ' + linkedList.size;
    }
    else {
      let nodeBefore;
      while (index > 0) {
        if (index === 1) {
          nodeBefore = currentNode;
        }
        currentNode = currentNode.next;
        index--;
      }
      newNode = node(value, currentNode);
      nodeBefore.next = newNode;
    } 
    linkedList.size++;
  }
  
  const removeAt = (index) => {
    let currentNode = linkedList.head;
    if (index === linkedList.size) {
      pop();
    }
    else if (index === 0) {
      linkedList.head = currentNode.next;
    }
    else if (index > linkedList.size) {
      return 'index does not exist in list, current size = ' + linkedList.size;
    }
    else {
      while (index > 0) {
        if (index === 1) {
          nodeBefore = currentNode;
        }
        currentNode = currentNode.next;
        index--;
      }
      nodeBefore.next = currentNode.next;
    }
    linkedList.size--;
  }

  const toString = () => {
    let size = linkedList.size;
    let currentNode = linkedList.head;
    let returnString = '';
    while (size > 0) {
      returnString = returnString + currentNode.data + ' => ';
      currentNode = currentNode.next;
      size--;
    }
    returnString = returnString + ('NULL')
    return returnString;
  }

  return { create, append, prepend, size, head, tail, at, pop, contains, find, insertAt, removeAt, toString };
};

module.exports = list;