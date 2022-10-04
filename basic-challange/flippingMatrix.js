function flippingMatrix(array) {
  let temp = {
    sum: null,
    index: null,
  };

  array.forEach((element, index) => {
    let count = 0;

    element.forEach((element) => {
      count += element;
    });

    if (temp.sum == null || temp.sum < count) {
      (temp.sum = count), (temp.index = index);
    }
  });

  array.forEach((element, index) => {
    if (index === temp.index) {
      element.reverse();
    }
  });
  return array;
}

console.log(
  flippingMatrix([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  flippingMatrix([
    [3, 0, 9],
    [10, 7, 3],
    [9, 4, 1],
  ])
);
