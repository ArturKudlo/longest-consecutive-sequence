module.exports = function longestConsecutiveLength(array) {
  if (array.length === 1) return 1;
  if (array.length === 0) return 0;
  array.sort(function (prev, curr) {
      if (curr >= prev) return -1;
      return 1;
  });
  var max = 1;
  var counter = 1;
  for (var i = 1, l = array.length; i <= l - 1; ++i) {
      if (array[i] === array[i - 1]) continue;
      if (array[i] - 1 === array[i - 1]) {
          counter++;
      } else {
          diff = array[i] - i;
          counter = 1;
      }
      max = Math.max(counter, max);
  }
  return max;
};

