const array = [3,4,4,5,5,5,5,2,7];

const getSum = (array) => {
  if (array === undefined || array.length == 0) {
    return 0;
  };

  let sorted = array.sort();
  let computed = [array[0]];

  let validator = (item) => {
    if (computed.includes(item)) {
      item++;
      return validator(item);
    };
    return item;
  }

  let reducer = (accumulator, currentValue) => {
    let validated = validator(currentValue);
    computed.push(validated);
    return accumulator + validated;
  };

  return sorted.reduce(reducer);
}

console.log(getSum(array));
