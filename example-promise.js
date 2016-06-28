function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers')
    }
  });
}


addPromise(4, 2).then(function (equal) {
  console.log('promise success', equal);
}, function (err) {
  console.log('promise error', err);
});

addPromise('four', 2).then(function (equal) {
  console.log('promise success', equal);
}, function (err) {
  console.log('promise error', err);
});
